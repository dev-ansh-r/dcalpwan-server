-- name: GetApplicationByID :one
SELECT * FROM applications
WHERE appid = $1
LIMIT 1;

-- name: ListApplications :many
SELECT * FROM applications;


-- name: CreateApplication :exec
INSERT INTO applications (
    appid,
    appeui,
    description,
    devices
) VALUES (
    $1, $2, $3, $4
);

-- name: DeleteApplication :exec
DELETE FROM applications
WHERE appid = $1;


-- name: ListGateway :many
SELECT * FROM gateways;

-- name: CreateGateway :exec
INSERT INTO gateways (
    gwid,
    gweui,
    description,
    last_seen
) VALUES (
    $1, $2, $3, $4
);


-- name: GetNetworkSettings :one
SELECT * FROM network_settings
WHERE network_type = $1
LIMIT 1;

-- name: InsertOrUpdateNetworkSettings :exec
INSERT INTO network_settings (
    network_type,
    beacon_timing,
    beacon_period,
    beacon_slot_length,
    beacon_channels,
    beacon_dr,
    channel_settings
) VALUES (
    $1, $2, $3, $4, $5, $6, $7
)
ON CONFLICT (network_type)
DO UPDATE
SET beacon_timing = EXCLUDED.beacon_timing,
    beacon_period = EXCLUDED.beacon_period,
    beacon_slot_length = EXCLUDED.beacon_slot_length,
    beacon_channels = EXCLUDED.beacon_channels,
    beacon_dr = EXCLUDED.beacon_dr,
    channel_settings = EXCLUDED.channel_settings;
