/// <reference path="efService.js" />
angularFormsApp.factory('dataService',
    ['$http',function ($http) {


    var getEmployees = function() {
        return $http.get('Employee/GetEmployees');
    };

    var getEmployee = function (id) {
        if (id == 123) {
            return {
                fullName: 'Milton Waddams',
                notes: "The ideal employee",
                department: "Adinistration",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none",
                dateHired: '7/11/2014',
                breakTime: '7/11/2014 4:00',
                interviewRating: 5,
                isUnderNonCompete: true,
                nonCompeteNotes: 'notes...',
                email:''

            };
        }
        return undefined;
    };

    var insertEmployee= function(employee) {
        return $http.post("Employee/Create", employee);
    };

    var updateEmployee = function (employee) {
        return true;
    };

    return {
        getEmployees:getEmployees,
        getEmployee: getEmployee,
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee
    };
}]);