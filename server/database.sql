CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR NOT NULL, 
password VARCHAR NOT NULL
);


-- INSERT INTO users( email, password)VALUES('patrice@yahoo.ca', '123');