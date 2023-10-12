package main

import (
	"github.com/dev-ansh-r/lorawan-server/controllers"
	// "github.com/ptquang2000/lorawan-server/models"
)

func main() {
	// models.DBConnect()
	// models.DBMigrate()

	// defer models.DBClose()

	// go controllers.StartJoinServer()

	controllers.StartServer()
}
