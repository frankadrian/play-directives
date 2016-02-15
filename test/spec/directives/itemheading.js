'use strict';

describe('Directive: itemHeading', function () {

  // load the directive's module
  beforeEach(module('App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<item-heading></item-heading>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the itemHeading directive');
  }));
});
