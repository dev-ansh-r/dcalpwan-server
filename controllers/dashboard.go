package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var router *gin.Engine
var upgrader = websocket.Upgrader{}

func SetupDashboardAPI() {

	router.GET("/", func(c *gin.Context) {
		// Render the single HTML template for the home page
		c.HTML(http.StatusOK, "index.html", gin.H{
			"page": "home",
		})
	})

	router.GET("/applications", func(c *gin.Context) {
		// Render the single HTML template for the applications page
		c.HTML(http.StatusOK, "index.html", gin.H{
			"page": "applications",
		})
	})

	router.GET("/gateways", func(c *gin.Context) {
		// Render the single HTML template for the gateways page
		c.HTML(http.StatusOK, "index.html", gin.H{
			"page": "gateways",
		})
	})

	// Additional routes for managing applications and gateways
}

func StartServer() {
	router = gin.Default()
	router.Delims("{[{", "}]}")

	// Serve static files from the "static" directory
	router.Static("/static", "./static")
	router.LoadHTMLFiles("./templates/index.html")
	// You mentioned you only have one HTML template ("index.html")
	// and it's already loaded in your "index.html" template
	// Therefore, there's no need to load HTML files explicitly here.

	SetupDashboardAPI()

	router.Run(":8080")
}
