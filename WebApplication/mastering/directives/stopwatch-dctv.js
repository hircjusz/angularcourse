angular.module('myApp.Stopwatch', [])
    .directive('bbStopwatch', function () {
        return {
            restrict: 'EA',
            scope: true,
            link: function (scope, elem, attrs) {

            }
        };
    });