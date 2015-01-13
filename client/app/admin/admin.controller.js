'use strict';

angular.module('stackstoreApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, Product) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    Product.all().success(function(data){
          $scope.products = data    
        });


$scope.addProduct = function() {
  $scope.newProduct = {
  name: "new product",
  description: "add description",
  price: 33,
  isAvailable: true,
  pictures: [''],
  categories: ['']
}


  $http.post('/api/product/',$scope.newProduct).success(function(productsFromDb) {
    console.log('new product', $scope.newProduct);
     Product.all().success(function(data){
          $scope.products = data  
        });
  })
}

     $scope.deleteProduct = function(prod) {

     $http.delete('/api/product/' + prod._id).success(function(productsFromDb) {
            console.log('product deleted')
            Product.all().success(function(data){
          $scope.products = data    
        });

        });


      // Product.remove({ id: prod._id });
      // angular.forEach($scope.products, function(u, i) {
      //   if (u === prod) {
      //     $scope.products.splice(i, 1);
      //   }
      // });
    };




    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
