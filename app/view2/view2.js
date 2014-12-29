'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
    this.submitPicture = function submitPicture(pictureFile) {
        console.log(this.pictureFile);

    }

    this.generateThumb = function generateThumb(picture, files) {
        console.log(picture);
    }
}]);