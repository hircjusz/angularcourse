angular
    .module('HelloWorldApp', [])
    .controller('MainController', function($scope) {
        $scope.message = 'I love angular';
        $scope.showMessage = function() {

        };
    })
    .directive('helloWorld', function() {
    return {
        restrict: 'AEC',
        replace: true,
        template: '<p ng-click="clearMessage()">Hello World! {{message}}</p>',
        link: function(scope, elem, attrs) {
            
            scope.$watch('message', function (value) {
                scope.showMessage();
                console.log('Message Changed!');
            });

            scope.clearMessage = function() {
                scope.message = '';
            };

            elem.bind('mouseover', function () {
                elem.css('cursor', 'pointer');
            });


        }

    };

}).directive('helloWorldIsolated', function() {
    return {
        restrict: 'AEC',
        replace: true,
        template: '<p ng-click="clearMessage()">Hello World Isolated! {{message}}</p>',
        scope: {
            message:'='


        },
        link: function(scope, elem, attrs) {
            

        }
    };
}).directive('outerDirective', function() {
    return {
        scope: {},
        restrict: 'AE',
        controller: function($scope, $compile, $http) { 
            this.addChild = function(nestedDirectiveScope) { 
                console.log('Got the message from nested directive:' + nestedDirectiveScope.message);
            };
        }
    };
}).directive('innerDirective', function() {
    return {
        scope: {},
        restrict: 'AE',
        require: '^outerDirective', 
            link: function(scope, elem, attrs, controllerInstance) {
                scope.message = "Hi, Parent directive";
                controllerInstance.addChild(scope);
            }
};
}).directive('transcludeDirective', function() {
    return {
        transclude: 'element',
        scope: {},
        restrict: 'AE',
        replace: true,
        link: function(scope, elem, attrs, ctrl, transclude) {
            transclude(function(clone) {
                clone.css('background-color', 'yellow');
                elem.after(clone); //append the clone 
            });
        },
        template: '<div ng-transclude></div>'
    };
});