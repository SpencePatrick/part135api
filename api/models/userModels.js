'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowerCase: true,
  },
  firstname: {
    type: String,

  },
  lastname: {
    type: String,

  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowerCase: true,
    match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?      ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/],
  },
  // 0 = admin, 1 = mechanic, 2 = pilot
  permissions: {
    type: [Number],
  },
  password: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model('Users', UserSchema);
