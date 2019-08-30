'use strict';


var mongoose = require('mongoose'),
  Airplanes = mongoose.model('Airplanes');

exports.list_all_planes = function(req, res) {
  Airplanes.find({}, function(err, plane) {
    if (err)
      res.send(err);
    res.json(plane);
  });
};


exports.create_a_plane = function(req, res) {
  var airplane = new Airplanes(req.body);
  airplane.save(function(err, plane) {
    if (err)
      res.send(err);
    res.json(plane);
  });
};


exports.read_a_plane = function(req, res) {
  Airplanes.findById(req.params.airplaneId, function(err, plane) {
    if (err)
      res.send(err);
    res.json(plane);
  });
};


exports.update_a_plane = function(req, res) {
  Airplanes.findOneAndUpdate({_id: req.params.airplaneId}, req.body, {new: true}, function(err, plane) {
    if (err)
      res.send(err);
    res.json(plane);
  });
};


exports.delete_a_plane = function(req, res) {
  Airplanes.remove({
    _id: req.params.airplaneId
  }, function(err, plane) {
    if (err)
      res.send(err);
    res.json({ message: 'Airplane successfully deleted' });
  });
};
