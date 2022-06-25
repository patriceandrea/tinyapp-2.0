const express = require('express');
const router = express.Router();

const urls =
{
  "b2xVn2": {
    longURL: "http://www.lighthouselabs.ca",
    user_id: "38jd48"
  },
  "9sm5xK": {
    longURL: "http://www.google.com",
    user_id: "9sd4u3"
  },
  "urlLong": {
    longURL: "https://pomofocus.io/app",
    user_id: "2fw44e"
  },
  "shire": {
    longURL: 'https://www.facebook.com/',
    user_id: "user2RandomID"
  },
  "isurfshfg": {
    longURL: 'https://web.compass.lighthouselabs.ca/days/today',
    user_id: "87ybe6"
  },
  "foo": {
    longURL: "http://ryan.com",
    user_id: "user2RandomID"

  },
  "bar": {
    longURL: "http://bar.com",
    user_id: "userRandomID"
  }
};


router.get('/', (req, res) => {
  const usersArr = Object.values(urls);
  res.json(usersArr);
})



module.exports = router; 
