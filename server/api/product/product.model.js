'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {type:String, required: true, unique: true },
  description: String,
  price: Number,
  isAvailable: Boolean,
  pictures: Array,
  categories: Array
});


ProductSchema
.path('name').validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({name: value}, function(err, product) {
      if(err) throw err;
      // if(user) {
      //   if(self.id === user.id) return respond(true);
      //   return respond(false);
      // }
      respond(true);
    });
}, 'The product name is already in use.');

var validatePresenceOf = function(value) {
  return value && value.length;
};

module.exports = mongoose.model('Product', ProductSchema);





