angularFormsApp.controller('efController', function efController($scope,$window,$routeParams, dataService) {

    if ($routeParams.id) {
        $scope.employee = dataService.getEmployee($routeParams.id);
    } else {
        $scope.employee = {id:0};
    }

    $scope.editableEmployee = angular.copy($scope.employee);

    $scope.departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Administration"
    ];
    $scope.submitForm = function() {

        if ($scope.editableEmployee.id == 0) {
            dataService.insertEmployee($scope.editableEmployee);
        } else {
            dataService.updateEmployee($scope.editableEmployee);
        }


        $scope.employee = angular.copy($scope.editableEmployee);
        $window.history.back();
    };

    $scope.cancelForm = function () {
        $window.history.back();
    };
});