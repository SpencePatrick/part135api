'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PilotSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  email: {
    type: String,
  },
  title: {
    type: String,
  },
  cert: {
    type: String,

  },
  certnumber: {
    type: String,
  },
  medicaldue: {
    type: Date,
  },
  medicalclass: {
    type: String,
  },
  faasedue: {
    type: Date,
  },
  faamedue: {
    type: Date,
  },
  faainstdue: {
    type: Date,
  },
  faainsttype: {
    type: String

  },
  opsapproved: {
    type: String,
  },
  acapproved: {
    type: String,
  },
  daycurrent: {
    type: Boolean,
    default: true,
  },
  nightcurrent: {
    type: Boolean,
    default: true,
  },
  checkairmandue: {
    type: Date
  }

});

module.exports = mongoose.model('Pilots', PilotSchema);
