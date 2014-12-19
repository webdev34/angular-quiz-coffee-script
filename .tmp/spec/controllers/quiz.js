(function() {
  'use strict';
  describe('Controller: QuizCtrl', function() {
    var QuizCtrl, scope;
    beforeEach(module('flexTestApp'));
    QuizCtrl = {};
    scope = {};
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      return QuizCtrl = $controller('QuizCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);

//# sourceMappingURL=quiz.js.map
