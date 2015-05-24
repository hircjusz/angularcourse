﻿angularFormsApp.controller('efController', function efController($scope,$window,$routeParams,$modal, dataService) {

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
        $modalInstance.close();
    };

    $scope.cancelForm = function () {
        $modalInstance.dismiss();
    };
});