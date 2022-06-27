const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');

const app = express();
const port = process.env.PORT || 8001;

//midleware 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieSession({
  name: 'session',
  keys: ['iAMaKEyyyyyyyyyy', 'IaMTheSecondKey'],


}));


//import the router(s)
const userRouter = require('./routes/users');
const urlRouter = require('./routes/urls');

//app.use the router(s)
app.use('/users', userRouter);
app.use('/urls', urlRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
}); 
