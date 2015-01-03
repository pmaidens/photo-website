'use strict';

angular.module('myApp.photoTransferService', []).factory('photoTransferService', function() {
    return {
        empty: true,
        set: function(photo) {
            this.empty = false;
            Object.keys(photo).forEach(function(current) {
                Object.defineProperty(this, current, Object.getOwnPropertyDescriptor(photo, current));
            }.bind(this));
        }
    }
})