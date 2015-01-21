'use strict';

angular.module('stackstoreApp')
  .controller('CartCtrl', function($scope, $window, Product, $http, $stateParams, $q, cartFactory, Auth, $location, $state) {

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
        
      };

      return $q.all(promiseArray);
    };

    $scope.deleteFilteredItem = function(hashKey, sourceArray) {
      
      angular.forEach(sourceArray, function(obj, index) {
        if (obj.productId === hashKey) {
          // remove the matching item from the array
          $scope.totalTax -= Number((sourceArray[index].tax))
          $scope.totalShipping -= Number((sourceArray[index].shipping))
          $scope.totalQuantity -= Number((sourceArray[index].totalPrice))
          $scope.totalFinal -= Number((sourceArray[index].tax + sourceArray[index].shipping + sourceArray[index].totalPrice))
         
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
      if (check) {
        $state.go('checkout',{id:$stateParams.id})
      } else {
        // $window.location.href = '/signup';
        $state.go('signup');
      }
    }
  });