const express = require('express');
const app = express();
const cors = require('cors'),
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const formController = require('./../controller/formController');

const PORT = 3000;

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds151752.mlab.com:51752/sidehustle');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('./../../post.html');
});

app.post('/post', formController.createForm, (req, res, next => {
  res.render('./../../post.html');
}));





app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
