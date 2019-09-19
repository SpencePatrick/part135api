'use strict';
module.exports = function(app) {
  var pilots = require('../controllers/pilotController'),
    airplanes = require('../controllers/airplaneController'),
    manifests = require('../controllers/manifestController'),
    users = require('../controllers/userController'),
    verifytoken = require('../middleware/verifytoken');
  //pilot routes
  app.route('/pilots')
    .get(pilots.list_all_pilots)
    .post(verifytoken, pilots.create_a_pilot);


  app.route('/pilots/:pilotId')
    .get(pilots.read_a_pilot)
    .put(pilots.update_a_pilot)
    .delete(pilots.delete_a_pilot);


  // airplane Routes
  app.route('/airplanes')
    .get(airplanes.list_all_planes)
    .post(airplanes.create_a_plane);


  app.route('/airplanes/:airplaneId')
    .get(airplanes.read_a_plane)
    .put(airplanes.update_a_plane)
    .delete(airplanes.delete_a_plane);


  // manifest Routes
  app.route('/flightmanifests')
    .get(manifests.list_all_manifests)
    .post(manifests.create_a_manifest);


  app.route('/flightmanifests/:manifestId')
    .get(manifests.read_a_manifest)
    .put(manifests.update_a_manifest)
    .delete(manifests.delete_a_manifest);


  // user Routes
  app.route('/users')
    .get(users.list_all_users)
    .post(users.create_a_user);

  app.route('/user/login')
    .post(users.user_login);

  app.route('/users/:userId')
    .get(users.read_a_user)
    .put(users.update_a_user)
    .delete(users.delete_a_user);

  app.route('/user/verify')
    .get(verifytoken, users.verify_token);
};
