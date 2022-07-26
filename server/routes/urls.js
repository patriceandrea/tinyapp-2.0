const router = require('express').Router();

//mock db 
const urls =
{
  "b2xVn2": {
    longURL: "http://www.lighthouselabs.ca",
    shortURL: "i84ij52d",
    user_id: "38jd48"
  },
  "9sm5xK": {
    longURL: "http://www.google.com",
    shortURL: "83unf4m0",
    user_id: "9sd4u3"
  },
  "urlLong": {
    longURL: "https://pomofocus.io/app",
    shortURL: "4jr94jgh",
    user_id: "2fw44e"
  },
  "shire": {
    longURL: 'https://www.facebook.com/',
    shortURL: "48jfn39f",
    user_id: "user2RandomID"
  },
  "isurfshfg": {
    longURL: 'https://web.compass.lighthouselabs.ca/days/today',
    shortURL: "jri30j3n",
    user_id: "87ybe6"
  },
  "foo": {
    longURL: "http://ryan.com",
    shortURL: "n4ifn2nw",
    user_id: "user2RandomID"

  },
  "bar": {
    longURL: "http://bar.com",
    shortURL: "dn3f49jo",
    user_id: "userRandomID"
  }
};


// router.get('/', (req, res) => {
//   const usersArr = Object.values(urls);
//   res.json(usersArr);
// })

// /// patch 
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

// module.exports = router; 

//this works!
module.exports = (db) => {
  router.get('/urls', (req, res) => {
    // const user_id = req.body.user_id;
    const user_id = req.session.id
    console.log(req.session)
    const command = `
    select urls.user_id, long_url, short_url 
    from urls 
    left join users on users.id = urls.user_id
    where user_id= $1;`
    const values = [user_id];

    db.query(command, values).then(data => {
      if (data["rows"].length > 0) {
        return res.json(data.rows);
      }
    })
  });

  //from the mock db 
  router.get('/', (req, res) => {
    const usersArr = Object.values(urls);
    res.json(usersArr);
  })

  return router;
}