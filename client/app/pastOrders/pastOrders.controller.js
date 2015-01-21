'use strict';

angular.module('stackstoreApp')
  .controller('PastOrdersCtrl', function ($scope, User, Auth, $http) {
    // var userId = Auth.getCurrentUser()._id

    var foo = function (callback){
    	var userId = Auth.getCurrentUser()._id
    	if (userId){
		    var userObj = {user: userId}
    		callback(userObj)
    	}
    }
    // var userId = "54be9aa6af1a39c214de69d6";
    // console.log(userId)

    // console.log('user id: ', userObj)
    function getCartsByUser(userObj){
    	console.log('id: ', userObj)
    	// $http.post('/api/carts/pastOrders/', userObj).success(function(data){
    	// 	console.log('hittttttttttttttttt', data)
    	// })	
  $http.get('/api/carts/orders/pastOrders/', {params: userObj}).success(function(data){
    		console.log('hittttttttttttttttt', data)
    		$scope.pastOrders = data
    	})

    } 

    foo(getCartsByUser)


  });
