'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrdersSchema = new Schema({
  cartId: String,
  userId: String,
  orderDate: Date,
  orderStatus: String
});

module.exports = mongoose.model('Orders', OrdersSchema);