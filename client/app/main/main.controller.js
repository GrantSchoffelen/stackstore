'use strict';

angular.module('stackstoreApp')
    .controller('MainCtrl', function($scope, Product, $http, socket) {
        // $scope.awesomeThings = [];
        return Product.all().success(function(data){
          $scope.products = data
         return $scope.products
        });
        // return $http.get('/api/product').success(function(products) {
        //     $scope.products = products;
        //     return $scope.products
        //         // console.log(cartData)
        // })
    $scope.addToCart = function(data) {
        Product.post($scope.product).then(function(cartData) {
            console.log(cartData);
        });
    }
    });
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
// $scope.products=[{name: 'tv', category: 'electronics', id: 1, price: '$5.99', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjbHkw655U_5QgKiT0Y-uPrtnYxaiBrpWJQGR6XH4elOZq7csdIg'},
//   {name: 'tv1', category: 'electronics', id: 2, price: '$5.99', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjbHkw655U_5QgKiT0Y-uPrtnYxaiBrpWJQGR6XH4elOZq7csdIg'}]
// $http.get('/api/produts').success(function(produts){
//   $scope.produts = products;
// })

// $scope.findProducts =function($scope) {
//   $http.get('/api/produts').success(function(produts){
//     $scope.produts = products;
//   })
// };