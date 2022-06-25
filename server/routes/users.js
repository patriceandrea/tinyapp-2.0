const express = require('express');
const router = express.Router();

//mock data for now
// const users = {
//   abc: {
//     id: 'abc',
//     task: 'help me',
//     completed: false
//   },
//   def: {
//     id: 'def',
//     task: 'planks',
//     completed: true

//   }
// }
const users =
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

//Create - Post /shortUrl 
router.post('/', (req, res) => {
  const task = req.body.task;

  //generate a new id  
  const id = Math.random().toString(36).substring(2, 5);


  const newUser = {
    id,
    task,
    completed: false
  };

  users[id] = newUser;
  console.log(users);

  res.status(201).json(newUser);
});


//Read - Get /shortUrl 
router.get('/', (req, res) => {
  const usersArr = Object.values(users);
  res.json(usersArr);
})

//Update - Patch/Put  /shortUrl/:id or /edit
router.patch('/:id', (req, res) => {
  const { newTask, completed } = req.body;

  const todoId = req.params.id;

  users[todoId].task = newTask;

  if (completed !== undefined) {
    users[todoId].completed = completed;
  }
  console.log(users[todoId].task);
  console.log(users);


  res.status(200).send({ sucess: true });
});


//Delete - Delete /shortUrl/:id



module.exports = router; 