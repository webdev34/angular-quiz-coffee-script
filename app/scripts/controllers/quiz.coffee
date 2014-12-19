'use strict'

angular.module('flexTestApp')
  .controller 'QuizCtrl', ($scope, $rootScope, $timeout, questionAnswer) ->
    questionAnswer.getQNA()
  
    $scope.currentQuestion = 1
    $scope.showAnswer = false
    $scope.results = []
    $scope.disableNextBtn = false
    $scope.selectedAns = undefined
    $scope.btnText = 'Next'
    $scope.showWarning = false
    $scope.isDone = false
    $scope.warning = 'Please select an answer!'

    $scope.changeQ = (selectedAns)->
        
        if selectedAns isnt undefined
            $scope.showAnswer = true
            $scope.results.push selectedAns
            $scope.selectedAns = undefined
            $scope.showWarning = false
            $scope.disableNextBtn = true
            $timeout (->
                $scope.showAnswer = false
                $scope.disableNextBtn = false
                if $scope.currentQuestion < $rootScope.qNa.questions.length
                  $scope.currentQuestion++ 
                  if $scope.currentQuestion == 4
                    $scope.btnText = 'Finish'
                else
                    $scope.disableNextBtn = true
                    $scope.isDone = true
                    $scope.finalResults = $scope.results
            ), 2000
        else
            $scope.showWarning = true