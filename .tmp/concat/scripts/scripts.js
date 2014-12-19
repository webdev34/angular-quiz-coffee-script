(function() {
  'use strict';
  angular.module('flexTestApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(["$routeProvider", function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/quiz.html',
      controller: 'QuizCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }]);

}).call(this);

//# sourceMappingURL=app.js.map

(function() {
  'use strict';
  angular.module('flexTestApp').controller('QuizCtrl', ["$scope", "$rootScope", "$timeout", "questionAnswer", function($scope, $rootScope, $timeout, questionAnswer) {
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
  }]);

}).call(this);

//# sourceMappingURL=quiz.js.map

(function() {
  'use strict';
  angular.module('flexTestApp').service('questionAnswer', ["$http", "$q", "$rootScope", function($http, $q, $rootScope) {
    this.getQNA = function() {
      var deferred;
      deferred = $q.defer();
      return $http({
        method: 'GET',
        url: 'qNa.json'
      }).success(function(data, status, headers, config) {
        deferred.resolve(data);
        $rootScope.qNa = data;
      }).error(function(data, status, headers, config) {
        deferred.reject(status);
      });
    };
  }]);

}).call(this);

//# sourceMappingURL=question_answer.js.map
