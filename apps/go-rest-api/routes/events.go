package routes

import (
	"ethang.dev/rest-api/models"
	"ethang.dev/rest-api/utils"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func getEvents(context *gin.Context) {
	events, err := models.GetAllEvents()

	if err != nil {
		context.JSON(http.StatusInternalServerError, utils.NewResponseData("Could not fetch events", nil))
		return
	}
	context.JSON(http.StatusOK, utils.NewResponseData("", events))
}

func getEvent(context *gin.Context) {
	eventId, err := strconv.ParseInt(context.Param("id"), 10, 64)

	if err != nil {
		context.JSON(http.StatusBadRequest, utils.NewResponseData("Invalid id", nil))
		return
	}

	event, err := models.GetEventById(eventId)

	if err != nil {
		context.JSON(http.StatusNotFound, utils.NewResponseData("Event not found", nil))
		return
	}

	context.JSON(http.StatusOK, utils.NewResponseData("", event))
}

func createEvent(context *gin.Context) {
	var event models.Event
	err := context.ShouldBindJSON(&event)

	if err != nil {
		context.JSON(http.StatusBadRequest, utils.NewResponseData("Could not parse request data", nil))
		return
	}

	userId := context.GetInt64("userId")

	event.UserID = userId
	err = event.Save()

	if err != nil {
		context.JSON(http.StatusInternalServerError, utils.NewResponseData("Could not create event", nil))
	}

	context.JSON(http.StatusOK, utils.NewResponseData("", event))
}

func updateEvent(context *gin.Context) {
	eventId, err := strconv.ParseInt(context.Param("id"), 10, 64)

	if err != nil {
		context.JSON(http.StatusBadRequest, utils.NewResponseData("Invalid id", nil))
		return
	}

	userId := context.GetInt64("userId")
	event, err := models.GetEventById(eventId)

	if err != nil {
		context.JSON(http.StatusNotFound, utils.NewResponseData("Event not found", nil))
		return
	}

	if event.UserID != userId {
		context.JSON(http.StatusUnauthorized, utils.NewResponseData("Not authorized", nil))
		return
	}

	var updatedEvent models.Event
	err = context.ShouldBindJSON(&updatedEvent)

	if err != nil {
		context.JSON(http.StatusBadRequest, utils.NewResponseData("Invalid body", nil))
		return
	}

	updatedEvent.ID = eventId
	err = updatedEvent.Update()

	if err != nil {
		context.JSON(http.StatusInternalServerError, utils.NewResponseData("Failed to update event", nil))
		return
	}

	context.JSON(http.StatusOK, utils.NewResponseData("", updatedEvent))
}

func deleteEvent(context *gin.Context) {
	eventId, err := strconv.ParseInt(context.Param("id"), 10, 64)

	if err != nil {
		context.JSON(http.StatusBadRequest, utils.NewResponseData("Invalid id", nil))
		return
	}

	userId := context.GetInt64("userId")
	event, err := models.GetEventById(eventId)

	if err != nil {
		context.JSON(http.StatusNotFound, utils.NewResponseData("Event not found", nil))
		return
	}

	if event.UserID != userId {
		context.JSON(http.StatusUnauthorized, utils.NewResponseData("Not authorized", nil))
		return
	}

	err = event.Delete()

	if err != nil {
		context.JSON(http.StatusNotFound, utils.NewResponseData("Failed to delete event", nil))
		return
	}

	context.JSON(http.StatusOK, utils.NewResponseData("", event))
}
