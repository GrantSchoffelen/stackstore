'use strict';

describe('Controller: PastOrdersCtrl', function () {

  // load the controller's module
  beforeEach(module('stackstoreApp'));

  var PastOrdersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PastOrdersCtrl = $controller('PastOrdersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
