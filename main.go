package main

import (
	"github.com/dev-ansh-r/dcalpwan-server/controllers"
	"github.com/dev-ansh-r/dcalpwan-server/models"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

func main() {
	r := gin.Default()

	// Serve static files
	r.Static("/static", "./static")
	// Load HTML templates
	r.LoadHTMLGlob("templates/*.html")

	// Setup the database and get the db connection
	db := models.SetupDB()
	defer db.Close() // Close the database connection when the application exits

	// Pass the db connection to your controllers
	controllers.SetupRoutes(r, db)

	r.Run(":8080")
}
