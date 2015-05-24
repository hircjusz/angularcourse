angularFormsApp.controller('efController', function efController($scope, dataService) {

    $scope.employee = dataService.employee;

    $scope.departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Administration"
    ];
    $scope.submitForm = function() {

    };
});