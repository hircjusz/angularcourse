var app=angular.module('app', []);

app.controller('MainController', function($scope) {
    $scope.val = 1;
    $scope.even = false;
    $scope.myarr = [5,4,3,2,1];
    $scope.users = [{name:'mike',age:23}, {name:'andy',age:34}, {name:'reid',age:45}];

    $scope.inc = function () {
        $scope.val += 1;
        $scope.even= $scope.val % 2 == 0;
    };
    $scope.classVar = "orange";
});


app.controller('SubController', function($scope) {
    
});

