CREATE TABLE users (
    users_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    picture TEXT,
    name VARCHAR(255),
    username VARCHAR(255),
    location VARCHAR(255),
    phone VARCHAR(50),
    short_bio TEXT,
    UNIQUE(email)
);

CREATE INDEX users_email ON users(email);

CREATE TABLE interest_tags (
    tags VARCHAR(255),
    tag_id INT REFERENCES users(users_id)
);

CREATE TABLE deeds (
    deeds_id SERIAL PRIMARY KEY,
    category VARCHAR(50),
    title VARCHAR(25),
    description TEXT,
    date_created TIMESTAMP,
    date_todo TIMESTAMP,
    location VARCHAR(50),
    status VARCHAR(20),
    users_id INT REFERENCES users(users_id)
);

CREATE TABLE available_deeds (
    ad_id SERIAL PRIMARY KEY,
    deeds_id INT REFERENCES deeds(deeds_id)
);

CREATE TABLE upcoming_deeds (
    up_id SERIAL PRIMARY KEY,
    deeds_id INT REFERENCES deeds(deeds_id)
);

CREATE TABLE completed_deeds (
    cd_id SERIAL PRIMARY KEY,
    deeds_id INT REFERENCES deeds(deeds_id)
);
