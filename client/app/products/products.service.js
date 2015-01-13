'use strict';

angular.module('stackstoreApp')
  .factory('Product', function () {

    // var methods = {
    //   method1: function(){},
    //   method2: function(){}
    // }
    // Service logic
    // ...
       // var meaningOfLife = 42;

    // // Public API here
    // return {
    //   someMethod: function () {
    //     return meaningOfLife;
    //   }
    // };
    var products = [{name: 'tv', category: 'electronics', id: 1, price: '$5.99', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjbHkw655U_5QgKiT0Y-uPrtnYxaiBrpWJQGR6XH4elOZq7csdIg', review:"this sucks"},
    {name: 'tv1', category: 'electronics', id: 2, price: '$5.99', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjbHkw655U_5QgKiT0Y-uPrtnYxaiBrpWJQGR6XH4elOZq7csdIg', review:"this sucks even more", description:'Your site should support browsing its products without having to create an account similar to Amazon. All users who visit your site should be able to perform the following activities:'}]

    return {
      all: function() {
        return products;
      },
      get: function(id) {
        return products.filter(function(product) {
          return product.id === id;
        })[0]
      }
    }
  });


  ///this is for when we get to http get request
// return {
//       all: function(cb) {
//         return $http.get('/products')