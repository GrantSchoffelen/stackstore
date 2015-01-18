'use strict';

angular.module('stackstoreApp')
    .factory('Product', function($http, $q, $cookieStore) {



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
            addCart: function(product, quantity) {
                console.log("<--product", product._id)

                var newLineItem = {
                        quantity: quantity,
                        productId: product._id,
                        purchasePrice: product.price,
                        totalPrice: product.price * quantity,
                        tax: (product.price * 0.08),
                        shipping: (product.price * 0.15),
                        name: product.name
                }

                var cartId = $cookieStore.get('cart')._id;
                console.log(cartId, 'cart idddddddddd')
               return $http.get('/api/carts/' + cartId).success(function(data){
                    var returnCart = data
                    returnCart.lineItems.push(newLineItem)
                    $http.put('api/carts/'+ returnCart._id, returnCart).then(function(data) {
                        console.log(data.data, 'data.data')
                        console.log(data, 'dataaaaaaaaaaaaaaaaaa')

                    })

                })






                // console.log($cookieStore.get('cart'), '<-----cookie data')
                // console.log(cart, "<-----cart")

            //cart.lineItems.push(product)
                // $http.get('/api/carts/' + cart._id).success(function(product) {
                //     deferred.resolve(product);
                // // var cart = {
                //     Date: Date,
                //     isActive: true,
                //     lineItems: {
                //         quantity: 1,
                //         productId: product._id,
                //         purchasePrice: product.price,
                //         tax: (product.price * 0.08),
                //         shipping: (product.price * 0.15),
                //         name: product.name,
                //         picture: product.pictures,
                //         categories: product.categories,
                //     }
                // };
                // console.log("sgsfgs", cart)
                // return $http.post('/api/carts', cart).then(function(response) {
                //     console.log(response)
                //     return response.data;
                //     // body...
                // })
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

                $http.get('/api/product/' + id)
                    .success(function(product) {
                        deferred.resolve(product);
                    })
                    .error(function(err) {

                        deferred.reject("error string");
                    });

                return deferred.promise
            },
            allItemsInDataBase: function () {
              var deferred = $q.defer();
              $http.get('/api/product')
                   .success(function(product) {
                        deferred.resolve(product);
                    })
                    .error(function(err) {
                        deferred.reject("error string");
                    });
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
            takeout: function(products, cartId) {

                 return $http.get('/api/carts/' + cartId).success(function(data){
                    var returnCart = data
                    returnCart.lineItems.splice(newLineItem)
                    $http.put('/api/carts/' + cartid).then(function(data) {
                    console.log('deleted', data)
                });
                });
            },



            updateCart: function(id, update) {
               return   $http.get('/api/carts/' + id).success(function(data){
                    var returnCart = data
                    console.log(returnCart)

                    returnCart.lineItems = update
                    $http.put('/api/carts/' + id, returnCart).then(function(data) {

                });
                })
                }
                // cart: function(callback){
                //     $http.get('/api/carts').success(callback)
                //       //console.log(data)
                //   }

        }
    });