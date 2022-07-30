require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const db = require('./db')
const bodyParser = require('body-parser');
const app = express();
const port = 8001;


//midleware 
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3002', methods: 'GET, POST, DELETE', credentials: true }))
app.use(cookieSession({
  name: 'session',
  keys: ['iAMaKEyyyyyyyyyy', 'IaMTheSecondKey'],


}));
app.use(cookieParser());



//import the router(s)
const userRouter = require('./routes/users');
const urlRouter = require('./routes/urls');

//app.use the router(s)
app.use('/users', userRouter(db));
app.use('/urls', urlRouter(db));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
}); 
