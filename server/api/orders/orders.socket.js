/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Orders = require('./orders.model');

exports.register = function(socket) {
  Orders.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Orders.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('orders:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('orders:remove', doc);
}