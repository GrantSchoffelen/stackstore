'use strict';

angular.module('stackstoreApp')
  .factory('cartFactory', function($http, $q) {

    return {
     
      findUsersCart: function(cart, userId) {
        
        if(!cart._id){
          var cart = {
            user: userId || null, // null or undefined if user not logged in
            creationDate: Date,
            status: 'activeShopping',
            lineItems: []
          }; 
          console.log("i am running post")
          //good
          return $http.post('/api/carts/', cart)

        } else {

          console.log("i am running get what")
        var deferred = $q.defer();
        return $http.get('/api/carts/' + cart._id).success(function(cart) {
                    deferred.resolve(cart);
                    var updatedCart = cart
                    if(updatedCart.user === null){
                      updatedCart.user = userId;
                    }
                $http.put('/api/carts/' + cart._id, updatedCart)    
                  console.log(updatedCart, "this is")
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