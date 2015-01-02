'use strict';

describe('myApp.photos module', function() {

  beforeEach(module('myApp.photos'));

  describe('PhotoDisplayController controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var photoDisplayController = $controller('PhotoDisplayController');
      expect(photoDisplayController).toBeDefined();
    }));

  });
});