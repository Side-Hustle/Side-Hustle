const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const formController = require('./../controller/formController');

const PORT = 3000;

mongoose.connect('mongodb://sidehustle:codesmith15@ds151752.mlab.com:51752/sidehustle');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use('/build', express.static(__dirname +'./../build'));
app.use('/static', express.static(__dirname +'./../static'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../static/post.html'));
});

app.post('/post', formController.createForm);
// , ((req, res, next) => {
//   res.sendFile(path.join(__dirname + './../static/post.html'));
// }));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
