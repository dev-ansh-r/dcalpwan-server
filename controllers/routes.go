package controllers

import (
	"database/sql"
	"log"

	"github.com/gin-gonic/gin"
)

func GetDBFromContext(c *gin.Context) *sql.DB {
	db, exists := c.Get("db")
	if !exists {
		// Handle the case where the database connection is not found in the context
		log.Fatal("Database connection not found in context")
	}
	return db.(*sql.DB)
}

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

	router.GET("/applications/add", func(c *gin.Context) {
		c.HTML(200, "addapplications.html", gin.H{
			"pageTitle": "Add Application",
		})
	})

	router.GET("/gateways/add", func(c *gin.Context) {
		c.HTML(200, "addgateways.html", gin.H{
			"pageTitle": "Add Gateway",
		})
	})

	// router.GET("/gateways/:id:eui", func(c *gin.Context) {

	// })

	// router.GET("/gateways/:id:eui/settings", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui/settings", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui/devices", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui/data", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui/devices/register", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui/devices/:id:deveui", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui/devices/:id:deveui/data", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui/devices/:id:deveui/settings", func(c *gin.Context) {

	// })

	// router.GET("applications/:id:eui/devices/:id:deveui/maccommands", func(c *gin.Context) {

	// })

}
