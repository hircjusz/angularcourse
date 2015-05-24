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
                payrollType: "none",
                dateHired: '7/11/2014',
                breakTime: '7/11/2014 4:00',
                interviewRating: 5,
                isUnderNonCompete: true,
                nonCompeteNotes: 'notes...'

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