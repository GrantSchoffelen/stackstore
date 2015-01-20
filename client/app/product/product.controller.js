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
  .controller('ProductDetailCtrl', function (reviewFactory, $scope, Product, $http, $stateParams, $cookieStore) {
  
// Helper function for $http.post update databse with information
    $scope.update = function() {
      $http.post('api/review', $scope.reviews).success(function(data) {
        console.log("Update to database Complete")
      });
    }



// $scope.displayThis = reviewFactory.displayThis;
$scope.allReviews = reviewFactory.reviews;




    // async way
    // Product.get($stateParams.id, function(product) {
    //   $scope.product = product;
    // });
$scope.quantity = 1; 
$scope.cartId = $cookieStore.get('cart')._id;
    // promise way
    Product.get($stateParams.id).then(function(data) {
      $scope.product = data;
    });

    // $scope.test = function() {
    // console.log($scope.product)

    // };

    // console.log($scope.product)
    $scope.addToCart = function(data, quantity) {
      
        Product.addCart($scope.product, $scope.quantity).then(function(cartData) {
            
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
