'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AirplaneSchema = new Schema({
  aircraftstatus: {
    type: [{
      type: String,
      enum: ['In Service',
            'In Service - Maintenance Due Soon',
            'Out of Service - Maintenance Overdue',
            'Out of Service - Removed by Admin']
    }],
    default: ['In Service']
  },
  acname: {
    type: String,
  },
  actype: {
    type: String,
  },
  tachtime: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  recordreviewdue: {
    type: Date,
  },
  phaseplane: {
    type: Boolean,
  },
  annualdue: {
    type: Date,
  },
  fiftyhourdue: {
    type: String,
  },
  hundredhourdue: {
    type: String,
  },
  transponderdue: {
    type: Date,
  },
  phase1due: {
    type: String,
  },
  phase2due: {
    type: String,
  },
  phase3due: {
    type: String,
  },
  phase4due: {
    type: String,
  },
  phasefinaldate: {
    type: Date,
  },
  discrepancies: {
    type: [{
      type: String,
      enum: ['All Discrepancies Resolved', 'Unresolved Discrepancies']
    }],
    default: ['All Discrepancies Resolved']
  },

});

module.exports = mongoose.model('Airplanes', AirplaneSchema);
