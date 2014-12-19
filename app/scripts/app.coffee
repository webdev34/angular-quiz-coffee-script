'use strict'

angular
  .module('flexTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/quiz.html'
        controller: 'QuizCtrl'
      .otherwise
        redirectTo: '/'

