'use strict'

describe 'Service: answers', ->

  # load the service's module
  beforeEach module 'flexTestApp'

  # instantiate service
  answers = {}
  beforeEach inject (_answers_) ->
    answers = _answers_

  it 'should do something', ->
    expect(!!answers).toBe true
