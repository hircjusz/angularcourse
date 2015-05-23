/// <reference path="efService.js" />
angularFormsApp.factory('efService', function () {
    return {
        employee: {
            fullName: 'Milton Waddams',
            notes: "The ideal employee",
            department: "Adinistration",
            perkCar: true,
            perkStock: false,
            perkSixWeeks: true,
            payrollType: "none"
        }
    };
});