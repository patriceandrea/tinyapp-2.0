const router = require('express').Router();
const findUserByEmail = require('../helpers');
const bcrypt = require('bcryptjs');



//mock data for now

// const users = {
//   "userRandomID": {
//     id: "userRandomID",
//     email: "user@example.com",
//     password: "purple-monkey-dinosaur"
//   },
//   "user2RandomID": {
//     id: "user2RandomID",
//     email: "user2@example.com",
//     password: "dishwasher-funk"
//   }
// };


module.exports = (db, dbQueries) => {

  //Create - Post /login
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send('Wrong email or password');
    }

    dbQueries.getUserByEmail(email, db)
      .then(user => {
        if (user) {
          bcrypt.compare(req.body.password, user.password, function (err, response) {
            if (err) {
              return res.status(401).send({
                sucess: false, message: 'No user found'
              });
            } if (response) {

              req.session.id = user.id;
              res.status(200).send({ success: true, message: 'Login succesful', user: user });
            } else {
              return res.status(400).send({ success: false, message: 'passwords do not match' });
            }
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  /// Post - Register 




  // //Read - Get /shortUrl 
  // router.get('/', (req, res) => {
  //   const usersArr = Object.values(users);
  //   res.json(usersArr);
  // })

  // //Update - Patch/Put  /shortUrl/:id or /edit
  // router.patch('/:id', (req, res) => {
  //   const { newTask, completed } = req.body;

  //   const todoId = req.params.id;

  //   users[todoId].task = newTask;

  //   if (completed !== undefined) {
  //     users[todoId].completed = completed;
  //   }
  //   console.log(users[todoId].task);
  //   console.log(users);


  //   res.status(200).send({ sucess: true });
  // });


  //Delete - Delete /shortUrl/:id


  return router;
}