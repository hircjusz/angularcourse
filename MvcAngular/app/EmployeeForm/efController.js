angularFormsApp.controller('efController',
    ['$scope', '$window', '$routeParams', '$modal', 'dataService',
    function efController($scope, $window, $routeParams, $modal, dataService) {

        if ($routeParams.id) {
            $scope.employee = dataService.getEmployee($routeParams.id);
        } else {
            $scope.employee = { id: 0 };
        }

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];
        $scope.programmingLanguages = [
            'C',
            'C++',
            'C#',
            'Java',
            'Perl',
            'pascal',
            'Javascript'
        ];

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / 10);
        };

        $scope.resetForm = function () {
            $scope.$broadcast('hide-errors-event');

        };
        $scope.submitForm = function () {

            $scope.$broadcast('show-errors-event');

            if ($scope.editableEmployee.id == 0) {
                dataService.insertEmployee($scope.editableEmployee).then(function (results) {
                    $scope.employee = angular.copy($scope.editableEmployee);
                    $window.history.back();
                },
                    function (results) {
                        alert(results);
                    }
                );
            } else {
                dataService.updateEmployee($scope.editableEmployee);
            }
            $scope.employee = angular.copy($scope.editableEmployee);
            $modalInstance.close();
        };

        $scope.cancelForm = function () {
            $modalInstance.dismiss();
        };
    }]);