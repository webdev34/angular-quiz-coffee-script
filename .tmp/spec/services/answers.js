(function() {
  'use strict';
  describe('Service: answers', function() {
    var answers;
    beforeEach(module('flexTestApp'));
    answers = {};
    beforeEach(inject(function(_answers_) {
      return answers = _answers_;
    }));
    return it('should do something', function() {
      return expect(!!answers).toBe(true);
    });
  });

}).call(this);

//# sourceMappingURL=answers.js.map
