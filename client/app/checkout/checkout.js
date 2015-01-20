'use strict';

angular.module('stackstoreApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('checkout', {
                url: '/checkout/:id',
                templateUrl: 'app/checkout/checkout.html',
                controller: 'CheckoutCtrl'
            });
    });