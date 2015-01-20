'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Categories', CategoriesSchema);