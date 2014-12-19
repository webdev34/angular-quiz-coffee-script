'use strict'

describe 'Controller: QuizcntrlCtrl', ->

  # load the controller's module
  beforeEach module 'flexTestApp'

  QuizcntrlCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    QuizcntrlCtrl = $controller 'QuizcntrlCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
