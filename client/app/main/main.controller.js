'use strict';

angular.module('stackstoreApp')

.controller('MainCtrl', function($scope, Product, CategoriesService, $http, socket, cartFactory, $cookieStore,
    $mdToast, $animate, Auth) {


    Product.all().success(function(data) {
        $scope.products = data

    });
    var cart = $cookieStore.get('cart') || {};
    var userId = Auth.getCurrentUser()._id;
    console.log(userId, 'userrrrrrrrrrrrrrrrrrrrrrrrrrrr id')

    cartFactory.findUsersCart(cart, userId).success(function(cartData) {
        $cookieStore.put('cart', cartData);
        $scope.cart = cartData;


    });

    $scope.quantity = 1;
    $scope.addToCart = function(product, quantity) {
        Product.addCart(product, $scope.quantity).then(function(cartData) {
            console.log(cartData);
        });
    }


    $scope.matchCatWithProds = function(category) {
        $scope.search = category.name.toString();
    };

    $scope.searchForCat = function() {
        CategoriesService.all().success(function(categories) {
            $scope.categories = categories;
        });
    };
    $scope.searchForCat();


 // $scope.toastPosition = {
 //    bottom: true,
 //    top: false,
 //    left: ,
 //    right: true
 //  };
 //  $scope.getToastPosition = function() {
 //    return Object.keys($scope.toastPosition)
 //      .filter(function(pos) { return $scope.toastPosition[pos]; })
 //      .join(' ');
 //  };
 //  $scope.showCustomToast = function() {
 //    $mdToast.show({
 //      controller: 'ToastCtrl',
 //      templateUrl: 'toast-template.html',
 //      hideDelay: 6000,
 //      position: $scope.getToastPosition()
 //    });
 //  };
  $scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('Simple Toast!')
        .position('bottom', 'right')
        .hideDelay(0)
    );
  };
  // $scope.showActionToast = function() {
  //   var toast = $mdToast.simple()
  //         .content('Action Toast!')
  //         .action('OK')
  //         .highlightAction(false)
  //         .position($scope.getToastPosition());
  //   $mdToast.show(toast).then(function() {
  //     alert('You clicked \'OK\'.');
  //   });
  // };

});