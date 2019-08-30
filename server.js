var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Pilots = require('./api/models/pilotModels'), //created model loading here
  Airplanes = require('./api/models/airplaneModels'), //created model loading here
  Users = require('./api/models/userModels'),
  Manifests = require('./api/models/manifestModels'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/spaircraftdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('SP Aircraft RESTful API server started on: ' + port);
