'use strict';

angular.module('stackstoreApp')
  .controller('ProductCtrl', function ($scope, Product, $http, socket) {
     $scope.products = Product.all();
  })
  .controller('ProductDetailCtrl', function($scope, Product, $stateParams) {

    $scope.product = Product.get(parseInt($stateParams.id));
    console.log($scope.product);

     $scope.addToCart= function(){
        $http.post()
    };
  })
///this is for when we get to http get request
  // .controller('ProductDetailCtrl', function($scope, Product, $stateParams) {
  //   debugger;
  //   Product.get(parseInt($stateParams.id)).then(function(produc))
  //   console.log($scope.product);
  // })
