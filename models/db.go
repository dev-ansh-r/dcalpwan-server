package models

import (
	"database/sql"
	"log"
	"os"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

var db *sql.DB

func SetupDB() *sql.DB {
	// Load environment variables from .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
	// Access environment variables
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	dbHost := os.Getenv("DB_HOST")

	// Connect to database
	connStr := "host=" + dbHost + " user=" + dbUser + " dbname=" + dbName + " password=" + dbPassword + " sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	return db

}
