'use strict';

angular.module('stackstoreApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('product', {
                url: '/products',
                templateUrl: 'app/product/product.html',
                controller: 'ProductCtrl'
            })
            .state('product_detail', {
                url: '/product/:id',
                templateUrl: 'app/product/product.html',
                controller: 'ProductDetailCtrl'
            })
    });