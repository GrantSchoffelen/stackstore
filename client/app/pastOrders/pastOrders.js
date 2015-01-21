'use strict';

angular.module('stackstoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pastOrders', {
        url: '/pastOrders/',
        templateUrl: 'app/pastOrders/pastOrders.html',
        controller: 'PastOrdersCtrl'
      });
  });