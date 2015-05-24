/// <reference path="efService.js" />
angularFormsApp.factory('dataService', function () {

    var getEmployee = function (id) {
        if (id == 123) {
            return {
                fullName: 'Milton Waddams',
                notes: "The ideal employee",
                department: "Adinistration",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            };
        }
        return undefined;
    };

    var insertEmployee= function(employee) {
        return true;
    };

    var updateEmployee = function (employee) {
        return true;
    };

    return {
        getEmployee: getEmployee,
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee
    };
});