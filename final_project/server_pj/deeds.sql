CREATE DATABASE gooddeeds;

-- CREATE TABLE deeds(
--     deeds_id SERIAL PRIMARY KEY,
--     title VARCHAR(25),
--     description VARCHAR(255)

-- );

CREATE TABLE deeds(
    deeds_id SERIAL PRIMARY KEY,
    category VARCHAR(50),
    title VARCHAR(25),
    description VARCHAR(255),
    date_created timestamp,
    date_todo timestamp,
    location VARCHAR(50),
    completed BOOLEAN
);

    user_id integer references users(user_id)


CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(25),
    last_name  VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(30),
    phone VARCHAR(20)
);

    category VARCHAR(50) references deeds(category)
