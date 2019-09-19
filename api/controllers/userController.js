'use strict';
var Token = require('../middleware/token');

var mongoose = require('mongoose'),
  Users = mongoose.model('Users');
var bcrypt = require('bcrypt');



exports.create_a_user = function(req, res) {
  bcrypt.hash(req.body.password, 15, (err, hash) => {
    const password = hash;
    const user = new Users({
      _id: new mongoose.Types.ObjectId(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password,
    });
// check that user submits the required value
    if (!user.username || !user.email || !user.password) {
      return res.status(400).json({
        message: 'Please ensure you fill the username, email, and password',
      });
    }
// verify the user isn't stored in the database
    return Users.count({
      $or: [
        { username: req.body.username },
        { email: req.body.email },
      ],
    })
    .then((count) => {
      if (count > 0) {
        res.status(401).json({
          message: 'This user exists',
        });
      }
    // if user doesn't exist, create one
      return user
        .save()
        .then((newUser) => {
          console.log(newUser);
          const token = Token.token(newUser);
          res.status(201).json({
            message: 'User signup successfully',
            newUser: {
              username: newUser.username,
              email: newUser.email,
            },
            token,
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            message: 'Our server is in the locker room, please do try again.'
          });
        });
      });
    });
}

exports.user_login = function(req, res) {
  const { username, password } = req.body;
  Users.findOne({ username })
    .then((existingUser) => {
      bcrypt.compare(password,existingUser.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Not authorized',
          });
        }
        if (result) {
          const token = Token.token(existingUser);
          return res.status(200).json({
            message: 'User authorization successful',
            existingUser: {
              username: existingUser.username,
              email: existingUser.email,
              _id: existingUser.id,
              permissions: existingUser.permissions,
            },
            token,
          });
        }
        return res.status(401).json({
          message: 'Invalid details',
        });
      });
    })
    .catch(() => res.status(500).json({ message: 'Our server is in the locker room, please do try again.' }));
}

exports.list_all_users = function(req, res) {
  Users.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};




exports.read_a_user = function(req, res) {
  Users.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  Users.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
  Users.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

exports.verify_token = function(req, res) {
  res.json({ message: 'Verified!' });
}
