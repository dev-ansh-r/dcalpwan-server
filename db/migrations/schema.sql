-- Define a table to store network settings
CREATE TABLE IF NOT EXISTS network_settings (
    id SERIAL PRIMARY KEY,
    network_type VARCHAR(50) NOT NULL,
    beacon_timing INT NOT NULL,
    beacon_period VARCHAR(10) NOT NULL,
    beacon_slot_length VARCHAR(10) NOT NULL,
    beacon_channels VARCHAR(255) NOT NULL,
    beacon_dr INT NOT NULL,
    channel_settings JSON NOT NULL
);

-- Create a table for applications
CREATE TABLE IF NOT EXISTS applications (
    appid SERIAL PRIMARY KEY,
    appeui VARCHAR(16) NOT NULL,
    devices INT,
    description TEXT
);

-- Create a table for gateways
CREATE TABLE IF NOT EXISTS gateways (
    gwid SERIAL PRIMARY KEY,
    gweui VARCHAR(16) NOT NULL,
    description TEXT,
    last_seen TIMESTAMP
);
