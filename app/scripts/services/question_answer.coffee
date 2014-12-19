'use strict'

angular.module('flexTestApp')
  .service 'questionAnswer', ($http, $q, $rootScope) ->
    @getQNA = () ->

      deferred = $q.defer()
      $http(
        method: 'GET'
        url: 'qNa.json'
      ).success((data, status, headers, config) ->
          deferred.resolve data
          $rootScope.qNa = data
          return
        ).error((data, status, headers, config) ->
            deferred.reject status
            return
          )

    return