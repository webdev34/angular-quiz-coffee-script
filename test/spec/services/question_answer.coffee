'use strict'

describe 'Service: questionAnswer', ->

  # load the service's module
  beforeEach module 'flexTestApp'

  # instantiate service
  questionAnswer = {}
  beforeEach inject (_questionAnswer_) ->
    questionAnswer = _questionAnswer_

  it 'should do something', ->
    expect(!!questionAnswer).toBe true
