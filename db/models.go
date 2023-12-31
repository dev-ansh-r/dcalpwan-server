// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.23.0

package db

import (
	"database/sql"
	"encoding/json"
)

type Application struct {
	Appid       int32
	Appeui      string
	Devices     sql.NullInt32
	Description sql.NullString
}

type Gateway struct {
	Gwid        int32
	Gweui       string
	Description sql.NullString
	LastSeen    sql.NullTime
}

type NetworkSetting struct {
	ID               int32
	NetworkType      string
	BeaconTiming     int32
	BeaconPeriod     string
	BeaconSlotLength string
	BeaconChannels   string
	BeaconDr         int32
	ChannelSettings  json.RawMessage
}
