emailApp.directive(
    'myDirective', function() {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                myUrl:  '=',
                myLinkText:'@'
            }, template: '\
                    <div>\
                    <label>My Url Field:</label>\
                    <input type="text"\
                    ng-model="myUrl" />\
                    <a href="{{myUrl}}">{{myLinkText}}</a>\
                    </div>\
'
            //templateUrl: "/gmail/js/directives/hrefinp.tmp.html"
        };
    }
);
  