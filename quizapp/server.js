//<----------Import dependencies -------------------->
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const app = express();
const jwt = require('jsonwebtoken');
const Quizuser = require('./models/quizUser');
const Score = require('./models/scoreModel');
const check = require('./middleware/check');
dotenv.config({ path: './.env' });
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(cors());
app.use(cookieParser());

//<----------------Database connection ---------------->
mongoose
  .connect(process.env.DB_URL, {
  })
  .then(() => console.log('MongoDB is connected'));


app.get('/', (req, res) => {
  res.send('Testing testing, 1 2, 1 2');
});

app.listen(5000, () => {
  console.log('Server is online');
});
  