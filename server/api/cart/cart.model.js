'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user', default: null }, // null or undefined if user not logged in
  creationDate: Date,
  isActive: Boolean,
  lineItems: [{quantity: Number,
  			       productId: { type: Schema.Types.ObjectId, ref: 'product'},
  			       purchasePrice:  Number,
  			       tax: Number,
  			       shipping: Number
  			}]
});

module.exports = mongoose.model('Cart', CartSchema);



