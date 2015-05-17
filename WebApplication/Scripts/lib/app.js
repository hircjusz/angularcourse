var app=angular.module('app', []);

//var MainController = function ($scope) {
//    $scope.val = "test123";
//};

app.controller('MainController', function($scope) {
    $scope.val = 1;
    $scope.even = false;

    $scope.inc = function () {
        $scope.val += 1;
        $scope.even= $scope.val % 2 == 0;
    };

});
//angular.module('controllers', []).controller('MainController',
//    function($scope) {
//        $scope.val = 'test789';
//    });

