'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategoriesSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Categories', CategoriesSchema);