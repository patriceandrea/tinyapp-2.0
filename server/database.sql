CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR NOT NULL, 
password VARCHAR NOT NULL
);

CREATE TABLE urls(
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
long_url VARCHAR, 
short_url VARCHAR 
);


-- INSERT INTO users( email, password)VALUES('patrice@yahoo.ca', '123');
-- INSERT INTO urls(user_id, long_url, short_url)VALUES(1, 'https://pomofocus.io/app', '80bc0f');


--- QUERY 
--- url DB
select email, long_url, short_url 
from urls 
left join users on users.id = urls.user_id
where users.id= 1; 

--- users 
select * 
from users; 

