CREATE TABLE applications (
    appid SERIAL PRIMARY KEY,
    appeui TEXT NOT NULL,
    devices INTEGER,
    description TEXT
);