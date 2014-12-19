'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
    this.server = "Pictures/";
    this.image = "3fbdef1f0ce4b5b6803c2b81328c764f-xxlarge.jpg";
    this.imageProperties = {
        "title": "Weston Sitting",
        "caption": "It's a good thing we got a picture of him sitting still, because it is the only time you will ever see him like this"
    },
    this.fullResVisible = false;

    this.showFullRes = function showFullRes() {
        this.fullResVisible = true;
    },
    this.hideFullRes = function showFullRes() {
        this.fullResVisible = false;
    }
}]);