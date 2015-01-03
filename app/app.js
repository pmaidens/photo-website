'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view',
  'myApp.upload',
  'myApp.version',
  'angularFileUpload',
  'myApp.home',
  'myApp.photoTransferService'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
