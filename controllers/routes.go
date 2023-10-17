package controllers

import (
	"database/sql"

	"github.com/gin-gonic/gin"
)

// SetupRoutes sets up the routes for your application.
func SetupRoutes(router *gin.Engine, db *sql.DB) {
	// Define your routes and handlers here
	// For example:
	router.GET("/", func(c *gin.Context) {
		c.HTML(200, "home.html", gin.H{
			"pageTitle": "Home Page",
		})
	})

	router.GET("/applications", func(c *gin.Context) {
		c.HTML(200, "applications.html", gin.H{
			"pageTitle": "Applications",
		})
	})

	router.GET("/gateways", func(c *gin.Context) {
		c.HTML(200, "gateways.html", gin.H{
			"pageTitle": "Gateways",
		})
	})

	router.GET("/network", func(c *gin.Context) {
		c.HTML(200, "network.html", gin.H{
			"pageTitle": "Network",
		})
	})
}
