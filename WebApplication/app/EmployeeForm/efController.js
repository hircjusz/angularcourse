angularFormsApp.controller('efController', function efController($scope,$window, dataService) {

    $scope.employee = dataService.employee;

    $scope.editableEmployee = angular.copy($scope.employee);


    $scope.departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Administration"
    ];
    $scope.submitForm = function() {
        $scope.employee = angular.copy($scope.editableEmployee);
        $window.history.back();
    };

    $scope.cancelForm = function () {
        $window.history.back();
    };
});