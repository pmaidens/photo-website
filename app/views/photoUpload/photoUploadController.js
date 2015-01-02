'use strict';

angular.module('myApp.upload', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload', {
    templateUrl: 'views/photoUpload/photoUploadTemplate.html',
    controller: 'PhotoUploadController'
  });
}])

.controller('PhotoUploadController', ['$scope', '$http', '$timeout', '$compile', '$upload', function($scope, $http, $timeout, $compile, $upload) {
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);

    $scope.submitPicture = function(pictureFile) {
        pictureFile.title = $scope.pictureTitle;
        pictureFile.caption = $scope.pictureCaption;
        pictureFile.credits = $scope.pictureCredits;
        console.log(pictureFile);
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