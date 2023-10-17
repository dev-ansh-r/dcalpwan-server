package models

type Application struct {
	APPID       int
	APPEUI      string
	Devices     int
	Description string
}

func InsertApplicationData(application Application) error {
	_, err := db.Exec("INSERT INTO applications (appeui, devices, description) VALUES ($1, $2, $3)", application.APPEUI, application.Devices, application.Description)
	return err
}

func GetApplications() ([]Application, error) {
	rows, err := db.Query("SELECT appid, appeui, devices, description FROM applications")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var applications []Application
	for rows.Next() {
		var application Application
		err = rows.Scan(&application.APPID, &application.APPEUI, &application.Devices, &application.Description)
		if err != nil {
			return nil, err
		}
		applications = append(applications, application)
	}
	return applications, nil
}
