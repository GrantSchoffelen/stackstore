'use strict';

angular.module('stackstoreApp')
  .controller('CartCtrl', function($scope, $window, Product, $http, $stateParams, $q, cartFactory, Auth, $location) {

        $scope.totalQuantity = 0;
        $scope.totalTax = 0;
        $scope.totalShipping = 0;
        $scope.totalFinal = 0;

    $scope.updatePageInfo = function() {
      cartFactory.getCart($stateParams.id).then(function(data) {


        $scope.cartLineItems = data.lineItems
        $scope.getLineItems()
          .then(function(products) {
            $scope.products = products;
          }, function(errors) {})


        for (var i = 0; i < $scope.cartLineItems.length; i++) {
          console.log($scope.cartLineItems[i].quantity)
          $scope.totalTax += Number(($scope.cartLineItems[i].tax))
          $scope.totalShipping += Number(($scope.cartLineItems[i].shipping))

          $scope.totalQuantity += Number(($scope.cartLineItems[i].totalPrice))
        }
 $scope.totalFinal = ($scope.totalQuantity + $scope.totalTax + $scope.totalShipping)
      });
    }
    $scope.updatePageInfo();
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


    // another way to delete from the cart
    // $scope.deleteFromCart = function(products) {
    //   Product.takeout(products, $stateParams.id).then(function(cartData) {
    //     // Products.productss.splice($index, 1)
    //     //splice it
    //   });
    //   var index = $scope.productss.indexOf(products)
    //   console.log(products.lineItems)
    //   $scope.totalCost -= products.lineItems.shipping;
    //   $scope.totalShipping -= products.lineItems.shipping;
    //   $scope.totalCost -= products.lineItems.tax;
    //   $scope.totalTax -= products.lineItems.tax;
    //   $scope.totalCost -= products.lineItems.purchasePrice;
    //   $scope.products.splice(index, 1);
    //   console.log(index)
    // }


    $scope.deleteFilteredItem = function(hashKey, sourceArray) {
      console.log('$scope.products: ', $scope.products)
      console.log('$scope.cartLineItems', $scope.cartLineItems)
        //console.log(hashKey, 'hash keyssssssssssssssssss')

      angular.forEach(sourceArray, function(obj, index) {
        if (obj.productId === hashKey) {
          // remove the matching item from the array
          $scope.totalTax -= Number((sourceArray[index].tax))
          $scope.totalShipping -= Number((sourceArray[index].shipping))

          $scope.totalQuantity -= Number((sourceArray[index].totalPrice))
          $scope.totalFinal = (sourceArray[index].totalPrice - sourceArray[index].shipping - sourceArray[index].tax)
          console.log(sourceArray, 'sourcearryyyyyyyyyyy')
          console.log(sourceArray[index].totalPrice, 'source array total price')
          console.log($scope.totalFinal)
          sourceArray.splice(index, 1);
          $scope.products.splice(index, 1)
          Product.updateCart($stateParams.id, sourceArray)

          return;
        };
      })
    }

    //checkout process begins here

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.ifLoggedIn = function(check) {

      //state.go better
      if (check) {
        $window.location.href = '/checkout/' + $stateParams.id;
      } else {
        $window.location.href = '/signup';
      }
    }
  });