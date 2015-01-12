'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  isAvailable: Boolean,
  pictures: Array,
  categories: Array
});

module.exports = mongoose.model('Product', ProductSchema);