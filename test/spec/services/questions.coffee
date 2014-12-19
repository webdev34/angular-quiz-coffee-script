'use strict'

describe 'Service: questions', ->

  # load the service's module
  beforeEach module 'flexTestApp'

  # instantiate service
  questions = {}
  beforeEach inject (_questions_) ->
    questions = _questions_

  it 'should do something', ->
    expect(!!questions).toBe true
