'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/homeView/homeViewTemplate.html',
    controller: 'HomeViewController'
  });
}])

.controller('HomeViewController', ['$scope', '$http', 'photoTransferService', function($scope, $http, photoTransferService) {
    var uploadedPhotos = [];
    $http.get('/api/users/1/photos/54ab2429e618ba8304b0d7f0').success(function(data) {
        var photoData = {};
        photoData.image = "data:image/jpeg;base64, " + data.photo;
        photoData.title = data.title;
        photoData.id = data.id;
        photoData.caption = data.caption;
        uploadedPhotos.push(photoData);
    }).error(function(data){
        console.log("Error: " + JSON.stringify(data));
    });
    $scope.welcomeMessage = "Welcome to";
    $scope.companyName = "DeLane Jeffery Photography";
    $scope.uploadedPhotos = uploadedPhotos;
    $scope.updateTransferPhoto = function(picture) {
        photoTransferService.set(picture);
    };
}]);