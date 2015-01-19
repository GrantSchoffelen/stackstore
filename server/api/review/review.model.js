'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'user', index: true}, 
  _prod: {type: Schema.Types.ObjectId, ref: 'product', index: true},
  date: Date,
  text: String,
  rating: Number
});

module.exports = mongoose.model('Review', ReviewSchema);
