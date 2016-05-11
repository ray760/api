// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes

// Inital Route
/*app.get('/', function(req, res){
  res.send('<b>STEP ONE</b>');
});*/

app.use('/api', require('./routes/api'));


// Start Server
app.listen(3000);
console.log('APP IS LISTENING ON PORT 3000');