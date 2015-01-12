'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  userId: [{type: Schema.Types.ObjectId, ref: 'user'}], 
  prodId: [{type: Schema.Types.ObjectId, ref: 'product'}],
  date: Date,
  text: String,
  rating: Number
});

module.exports = mongoose.model('Review', ReviewSchema);