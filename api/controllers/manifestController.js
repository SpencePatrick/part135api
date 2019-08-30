'use strict';


var mongoose = require('mongoose'),
  Manifests = mongoose.model('Manifests');

exports.list_all_manifests = function(req, res) {
  Manifests.find({}, function(err, manifest) {
    if (err)
      res.send(err);
    res.json(manifest);
  });
};


exports.create_a_manifest = function(req, res) {
  var Manifest = new Manifests(req.body);
  Manifest.save(function(err, manifest) {
    if (err)
      res.send(err);
    res.json(manifest);
  });
};


exports.read_a_manifest = function(req, res) {
  Manifests.findById(req.params.ManifestId, function(err, manifest) {
    if (err)
      res.send(err);
    res.json(manifest);
  });
};


exports.update_a_manifest = function(req, res) {
  Manifests.findOneAndUpdate({_id: req.params.ManifestId}, req.body, {new: true}, function(err, manifest) {
    if (err)
      res.send(err);
    res.json(manifest);
  });
};


exports.delete_a_manifest = function(req, res) {
  Manifests.remove({
    _id: req.params.ManifestId
  }, function(err, manifest) {
    if (err)
      res.send(err);
    res.json({ message: 'Manifest successfully deleted' });
  });
};
