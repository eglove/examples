package main

import (
	"ethang.dev/rest-api/db"
	"ethang.dev/rest-api/routes"
	"fmt"
	"github.com/gin-gonic/gin"
)

func main() {
	db.InitDB()
	server := gin.Default()

	routes.RegisterRoutes(server)

	fmt.Println("Running on http://localhost:8080")
	server.Run(":8080")
}
