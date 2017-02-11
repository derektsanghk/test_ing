
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// make express look in static directory for assets css/js/img
app.use(express.static(__dirname + '/public/'));
// set the home page route

app.get('/', function(req, res) {
  // ejs render automatically looks in views folder
  res.render('index');
});

//process.env.PORT allows Heroku to set the port 
//or app starts local server and listens on port3000 for connections
app.listen(process.env.PORT || 3000) 
