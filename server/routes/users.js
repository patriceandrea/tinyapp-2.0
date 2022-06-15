const express = require('express');
const router = express.Router();

//mock data for now
const users = {
  abc: {
    id: 'abc',
    task: 'help me',
    completed: false
  },
  def: {
    id: 'def',
    task: 'planks',
    completed: true

  }
}

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