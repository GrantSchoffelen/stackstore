'use strict';

angular.module('stackstoreApp')
    .factory('Product', function($http, $q) {

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
            post: function(product) {
                var cart = {
                    Date: Date,
                    isActive: product.isAvailable,
                    name: product.name,
                    picture: product.pictures,
                    categories: product.categories,
                    lineItems: {
                        quantity: 2,
                        productId: product._id,
                        purchasePrice: product.price,
                        tax: (product.price * 0.08),
                        shipping: (product.price * 0.15),
                    }
                };
                console.log("sgsfgs", cart)
                return $http.post('/api/carts', cart).then(function(response) {
                    console.log(response)
                    return response.data;
                    // body...
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
            },
            cart: function() {
                var products;
                return $http.get('/api/carts').then(function(data) {
                    //console.log(data)
                    products = data.data;
                    return products;
                });
            },
            products: [],
            takeout: function(product) {
                return $http.delete('/api/carts/' + product._id).then(function(data) {
                    console.log(data)
                  });
            }

            // cart: function(callback){
            //     $http.get('/api/carts').success(callback)
            //       //console.log(data)
            //   }

        }
    });