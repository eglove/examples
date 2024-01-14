package middlewares

import (
	"ethang.dev/rest-api/utils"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Authenticate(context *gin.Context) {
	token := context.Request.Header.Get("Authorization")

	if token == "" {
		context.AbortWithStatusJSON(http.StatusUnauthorized, utils.NewResponseData("Not authorized", nil))
		return
	}

	userId, err := utils.VerifyToken(token)

	if err != nil {
		context.AbortWithStatusJSON(http.StatusUnauthorized, utils.NewResponseData("Not authorized", nil))
		return
	}

	context.Set("userId", userId)

	context.Next()
}
