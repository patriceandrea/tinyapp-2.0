const express = require('express');
const router = express.Router();
const findUserByEmail = require('../helpers')

//mock data for now

const users = {
  "userRandomID": {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur"
  },
  "user2RandomID": {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk"
  }
};

//Create - Post /login
router.post('/login', (req, res) => {
  const user = findUserByEmail(req.body.email, users);

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    req.session.user_id = user.id;
    res.redirect('/myurls');
  } else {

    res.status(403).send('Email cannot be found');

  }
});

/// Post - Register 




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