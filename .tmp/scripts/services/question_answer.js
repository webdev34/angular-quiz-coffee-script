(function() {
  'use strict';
  angular.module('flexTestApp').service('questionAnswer', function($http, $q, $rootScope) {
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
  });

}).call(this);

//# sourceMappingURL=question_answer.js.map
