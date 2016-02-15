'use strict';

describe('Directive: itemBody', function () {

  // load the directive's module
  beforeEach(module('App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<item-body></item-body>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the itemBody directive');
  }));
});
