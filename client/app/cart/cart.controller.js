'use strict';

angular.module('stackstoreApp')
  .controller('CartCtrl', function($scope, Product, $http, $stateParams, $q, cartFactory) {
    // $scope.message = 'Hello';
    //$scope.products = Product.cart();

   $scope.updatePageInfo = function(){ cartFactory.getCart($stateParams.id).then(function(data) {

      // $scope.cart = data;
      $scope.cartLineItems = data.lineItems
      $scope.getLineItems()
        .then(function(products) {
          $scope.products = products;
         // console.log('$scope.products: ', $scope.products )
         // console.log('$scope.cartLineItems', $scope.cartLineItems)
        }, function(errors) {
        //  console.log(errors);
        })

      // cartFactory.getCart().then(function(data){

      // for (var i = 0; i <=  $scope.cartLineItems.length - 1; i++) {
      //   //console.log('productsL ',  $scope.cartLineItems[i].shipping)
      //   $scope.totalShipping +=  $scope.cartLineItems[i].shipping;
      //   console.log()
      // };
      // for (var t = 0; t <=  $scope.cartLineItems.length - 1; t++) {
      //   $scope.totalCost +=  $scope.cartLineItems[t].shipping;
      //   $scope.totalCost +=  $scope.cartLineItems[t].tax;
      //   $scope.totalCost +=  $scope.cartLineItems[t].purchasePrice;
      // }
      // for (var z = 0; z <=  $scope.cartLineItems.length - 1; z++) {
      //   //console.log('productsL ',  $scope.cartLineItems[i].shipping)
      //   $scope.totalTax +=  $scope.cartLineItems[z].tax;
      // };

    });
}
$scope.updatePageInfo();
      $scope.totalShipping = 0;
      $scope.totalCost = 0;
      $scope.totalTax = 0;
    ///////////we could have done this wiht async.map['lineItems array'], .then(functoin(){})

    $scope.getLineItems = function(cartLineItems) {
      var promiseArray = [];
      for (var i = 0; i < $scope.cartLineItems.length; i++) {
        promiseArray.push(Product.get($scope.cartLineItems[i].productId));
        console.log($scope.cartLineItems[i].productId, 'product get line items hit')
      };

      return $q.all(promiseArray);
    };
    // $scope.getLineItems();

    // Product.cart().then(function(data){
    //   $scope.products = data;
    //   Product.products = data;

    // })

    $scope.deleteFromCart = function(products) {

        Product.takeout(products, $stateParams.id).then(function(cartData) {
          

          // Products.productss.splice($index, 1)
          //splice it
        });
        var index = $scope.productss.indexOf(products)
        console.log(products.lineItems)
        $scope.totalCost -= products.lineItems.shipping;
        $scope.totalShipping -= products.lineItems.shipping;
        $scope.totalCost -= products.lineItems.tax;
        $scope.totalTax -= products.lineItems.tax;
        $scope.totalCost -= products.lineItems.purchasePrice;
        $scope.products.splice(index, 1);
        console.log(index)
      }


$scope.deleteFilteredItem = function(hashKey, sourceArray){
   console.log('$scope.products: ', $scope.products )
  console.log('$scope.cartLineItems', $scope.cartLineItems)
  //console.log(hashKey, 'hash keyssssssssssssssssss')

  angular.forEach(sourceArray, function(obj, index){
  //  console.log(obj, 'objjjjjjjjjjjjjjjjjjjjj')
    // sourceArray is a reference to the original array passed to ng-repeat, 
    // rather than the filtered version. 
    // 1. compare the target object's hashKey to the current member of the iterable:
    if (obj.productId === hashKey) {
      // remove the matching item from the array
      sourceArray.splice(index, 1);
      $scope.products.splice(index, 1)
      Product.updateCart($stateParams.id, sourceArray)
    
    //  console.log("upfssffgsgdgsdgsgsgs")
       

      // and exit the loop right away
      return;
    };
  })
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

    // $scope.totalShipping = 0;
    // $scope.totalCost = 0;
    // $scope.totalTax = 0;

    // cartFactory.getCart().then(function(data) {

    //     for (var i = 0; i <= data.length - 1; i++) {
    //       //console.log('productsL ', data[i].lineItems.shipping)
    //       $scope.totalShipping += data[i].lineItems.shipping;
    //     };
    //     for (var t = 0; t <= data.length - 1; t++) {
    //       $scope.totalCost += data[t].lineItems.shipping;
    //       $scope.totalCost += data[t].lineItems.tax;
    //       $scope.totalCost += data[t].lineItems.purchasePrice;
    //     }
    //     for (var z = 0; z <= data.length - 1; z++) {
    //       //console.log('productsL ', data[i].lineItems.shipping)
    //       $scope.totalTax += data[z].lineItems.tax;
    //     };
    //   })
      // console.log('more products: ', $scope.products);
      //$http.get('/api/carts').success(function(cartData){
      // console.log(cartData)
      // return cartData
      // })
      // $scope.products=cartData
  });