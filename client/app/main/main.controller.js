'use strict';

angular.module('stackstoreApp')

    .controller('MainCtrl', function($scope, Product, CategoriesService, $http, socket, cartFactory, $cookieStore) {
        // $scope.awesomeThings = [];
        Product.all().success(function(data){
          $scope.products = data
          // return $scope.products
        });


        var cart = $cookieStore.get('cart') || {};


        // A unlogged user, goes into the site, and create a cart
        cartFactory.findUsersCart(cart).success(function(cartData) {
            $cookieStore.put('cart', cartData);
            console.log(cartData, 'cart dataaaaaaaaaaaaaaaaaaaaaaaaaaa')
            $scope.cart = cartData;
            console.log($scope.cart)
        });


        // cartFactory.findUsersCart($scope.cart).success(function(data){
        //     console.log(data)
        //     $scope.cart = data
        //     console.log("Scope.cart-------", $scope.cart)
        // })

        // return $http.get('/api/product').success(function(products) {
        //     $scope.products = products;
        //     return $scope.products
        //         // console.log(cartData)
        // })
<<<<<<< HEAD
    $scope.addToCart = function(product) {
        Product.addCart(product).then(function(cartData) {
            console.log(cartData);
        });
    }
=======
        $scope.addToCart = function(product) {
            Product.post(product).then(function(cartData) {
                console.log(cartData);
            });
        };

        $scope.matchCatWithProds = function(category) {
            $scope.search = category.name;
        };

        $scope.searchForCat = function() {
            CategoriesService.all().success(function(categories) {
                $scope.categories = categories;
            });
        };
        // $http.get('/api/things').success(function(awesomeThings) {
        //   $scope.awesomeThings = awesomeThings;
        //   socket.syncUpdates('thing', $scope.awesomeThings);
        // });

        // $scope.addThing = function() {
        //   if($scope.newThing === '') {
        //     return;
        //   }
        //   $http.post('/api/things', { name: $scope.newThing });
        //   $scope.newThing = '';
        // };

        // $scope.deleteThing = function(thing) {
        //   $http.delete('/api/things/' + thing._id);
        // };

        // $scope.$on('$destroy', function () {
        //   socket.unsyncUpdates('thing');
        // });

        // $http.get('/api/produts').success(function(produts){
        //   $scope.produts = products;
        // })

        // $scope.findProducts =function($scope) {
        //   $http.get('/api/produts').success(function(produts){
        //     $scope.produts = products;
        //   })
        // };
>>>>>>> master
    });
