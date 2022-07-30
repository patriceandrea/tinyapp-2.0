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
-- INSERT INTO urls(user_id, long_url, short_url)VALUES(2, 'https://pomofocus.io/app', '80bc0f');


--- QUERY 
--- url DB
select email, long_url, short_url 
from urls 
left join users on users.id = urls.user_id
where users.id= 1; 



 select  urls.user_id, long_url, short_url, urls.id
    from urls 
    left join users on users.id = urls.user_id
    where user_id= 3
    and short_url= '21dc06'
    ;
--- users 
select * 
from users; 

--Update
UPDATE users 
set password = " $2a$12$rLvcVDWkUWqJBYFSyVGX7eeyuQwlBMw1zhduS5GU.VWkYQLsQ2jte"
where users.id = 1;

UPDATE urls 
SET long_url='www.facebook.com'
where user_id=2;

UPDATE urls
SET long_url = 'https://pomofocus.io/app'
WHERE user_id = 1;

UPDATE urls
SET long_url ='andasasy.com'
WHERE user_id = 3
AND short_url = '5388bf';

---Delete

DELETE FROM urls WHERE long_url='www.facebook.com';
DELETE FROM urls WHERE user_id is null;
DELETE FROM urls WHERE user_id =3;