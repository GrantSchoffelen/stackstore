'use strict';

angular.module('stackstoreApp')
.factory('reviewFactory', function ($stateParams, $http, $q, $resource) {
  
 var Review = $resource('api/review/:prodId', {
      prodId: '@_id'
    })


    // return {
      // all: function() {
      //   var reviews;
      //   console.log("inside all")
      //   return $http.get('/api/review').success(function(reviewsFromDb) {
      //     reviews = reviewsFromDb;
      //     console.log("reviewsFromDb " + reviewsFromDb)
      //     return reviews;
      //   });
      // },

      Review.reviews = [];

  Review.query({prodId:$stateParams.id}, function(reviews){
    console.log(reviews)
    angular.copy(reviews, Review.reviews)
  })
   

      // displayThis: function (text_param) {
      //   console.log("inside displayThis")
      //   return text_param;
      // },

      // get: function(prodId) {
      //   var deferred = $q.defer();

      //   $http.get('/api/review/' + prodId).success(function(review) {
      //     deferred.resolve(review);
      //   });

      //   return deferred.promise
      // },
  // }
    // }
    return Review;
  })



