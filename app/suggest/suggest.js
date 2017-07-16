'use strict';

angular.module('myApp.suggest', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/suggest', {
    templateUrl: 'suggest/suggest.html',
    controller: 'TypeaheadCtrl'
  });
}])

.controller('TypeaheadCtrl', ['$scope', function($scope) {
    $scope.placeholderText = 'SEARCH (Client Name/ Policy Number)';
    $scope.query = '';
    $scope.results = [{
      'name': 'Ann Liebmann',
      'tel': '+27-61-453-5444',
      'email': 'ann.lieb@gmail.com',
      'policyNo': '0013983887 | 0013983888'
    }, {
      'name': 'Ann Summer',
      'tel': '+97-55-444-5555',
      'email': 'ann.summer@outlook.com',
      'policyNo': '0013983441 | 0013983442'
    }, {
      'name': 'Anabelle Samuel',
      'tel': '+27-61-453-5444',
      'email': 'anabelle.s@gmail.com',
      'policyNo': '0013983880 | 0013983881'
    }, {
      'name': 'Uzair Ahmed',
      'tel': '+91-97-911-38217',
      'email': 'uzairpm@gmail.com',
      'policyNo': '0013983900 | 0013983901'
    }];

    angular.forEach($scope.results, function(item){
      item.combined = item.name + ' ' + item.policyNo;
    });
}]);
