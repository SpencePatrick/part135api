'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManifestSchema = new Schema({
  date: {
    type: Date,
    default: new Date()
  },
  pilot: {
    type: String,
  },
  airplane: {
    type: String,
  },
  passengers: {
    type: String,
  },
  customer: {
    type: String,
  },
  risk: {
    type: String,
  },
  acpositioningtime: {
    type: String,
  },
  nonsptime: {
    type: String,
  },
  standby: {
    type: String,
  },
  nightflyingtime: {
    type: String,
  },
  dutystart: {
    type: String,
  },
  dutystop: {
    type: String,
  },
  flightstart: {
    type: String,
  },
  flightstop: {
    type: String,
  },
  tachstart: {
    type: String,
  },
  tachstop: {
    type: String,
  },
  totaltach: {
    type: String,
  },
  origin: {
    type:String,
  },
  acconfig1: {
    type: String,
  },
  destination1: {
    type:String,
  },
  acconfig2: {
    type: String,
  },
  destination2: {
    type:String,
  },
  acconfig3: {
    type: String,
  },
  destination3: {
    type:String,
  },
  acconfig4: {
    type: String,
  },
  destination4: {
    type:String,
  },
  acconfig5: {
    type: String,
  },
  destination5: {
    type:String,
  },
  acconfig6: {
    type: String,
  },
  destination6: {
    type:String,
  },
  acconfig7: {
    type: String,
  },
  destination7: {
    type:String,
  },
  acconfig8: {
    type: String,
  },
  destination8: {
    type:String,
  },
  acconfig9: {
    type: String,
  },
  destination9: {
    type:String,
  },
  acconfig10: {
    type: String,
  },
  destination10: {
    type:String,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model('Manifests', ManifestSchema);
