'use strict';

angular.module('stackstoreApp')
  .controller('ProductCtrl', function ($scope, Product, $http, socket) {
     $scope.products= Product.all();
  })
  .controller('ProductDetailCtrl', function ( Auth, reviewFactory, $scope, Product, $http, $stateParams, $cookieStore) {
  
$scope.thisUserId = Auth.getCurrentUser()._id

// Helper function for $http.post update databse with information
    $scope.saveReview = function(new_review_parameter) {
  console.log("new_review_parameter", new_review_parameter)
     new_review_parameter['date'] = new Date();  
     new_review_parameter['_user'] = $scope.thisUserId;
     new_review_parameter['_prod'] = $stateParams.id;
      $http.post('api/review', new_review_parameter).success(function(data) {
        console.log("New Review saved to database Complete")
        $scope.allReviews.unshift(data);
      });
    }

$scope.newReview = { 
    rating: 5,
    text: "Enter text here..."
  }

$scope.isLoggedIn = function() {
  return Auth.isLoggedIn();
}

$scope.allReviews = reviewFactory.reviews;

$scope.getNumber = function(reviewRating){
  return new Array(reviewRating);
};

$scope.quantity = 1; 

$scope.cartId = $cookieStore.get('cart')._id;
    // promise way
    Product.get($stateParams.id).then(function(data) {
      $scope.product = data;

            Product.all().then(function(data) {

                $scope.categoriesProduct = data;

                $scope.productFromCat = [];
                for (var i = 0; i < $scope.categoriesProduct.data.length; i++) {
                    if ($scope.categoriesProduct.data[i].categories[0] === $scope.product.categories[0]) {
                        $scope.productFromCat.push($scope.categoriesProduct.data[i])
                        console.log($scope.categoriesProduct.data[i])

                        // $scope.productFromCat.push($scope.categoriesProduct.data[i].categories)
                    }
                };
                // console.log($scope.categoriesProduct.data[i].categories[0])
                console.log($scope.productFromCat)
            })

    });


        $scope.addToCart = function(data, quantity) {

            Product.addCart($scope.product, $scope.quantity).then(function(cartData) {

            });
        }
    })
