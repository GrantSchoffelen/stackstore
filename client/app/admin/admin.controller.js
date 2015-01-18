'use strict';

angular.module('stackstoreApp')
    .controller('AdminCtrl', function(Category, $scope, $http, Auth, User, Product, CategoriesService, $filter, $mdToast, $animate) {
        // Use the User $resource to fetch all users
        $scope.users = User.query();
        Product.all().success(function(data) {
            $scope.products = data
        });

        // $scope.categ = {
        //    status: []
        //  };
        //  console.log("set scope.categ.status to clothes and electronics")



        CategoriesService.all().success(function(data) {
            $scope.categories = data;

            $scope.categoriesArrayOfStrings = [];

            for (var i = 0; i < data.length; i++) {
                $scope.categoriesArrayOfStrings[i] = '' + data[i].name;

            }

        });



        $scope.addProduct = function() {
            $scope.newProduct = {
                name: "new product",
                description: "add description",
                price: 0,
                isAvailable: true,
                pictures: ['http://www.pitsimulator.com/arc100.jpg'],
                categories: []
            }

            $http.post('/api/product/', $scope.newProduct).success(function(productsFromDb) {
                console.log('new product', $scope.newProduct);
                Product.all().success(function(data) {
                    $scope.products = data
                    //   console.log("data from db", $scope.products);
                });
            })
        }



        $scope.addCategory = function() {
            // $scope.newCategory = {
            //     name: "New Category"
            // }
            // $http.post('/api/categoriess/', $scope.newCategory).success(function(categoriesFromDb) {
            //     console.log('new category', $scope.newCategory);
            //     CategoriesService.all().success(function(data) {
            //         $scope.categories = data
            //     });
            // })

            var newCat = new Category("my_category");
            newCat.save();
        }



        $scope.update = function(prod) {
            //  angular.forEach($scope.products,function (oneProduct) {
            //   if (prod.name !== oneProduct.name)
            //     console.log('there is no problem here')
            // }
            console.log('name of prod', prod.name)
            console.log('name of prodcut', $scope.products[0].name)
            var nameNoGood = false;
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].name === prod.name) {
                    nameNoGood = true;
                }
            };


            console.log('before updateeeeeeeeeeeeeeeeeeeeee', prod)
            if (nameNoGood == false) {
                $http.put('/api/product/' + prod._id, prod).success(function(productsFromDb) {
                    console.log('updated product', productsFromDb);
                })
            } else {
                $mdToast.show(
                    $mdToast.simple()
                    .content("added to cart :)")
                    .position('top right')
                    .hideDelay(1000)
                );
                alert("you already have a product with the same!");
            }
        }


        $scope.updateCategory = function(category) {
            $http.put('/api/categoriess/' + category._id, category).success(function(categoriesFromDb) {
                console.log('updated category', category);
            })
        }


        $scope.deleteProduct = function(prod) {

            $http.delete('/api/product/' + prod._id).success(function(productsFromDb) {
                console.log('product deleted')
                Product.all().success(function(data) {
                    $scope.products = data
                });

            });


            // Product.remove({ id: prod._id });
            // angular.forEach($scope.products, function(u, i) {
            //   if (u === prod) {
            //     $scope.products.splice(i, 1);
            //   }
            // });
        };



        $scope.deleteCategory = function(cat) {

            $http.delete('/api/categoriess/' + cat._id).success(function(categoryData) {
                console.log('category deleted')
                CategoriesService.all().success(function(data) {
                    $scope.categories = data
                });

            });
        };



        $scope.showCategories = function(prod_param) {
            console.log("prod_param ======== ", prod_param);

            var selected = [];
            angular.forEach($scope.categories, function(one_category_object) {


                for (var i = 0; i < prod_param.categories.length; i++) {

                    if (prod_param.categories[i] === one_category_object.name) {
                        selected.push(one_category_object.name);

                    }
                }


            });

            return selected.length ? selected.join(', ') : 'no categories selected, click here to select categories';

        };



        $scope.delete = function(user) {
            User.remove({
                id: user._id
            });
            angular.forEach($scope.users, function(u, i) {
                if (u === user) {
                    $scope.users.splice(i, 1);
                }
            });
        };
    });