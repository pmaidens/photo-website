'use strict';

angular.module('myApp.upload', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload', {
    templateUrl: 'views/photoUpload/photoUploadTemplate.html',
    controller: 'PhotoUploadController'
  });
}])

.controller('PhotoUploadController', ['$scope', '$http', '$timeout', '$upload', function($scope, $http, $timeout, $upload) {
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);

    $scope.submitPicture = function() {
        $http.post('/api/users/1/photos', {
            userPhoto: $scope.userPhoto,
            photoTitle: $scope.title,
            photoCaption: $scope.caption
        })
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + JSON.stringify(data));
            });
    }

    $scope.generateThumb = function(file) {
        if (file != null) {
            if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                $timeout(function() {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function(e) {
                        $timeout(function() {
                            file.dataUrl = e.target.result;
                        });
                    }
                });
            }
        }
    }
}]);