'use strict';

angular.module('stackstoreApp')
  .factory('Product', function ($http, $q) {

    // var methods = {
    //   method1: function(){},
    //   method2: function(){}
    // }


    return {
      all: function() {
        var products;
        return $http.get('/api/product').success(function(productsFromDb) {
          products = productsFromDb;
            return products;
        });
      },
      post: function  (data) {
        return $http.post('/api/carts', data).success(function (cartLoad) {
          return cartLoad;
          // body...
        }).error(function (error) {
          console.log(error)
        })
      },
      get: function(id) {
        // var data;
        // return $http.get('/api/product/'+id).success(function(product){
        // return products.filter(function(product) {
           // data=product;
           // return data;
        // })[0]
      // })
      // }

      // async way
      // $http.get('/api/product/' + id).success(doneGettingProduct);

      // the promise way
      var deferred = $q.defer();

      $http.get('/api/product/' + id).success(function(product) {
        deferred.resolve(product);
      });

      return deferred.promise
    }
  }
  });


