const router = require('express').Router();
const bcrypt = require('bcryptjs');
const findUserByEmail = require('../helpers')

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






//   // //Read - Get /shortUrl 
//   // router.get('/', (req, res) => {
//   //   const usersArr = Object.values(users);
//   //   res.json(usersArr);
//   // })

//   // //Update - Patch/Put  /shortUrl/:id or /edit
//   // router.patch('/:id', (req, res) => {
//   //   const { newTask, completed } = req.body;

//   //   const todoId = req.params.id;

//   //   users[todoId].task = newTask;

//   //   if (completed !== undefined) {
//   //     users[todoId].completed = completed;
//   //   }
//   //   console.log(users[todoId].task);
//   //   console.log(users);


//   //   res.status(200).send({ sucess: true });
//   // });


//   //Delete - Delete /shortUrl/:id


//   return router;
// }


module.exports = (db) => {
  // all routes will go here
  //login works! 
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send('Wrong email or password');
    }


    findUserByEmail(email, db)
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
        console.log('yppp', error);
      });
  });

  //this works!
  router.post('/register', (req, res) => {

    let { email, password } = req.body
    password = bcrypt.hashSync(password, 12);
    const command = ' INSERT INTO users (email, password) VALUES($1, $2) RETURNING *;'
    const values = [email, password]
    db.query(command, values).then(data => {

      if (data["rows"].length > 0) {

        req.session.id = data["rows"][0].id
        return res.status(200).send({
          "success": true,
          "message": "Sign up successful",
          "user": data["rows"][0]
        })
      }

    })
      .catch((err) => console.log(err));

  })



  router.post('/logout', (req, res) => {
    req.session = null;
    return res.status(200).send({ "message": "Logout successful" });
  });




  return router;
}