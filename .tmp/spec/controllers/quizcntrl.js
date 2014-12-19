(function() {
  'use strict';
  describe('Controller: QuizcntrlCtrl', function() {
    var QuizcntrlCtrl, scope;
    beforeEach(module('flexTestApp'));
    QuizcntrlCtrl = {};
    scope = {};
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      return QuizcntrlCtrl = $controller('QuizcntrlCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);

//# sourceMappingURL=quizcntrl.js.map
