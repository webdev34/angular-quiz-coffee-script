(function() {
  'use strict';
  describe('Service: questions', function() {
    var questions;
    beforeEach(module('flexTestApp'));
    questions = {};
    beforeEach(inject(function(_questions_) {
      return questions = _questions_;
    }));
    return it('should do something', function() {
      return expect(!!questions).toBe(true);
    });
  });

}).call(this);

//# sourceMappingURL=questions.js.map
