(function() {
  'use strict';
  angular.module('flexTestApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/quiz.html',
      controller: 'QuizCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);

//# sourceMappingURL=app.js.map
