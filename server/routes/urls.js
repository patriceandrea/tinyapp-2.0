const users = require('./users');

const router = require('express').Router();



//this works!
// to use for real 
module.exports = (db) => {
  router.get('/urls', (req, res) => {
    // const user_id = req.body.user_id;
    const user_id = req.session.id
    console.log('req.session.id', req.session.id);
    const command = `
    select urls.user_id, long_url, short_url, urls.id 
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


  /// get request once the short url has been generated 
  //works!
  router.get('/:id', (req, res) => {
    // const user_id = req.body.user_id;
    // const short_url = req.params.shortUrl;
    const user_id = req.session.id
    const id = req.params.id
    const command = `
    select  urls.id, long_url, short_url, user_id
    from urls 
    left join users on users.id = urls.user_id
    where urls.id= $1
    and user_id = $2
    ;`
    const values = [id, user_id];

    db.query(command, values).then(data => {

      if (data["rows"].length > 0) {
        return res.json(data.rows);
      }
    })
  });




  //Create
  //for the short URL generator   
  function generateRandomString() {
    return Math.floor((1 + Math.random()) * 0x1000000).toString(16).substring(1);
  };
  router.post('/add', (req, res) => {


    const user_id = req.session.id;
    const long_url = req.body.longUrl;
    const short_url = generateRandomString();
    const command = `INSERT INTO urls(user_id, long_url, short_url)VALUES($1, $2, $3);`
    values = [user_id, long_url, short_url];
    db.query(command, values).then(data => {
      console.log("Sucess!");
      return res.json(data.rows);
    })
      .catch((err) => console.log(err))
  })





  ///Edit 
  //put request works!
  router.put('/edit/:id', (req, res) => {
    const user_id = req.session.id
    const short_url = req.params.shortUrl;
    const { long_url } = req.body;

    const command =
      ` UPDATE urls
      SET long_url = $1
      WHERE user_id = $2
      AND short_url = $3
     returning *;`
    values = [long_url, user_id, short_url];

    db.query(command, values).then(data => {
      if (data["rows"].length > 0) {

        return res.status(200).send({
          "success": true,
          "message": "Long Url has been updated successfully!",
          "user_id": req.session.id
        })
      }
      console.log(data["rows"])
      return res.status(404).send("Error creating profile page")

    })

  });


  //Delete 
  //this works 
  router.delete('/delete/:id', (req, res) => {
    // const user_id = req.session.id
    const id = req.params.id

    const command =
      ` DELETE FROM urls 
      WHERE id=$1
       returning *;`
    values = [id];

    db.query(command, values).then(data => {
      if (data["rows"].length > 0) {
        return res.status(204).send();
      }
      return res.status(404).send({
        "message": "Cannot delete long URl"
      })

    })

  });


  //from the mock db 
  // router.get('/', (req, res) => {
  //   const usersArr = Object.values(urls);
  //   res.json(usersArr);
  // })

  return router;
}