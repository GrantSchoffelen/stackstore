'use strict';

angular.module('stackstoreApp')

  .controller('CheckoutCtrl', function ($scope, $stateParams, $http, $q, $cookieStore) {
  	$http.get('/api/carts/' + $stateParams.id).success(function(data){
  
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



    var test = 0;
 $scope.handleStripe = function(status, response){
        if(response.error) {
          console.log('card declined')
          $scope.cardDeclined = true; 
          $scope.payed = false; 

        } else {
          console.log(response)
          var token = response.id
          console.log(token)
          $scope.order.status = "ClosedCart"
          $http.put('/api/carts/'+ $scope.order._id, $scope.order).success(function(data){
          $cookieStore.remove('cart')
          $scope.cardDeclined = false;
          $scope.payed = true; 
          })

//   Stripe.charges.create({
//   amount: 1000, // amount in cents, again
//   currency: "usd",
//   card: token,
//   description: "payinguser@example.com"
// }, function(err, charge) {
//   if (err && err.type === 'StripeCardError') {
//     // The card has been declined
//   }
// });


         
      }
    }

    
  });

