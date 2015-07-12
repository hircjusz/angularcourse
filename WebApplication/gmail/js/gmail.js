var emailApp= angular.module('EmailApp', [
  'ngRoute'
]).config(function ($routeProvider) {

    'use strict';

    $routeProvider
      .when('/inbox', {
          templateUrl: '/gmail/views/inbox.html',
          controller: 'InboxCtrl',
          controllerAs: 'inbox'
      })
      .when('/inbox/email/:id', {
          templateUrl: '/gmail/views/email.html',
          controller: 'EmailCtrl',
          controllerAs: 'email'
      })
      .otherwise({
          redirectTo: '/inbox'
      });
}).run(function ($rootScope) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        console.log(event, current, previous, rejection);
    });
});

