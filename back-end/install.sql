CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    picture TEXT,
    name VARCHAR(255),
    username VARCHAR(255),
    location VARCHAR(255),
    phone VARCHAR(50),
    short_bio TEXT
);

CREATE INDEX users_email ON users(email);

CREATE TABLE deeds (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50),
    title VARCHAR(25),
    description TEXT,
    date_created TIMESTAMP,
    date_todo TIMESTAMP,
    location VARCHAR(50),
    status VARCHAR(20),
    assigner_id INT REFERENCES users(id)
);

CREATE TABLE users_deeds (
    id SERIAL PRIMARY KEY,
    assigned_id INT REFERENCES users(id),
    deeds_id INT REFERENCES deeds(id)
);

CREATE UNIQUE INDEX idx_users_deeds
ON users_deeds(assigned_id, deeds_id);