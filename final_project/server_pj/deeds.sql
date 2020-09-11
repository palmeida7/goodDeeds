CREATE DATABASE gooddeeds;

CREATE TABLE deeds(
    deeds_id SERIAL PRIMARY KEY,
    title VARCHAR(25),
    description VARCHAR(255)

);

CREATE TABLE deeds1(
    deeds_id SERIAL PRIMARY KEY,
    category VARCHAR(50),
    title VARCHAR(25),
    description VARCHAR(255),
    date_created timestamp,
    date_todo timestamp (?),
    location VARCHAR(50),
    completed BOOL,
    user_id FOR KEY


);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(25),
    last_name  VARCHAR(100),
    email EMAIL,
    phone PHONE,
    category FOR KEY

)