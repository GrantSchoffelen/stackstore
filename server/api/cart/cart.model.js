'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
    user: {type: Schema.Types.ObjectId,
            ref: 'User'}, // null or undefined if user not logged in
    creationDate: Date,
    status: String,
    lineItems: [{
        quantity: Number,
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        },
        purchasePrice: Number,
        tax: Number,
        shipping: Number,
        name: String,
        totalPrice: Number
    }]
});

module.exports = mongoose.model('Cart', CartSchema);