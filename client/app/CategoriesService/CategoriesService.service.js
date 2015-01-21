'use strict';

angular.module('stackstoreApp')
  .service('CategoriesService', function ($http, $q) {

    return {
      all: function() {
        var categories;
        return $http.get('/api/categoriess').success(function(categoriesFromDb) {
          categories = categoriesFromDb;
            return categories;
        });
      },


      get: function(id) {
      var deferred = $q.defer();

      $http.get('/api/categoriess/' + id).success(function(category) {
        deferred.resolve(category);
      });

      return deferred.promise
     },
  }
  })

  // .factory('Category', function($http) {

  //    var Category = function(name) {
  //     this.name = name;
  //   }

  //   Category.prototype.save = function() {
  //     $http.post('/api/category', this);
     

  // }

  //   return Category;
  //   }


