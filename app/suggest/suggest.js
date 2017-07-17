'use strict';

angular.module('myApp.suggest', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/suggest', {
    templateUrl: 'suggest/suggest.html',
    controller: 'TypeaheadCtrl'
  });
}])

.controller('TypeaheadCtrl', ['$scope', 'suggestService', function($scope, suggestService) {
    $scope.placeholderText = 'SEARCH (Client Name/ Policy Number)';
    $scope.query = '';
    
    suggestService.getSuggestions().success(function(data, status) {
      $scope.results = data;
      /* To make searching based on name & policy number */
      angular.forEach($scope.results, function(item){
        item.combined = item.name + ' (' + item.policyNo + ')';
      });
    });
}]);
