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

ReviewSchema.statics.findReviewByProduct = function(prod_id_parameter) {
  return this.find({_prod: prod_id_parameter})
}

 
module.exports = mongoose.model('Review', ReviewSchema);
