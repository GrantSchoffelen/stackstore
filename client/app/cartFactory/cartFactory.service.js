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
            lineItems: [{
              quantity: Number,
              name: String,
              picture: Array,
              categories: Array,
              productId: null,
              purchasePrice: Number,
              tax: Number,
              shipping: Number
            }]
          }; 
          console.log("i am running post")
          return $http.post('/api/carts/', cart)

        } else {

          console.log("i am running get")
        var deferred = $q.defer();
        return $http.get('/api/carts/' + cart._id).success(function(product) {
                    deferred.resolve(product);
                })
        }
      },



    }
  });