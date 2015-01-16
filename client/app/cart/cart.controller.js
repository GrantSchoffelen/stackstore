'use strict';

angular.module('stackstoreApp')
  .controller('CartCtrl', function ($scope, Product, $http, $stateParams, cartFactory) {
    // $scope.message = 'Hello';
    //$scope.products = Product.cart();
  cartFactory.getCart($stateParams.id).then(function(data) {
    console.log('cardid this is the data lines items', data.lineItems)
      // $scope.cart = data;
       $scope.products= data.lineItems
       console.log( $scope.products);
    });

    // Product.cart().then(function(data){
    //   $scope.products = data;
    //   Product.products = data;

    // })

    $scope.deleteFromCart = function(product) {

    Product.takeout(product).then(function(cartData) {
            console.log( Product.products);

             // Product.products.splice($index, 1)
            //splice it
        });
    var index = $scope.products.indexOf(product)
    console.log(product.lineItems)
          $scope.totalCost -= product.lineItems.shipping;
          $scope.totalShipping -= product.lineItems.shipping;
          $scope.totalCost -= product.lineItems.tax;
          $scope.totalTax -= product.lineItems.tax;
          $scope.totalCost -= product.lineItems.purchasePrice;
          $scope.products.splice(index, 1);
              console.log(index)
    }
    // setTimeout(function() {
    //   console.log('more products: ', $scope.products)
    // }, 1000)
    // .then(function(data){
    //   // console.log('products: ', $scope.products)
    //   // data.resolve(function(data){
    //     console.log('data: ', data.$$state)
    //     return data.$$state;
    //   // })
    //   // console.log($scope.products[0].name);
    //   // $scope.products.forEach(function() {
    //   //   $scope.totalShipping += $scope.products.lineItems.shipping;
    //   // })

    // });

    $scope.totalShipping =0;
    $scope.totalCost=0;
    $scope.totalTax=0;

      Product.cart().then(function(data){

        for (var i=0; i<= data.length-1; i++) {
          //console.log('productsL ', data[i].lineItems.shipping)
          $scope.totalShipping += data[i].lineItems.shipping;
        };
        for (var t=0; t<= data.length-1; t++){
          $scope.totalCost += data[t].lineItems.shipping;
          $scope.totalCost += data[t].lineItems.tax;
          $scope.totalCost += data[t].lineItems.purchasePrice;
        }
        for (var z=0; z<= data.length-1; z++) {
          //console.log('productsL ', data[i].lineItems.shipping)
          $scope.totalTax += data[z].lineItems.tax;
        };
      })
    // console.log('more products: ', $scope.products);
    //$http.get('/api/carts').success(function(cartData){
    	// console.log(cartData)
    	// return cartData
   // })
    // $scope.products=cartData
  });


