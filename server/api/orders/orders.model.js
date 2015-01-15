'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrdersSchema = new Schema({
  _cart: { type: Schema.Types.ObjectId, ref: 'carts'},
  _user: { type: Schema.Types.ObjectId, ref: 'user'},
  orderDate: Date,
  orderStatus: String
});

module.exports = mongoose.model('Orders', OrdersSchema);