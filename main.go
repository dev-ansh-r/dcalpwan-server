package main

import (
	"github.com/dev-ansh-r/lorawan-server/controllers"
)

func main() {
	// models.DBConnect()
	// models.DBMigrate()

	// defer models.DBClose()

	// go controllers.StartJoinServer()

	controllers.StartServer()
}
