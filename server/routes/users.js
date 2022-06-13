const express = require('express');
const router = express.Router();

//mock data for now
const users = {
  abc: {
    id: 'abc',
    task: '',
    completed: false
  },
  def: {
    id: 'def',
    task: 'planks',
    completed: true

  }
}

//Create - Post /shortUrl 

//Read - Get /shortUrl 
router.get('/', (req, res) => {
  const usersArr = Object.values(users);
  res.json(usersArr);
})

//Update - Patch/Put  /shortUrl/:id

//Delete - Delete /shortUrl/:id



module.exports = router; 