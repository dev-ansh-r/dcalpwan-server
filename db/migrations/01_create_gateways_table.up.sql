CREATE TABLE gateways (
    gwid SERIAL PRIMARY KEY,
    gweui TEXT NOT NULL,
    description TEXT,
    last_seen TIMESTAMP
);