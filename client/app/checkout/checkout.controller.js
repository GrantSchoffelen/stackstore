'use strict';

angular.module('stackstoreApp')
  .controller('CheckoutCtrl', function ($scope, $stateParams, $http, $q) {
  	$http.get('/api/carts/' + $stateParams.id).success(function(data){
                    console.log(data)
                })
    
  });
