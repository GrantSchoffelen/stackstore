'use strict';

var _ = require('lodash');
var Cart = require('./cart.model');

// Get list of carts
exports.index = function(req, res) {
    Cart.find(function(err, carts) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, carts);
    });
};

// Get a single cart
exports.show = function(req, res) {
    console.log('id: ', req.params.id)
    Cart.findById(req.params.id, function(err, cart) {
        if (err) {
            return handleError(res, err);
        }
        if (!cart) {
            return res.send(404);
        }
        return res.json(cart);
    });
};

exports.getOrders = function(req, res){
    console.log('asdfasfdasfd')
    console.log('user: ', req.query.user)
    Cart.find({user: req.query.user}, function(err, cart){
         if (err) {
            return handleError(res, err);
        }
          console.log('carts: ', cart)
        return res.json(201, cart);
    })
}



// Creates a new cart in the DB.
exports.create = function(req, res) {
    console.log('vreating cart req.body:', req.body);
    Cart.create(req.body, function(err, cart) {
        if (err) {
            return handleError(res, err);
        }
        console.log(cart)
        return res.json(201, cart);
    });
};

// Updates an existing cart in the DB.
exports.update = function(req, res) {
    console.log('req.bodyyyyyyyyyyyyyyyyyyyyyy', req.body.lineItems)
    if (req.body._id) {
        delete req.body._id;
    }
    Cart.findById(req.params.id, function(err, cart) {
        if (err) {
            return handleError(res, err);
        }
        if (!cart) {
            return res.send(404);
        }
        var updated = _.extend(cart, req.body);
        console.log('updated carttttt', cart)
        updated.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, cart);
        });
    });
};


// Deletes a cart from the DB.
exports.destroy = function(req, res) {
    Cart.findById(req.params.id, function(err, cart) {
        if (err) {
            return handleError(res, err);
        }
        if (!cart) {
            return res.send(404);
        }
        cart.remove(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}