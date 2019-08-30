'use strict';


var mongoose = require('mongoose'),
  Pilots = mongoose.model('Pilots');

exports.list_all_pilots = function(req, res) {

  Pilots.find({}, function(err, pilot) {
    if (err)
      res.send(err);
    res.json(pilot);
  });
};


exports.create_a_pilot = function(req, res) {
  var pilot = new Pilots(req.body);
  pilot.save(function(err, pilot) {
    if (err)
      res.send(err);
    res.json(pilot);
  });
};


exports.read_a_pilot = function(req, res) {
  Pilots.findById(req.params.pilotId, function(err, pilot) {
    if (err)
      res.send(err);
    res.json(pilot);
  });
};


exports.update_a_pilot = function(req, res) {
  Pilots.findOneAndUpdate({_id: req.params.pilotId}, req.body, {new: true}, function(err, pilot) {
    if (err)
      res.send(err);
    res.json(pilot);
  });
};


exports.delete_a_pilot = function(req, res) {


  Pilots.remove({
    _id: req.params.pilotId
  }, function(err, pilot) {
    if (err)
      res.send(err);
    res.json({ message: 'Pilot successfully deleted' });
  });
};
