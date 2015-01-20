'use strict';

angular.module('stackstoreApp')
  .service('CategoriesService', function ($http, $q) {
    // this is good, but could be replaced with ngresource
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
  });


