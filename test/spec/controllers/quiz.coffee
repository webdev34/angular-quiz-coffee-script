'use strict'

describe 'Controller: QuizCtrl', ->

  # load the controller's module
  beforeEach module 'flexTestApp'

  QuizCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    QuizCtrl = $controller 'QuizCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
