'use strict';

angular.module('myApp.photos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos/:id', {
    templateUrl: 'views/photoDisplay/photoDisplayTemplate.html',
    controller: 'PhotoDisplayController'
  });
}])

.controller('PhotoDisplayController', ['$scope', '$routeParams', 'photoTransferService', function($scope, $routeParams, photoTransferService) {
    $scope.image = photoTransferService.dataURL;
    $scope.title = photoTransferService.title;
    $scope.caption = photoTransferService.caption;
    
    $scope.fullResVisible = false;
    $scope.showFullRes = function showFullRes() {
        $scope.fullResVisible = true;
    },
    $scope.hideFullRes = function showFullRes() {
        $scope.fullResVisible = false;
    }
}]);