
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true });
// const bookRouter = express.Router();
const port = process.env.PORT || 4500;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon api');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
