(function() {
  'use strict';
  describe('Service: questionAnswer', function() {
    var questionAnswer;
    beforeEach(module('flexTestApp'));
    questionAnswer = {};
    beforeEach(inject(function(_questionAnswer_) {
      return questionAnswer = _questionAnswer_;
    }));
    return it('should do something', function() {
      return expect(!!questionAnswer).toBe(true);
    });
  });

}).call(this);

//# sourceMappingURL=question_answer.js.map
