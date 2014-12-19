(function(){"use strict";angular.module("flexTestApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/quiz.html",controller:"QuizCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";angular.module("flexTestApp").controller("QuizCtrl",["$scope","$rootScope","$timeout","questionAnswer",function(a,b,c,d){return d.getQNA(),a.currentQuestion=1,a.showAnswer=!1,a.results=[],a.disableNextBtn=!1,a.selectedAns=void 0,a.btnText="Next",a.showWarning=!1,a.isDone=!1,a.warning="Please select an answer!",a.changeQ=function(d){return void 0!==d?(a.showAnswer=!0,a.results.push(d),a.selectedAns=void 0,a.showWarning=!1,a.disableNextBtn=!0,c(function(){return a.showAnswer=!1,a.disableNextBtn=!1,a.currentQuestion<b.qNa.questions.length?(a.currentQuestion++,4===a.currentQuestion?a.btnText="Finish":void 0):(a.disableNextBtn=!0,a.isDone=!0,a.finalResults=a.results)},2e3)):a.showWarning=!0}}])}.call(this),function(){"use strict";angular.module("flexTestApp").service("questionAnswer",["$http","$q","$rootScope",function(a,b,c){this.getQNA=function(){var d;return d=b.defer(),a({method:"GET",url:"qNa.json"}).success(function(a){d.resolve(a),c.qNa=a}).error(function(a,b){d.reject(b)})}}])}.call(this);