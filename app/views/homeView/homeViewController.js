'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/homeView/homeViewTemplate.html',
    controller: 'HomeViewController'
  });
}])

.controller('HomeViewController', ['$scope', 'photoTransferService', function($scope, photoTransferService) {
    $scope.welcomeMessage = "Welcome to";
    $scope.companyName = "DeLane Jeffery Photography";
    $scope.uploadedPictures = [
        {
            title: "Lizzy and West Sitting",
            id: "1",
            caption: "A cute picture of Lizzy and Weston sitting in the grass"
        },{
            title: "Weston Large Headshot",
            id: "2",
            caption: "That's one big Weston!"
        }
    ];
    $scope.updateTransferPhoto = function(picture) {
        photoTransferService.set(picture);
    };
}]);