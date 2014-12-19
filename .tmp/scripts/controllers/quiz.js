(function() {
  'use strict';
  angular.module('flexTestApp').controller('QuizCtrl', function($scope, $rootScope, $timeout, questionAnswer) {
    questionAnswer.getQNA();
    $scope.currentQuestion = 1;
    $scope.showAnswer = false;
    $scope.results = [];
    $scope.disableNextBtn = false;
    $scope.selectedAns = void 0;
    $scope.btnText = 'Next';
    $scope.showWarning = false;
    $scope.isDone = false;
    $scope.warning = 'Please select an answer!';
    return $scope.changeQ = function(selectedAns) {
      if (selectedAns !== void 0) {
        $scope.showAnswer = true;
        $scope.results.push(selectedAns);
        $scope.selectedAns = void 0;
        $scope.showWarning = false;
        $scope.disableNextBtn = true;
        return $timeout((function() {
          $scope.showAnswer = false;
          $scope.disableNextBtn = false;
          if ($scope.currentQuestion < $rootScope.qNa.questions.length) {
            $scope.currentQuestion++;
            if ($scope.currentQuestion === 4) {
              return $scope.btnText = 'Finish';
            }
          } else {
            $scope.disableNextBtn = true;
            $scope.isDone = true;
            return $scope.finalResults = $scope.results;
          }
        }), 2000);
      } else {
        return $scope.showWarning = true;
      }
    };
  });

}).call(this);

//# sourceMappingURL=quiz.js.map
