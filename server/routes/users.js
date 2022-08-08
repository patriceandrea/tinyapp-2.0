const router = require('express').Router();
const bcrypt = require('bcryptjs');
const findUserByEmail = require('../helpers')



module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    // const user_id = req.body.user_id;
    const id = req.session.id
    console.log('req.session.id', id);
    const command = `
     select * from users 
     where id= $1;
;`
    const values = [id];
    db.query(command, values).then(data => {
      if (data["rows"].length > 0) {
        return res.json(data.rows);
      }
    })
  });

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
