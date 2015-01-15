'use strict';

angular.module('stackstoreApp')
  .controller('ProductCtrl', function ($scope, Product, $http, socket) {
     $scope.products= Product.all();
    //  this.getData = function (){
    //     return $http.get('/api/product').then(function (response) {

    //       return response.data;
    //    // console.log(cartData)
    //   })
    // }

    // $scope.products = this.getData()


  })
  .controller('ProductDetailCtrl', function ($scope, Product, $http, $stateParams) {
    // async way
    // Product.get($stateParams.id, function(product) {
    //   $scope.product = product;
    // });

    // promise way
    Product.get($stateParams.id).then(function(data) {
      $scope.product = data;
    });

    // $scope.test = function() {
    // console.log($scope.product)

    // };

    // console.log($scope.product)
    $scope.addToCart = function(data) {
        Product.post($scope.product).then(function(cartData) {
            console.log(cartData, 'carrtttttttttttttttt');
        });
    }


     // $scope.addToCart= function($stateParams){
     //    $http.post('/api/cart').success(function () {

     //    })
     //  }
  })
///this is for when we get to http get request
  // .controller('ProductDetailCtrl', function($scope, Product, $stateParams) {
  //   debugger;
  //   Product.get(parseInt($stateParams.id)).then(function(produc))
  //   console.log($scope.product);
  // })
