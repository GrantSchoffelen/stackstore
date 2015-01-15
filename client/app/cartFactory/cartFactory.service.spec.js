'use strict';

describe('Service: cartFactory', function () {

  // load the service's module
  beforeEach(module('stackstoreApp'));

  // instantiate service
  var cartFactory;
  beforeEach(inject(function (_cartFactory_) {
    cartFactory = _cartFactory_;
  }));

  it('should do something', function () {
    expect(!!cartFactory).toBe(true);
  });

});
