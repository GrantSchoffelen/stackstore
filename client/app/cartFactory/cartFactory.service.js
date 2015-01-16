'use strict';

angular.module('stackstoreApp')
  .factory('cartFactory', function($http, $q) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      findUsersCart: function(cart) {
        if(!cart._id){
          var cart = {
            userId: null, // null or undefined if user not logged in
            cartCreationDate: Date,
            isActive: Boolean,
            lineItems: []
          }; 
          console.log("i am running post")
          return $http.post('/api/carts/', cart)

        } else {

          console.log("i am running get what")
        var deferred = $q.defer();
        return $http.get('/api/carts/' + cart._id).success(function(product) {
                    deferred.resolve(product);
                })
        }
      }, 
        getCart: function(cartId){
          var deferred = $q.defer();
          $http.get('/api/carts/' +cartId).success(function(cart){
            deferred.resolve(cart)
          }); 
        return deferred.promise
      }



    }
  });