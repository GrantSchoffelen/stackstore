'use strict';

angular.module('stackstoreApp')
    .controller('CheckoutCtrl', function($scope, $stateParams, $http, $q) {
        $http.get('/api/carts/' + $stateParams.id).success(function(data) {
            $scope.order = data


            $scope.finalPrice = function() {
                $scope.totalQuantity = 0;
                $scope.totalTax = 0;
                $scope.totalShipping = 0;


                for (var i = 0; i < $scope.order.lineItems.length; i++) {
                    console.log($scope.order.lineItems[i].quantity)
                    $scope.totalTax += Number(($scope.order.lineItems[i].tax))
                    $scope.totalShipping += Number(($scope.order.lineItems[i].shipping))

                    $scope.totalQuantity += Number(($scope.order.lineItems[i].totalPrice))
                }
                $scope.totalFinal = ($scope.totalQuantity + $scope.totalTax + $scope.totalShipping)
            }

            $scope.finalPrice()

        })



        $scope.handleStripe = function(status, response) {
            console.log(status)

            if (response.error) {
                console.log('response error getting hit', response.error)
            } else {
                console.log(response)
                var token = response.id
            }
        }

    });