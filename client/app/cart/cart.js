'use strict';

angular.module('stackstoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cart', {
        url: '/cart',
        templateUrl: 'app/cart/cart.html',
        controller: 'CartCtrl'
      })
      .state('cart_add', {
        url: '/cart/cart.id',
        templateUrl: 'app/cart/cart.html',
        controller: 'CartCtrl'
      });
  });