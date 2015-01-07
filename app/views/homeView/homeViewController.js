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
    $http.get('/api/users/1/photos/').success(function(data) {
        data.forEach(function(photo) {
            var photoData = {};
            photoData.image = "data:image/jpeg;base64, " + photo.photo;
            photoData.title = photo.title;
            photoData.id = photo.id;
            photoData.caption = photo.caption;
            uploadedPhotos.push(photoData);
        });
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