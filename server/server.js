const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

//midleware 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//import the router(s)
const userRouter = require('./routes/users');


//app.use the router(s)
app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
}); 
