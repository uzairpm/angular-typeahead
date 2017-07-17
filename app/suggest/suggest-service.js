'use strict';

var app = angular.module('myApp.suggest');

app.service('suggestService', function($http){
    return {
        getSuggestions: function() {
            return $http.get('api/data.json');
        }
    };
});