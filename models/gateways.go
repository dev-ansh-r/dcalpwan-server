package models

type Gateway struct {
	GWID        int
	GWEUI       string
	Description string
	LastSeen    string
}

func InsertGatewayData(gateway Gateway) error {
	_, err := db.Exec("INSERT INTO gateways (gweui, description, last_seen) VALUES ($1, $2, $3)", gateway.GWEUI, gateway.Description, gateway.LastSeen)
	return err
}

func GetGateways() ([]Gateway, error) {
	rows, err := db.Query("SELECT gwid, gweui, description, last_seen FROM gateways")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var gateways []Gateway
	for rows.Next() {
		var gateway Gateway
		err = rows.Scan(&gateway.GWID, &gateway.GWEUI, &gateway.Description, &gateway.LastSeen)
		if err != nil {
			return nil, err
		}
		gateways = append(gateways, gateway)
	}
	return gateways, nil
}
