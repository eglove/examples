package routes

import (
	"ethang.dev/rest-api/middlewares"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(server *gin.Engine) {
	server.POST("/signup", signup)
	server.POST("/login", login)

	events := server.Group("/events")
	events.GET("/", getEvents)
	events.GET("/:id", getEvent)

	events.Use(middlewares.Authenticate)
	events.POST("/", createEvent)
	events.PUT("/:id", updateEvent)
	events.DELETE("/:id", deleteEvent)

}
