package routes

import (
	"ethang.dev/rest-api/models"
	"ethang.dev/rest-api/utils"
	"github.com/gin-gonic/gin"
	"net/http"
)

func signup(context *gin.Context) {
	var user models.User
	err := context.ShouldBindJSON(&user)

	if err != nil {
		context.JSON(http.StatusBadRequest, utils.NewResponseData("Could not parse request data", nil))
		return
	}

	err = user.Save()

	if err != nil {
		context.JSON(http.StatusInternalServerError, utils.NewResponseData("Failed to save user", nil))
		return
	}

	context.JSON(http.StatusCreated, utils.NewResponseData("", models.UserResponse{
		ID:    user.ID,
		Email: user.Email,
	}))
}

func login(context *gin.Context) {
	var user models.User

	err := context.ShouldBindJSON(&user)

	if err != nil {
		context.JSON(http.StatusBadRequest, utils.NewResponseData("Invalid request body", nil))
		return
	}

	err = user.ValidateCredentials()

	if err != nil {
		context.JSON(http.StatusUnauthorized, utils.NewResponseData(err.Error(), nil))
		return
	}

	token, err := utils.GenerateToken(user.Email, user.ID)

	if err != nil {
		context.JSON(http.StatusInternalServerError, utils.NewResponseData("Failed to authenticate", nil))
		return
	}

	context.JSON(http.StatusOK, utils.NewResponseData("", models.UserLoginResponse{
		UserResponse: models.UserResponse{
			ID:    user.ID,
			Email: user.Email,
		},
		Token: token,
	}))
}
