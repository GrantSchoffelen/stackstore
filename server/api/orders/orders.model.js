'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrdersSchema = new Schema({
  cartId: [{ type: Schema.Types.ObjectId, ref: 'carts'}],
  userId: [{ type: Schema.Types.ObjectId, ref: 'user'}],
  orderDate: Date,
  orderStatus: String
});

module.exports = mongoose.model('Orders', OrdersSchema);