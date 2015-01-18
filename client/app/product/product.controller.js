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
  .controller('ProductDetailCtrl', function ($scope, Product, $http, $stateParams, $cookieStore) {
    // async way
    // Product.get($stateParams.id, function(product) {
    //   $scope.product = product;
    // });
    $scope.quantity = 1;

    $scope.cartId = $cookieStore.get('cart')._id;
    // promise way
    Product.get($stateParams.id).then(function(data) {
      $scope.product = data;
      console.log($scope.product.categories[0])

    Product.all().then(function(data) {

     $scope.categoriesProduct = data;

     $scope.productFromCat=[];
      for (var i = 0; i < $scope.categoriesProduct.data.length; i++) {
        if ($scope.categoriesProduct.data[i].categories[0] === $scope.product.categories[0]){
          $scope.productFromCat.push($scope.categoriesProduct.data[i])
        console.log($scope.categoriesProduct.data[i])

          // $scope.productFromCat.push($scope.categoriesProduct.data[i].categories)
        }
      };
      // console.log($scope.categoriesProduct.data[i].categories[0])
        console.log($scope.productFromCat)
    })
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
