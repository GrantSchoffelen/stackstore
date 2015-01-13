'use strict';

angular.module('stackstoreApp')
  .controller('CartCtrl', function ($scope, Product, $http) {
    // $scope.message = 'Hello';
    //$scope.products = Product.cart();

    Product.cart().then(function(data){
    	$scope.products=data;
    });

    console.log($scope.products);
    //$http.get('/api/carts').success(function(cartData){
    	// console.log(cartData)
    	// return cartData
   // })
    // $scope.products=cartData
  });


