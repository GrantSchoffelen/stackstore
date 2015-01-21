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

// $scope.displayThis = reviewFactory.displayThis;
$scope.allReviews = reviewFactory.reviews;

$scope.getNumber = function(reviewRating){
  return new Array(reviewRating);
};


// $scope.getUserNameFromUserId = function(user_id) {

// var username = "";
// console.log("USer: ", User)

// // //get user
// // //.findOne({ _id: user_id })
// // User
// // .findOne({ name : "Test User"})
// // .populate('_user')
// // .exec(function (err, user) {
// //   if (err) return handleError(err);
// //   console.log('The creator is %s', user.name);
// //   username = user.name;
// //   // prints "The creator is Aaron"
// // })



// // return User.name; 
// return username;
// };












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
