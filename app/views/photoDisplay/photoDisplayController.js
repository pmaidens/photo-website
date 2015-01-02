'use strict';

angular.module('myApp.photos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos/:id', {
    templateUrl: 'views/photoDisplay/photoDisplayTemplate.html',
    controller: 'PhotoDisplayController'
  });
}])

.controller('PhotoDisplayController', ['$routeParams', function($routeParams) {
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