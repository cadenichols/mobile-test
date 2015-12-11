'use strict';

var app = angular.module('myApp', ['ui.router', 'ngCordova']);

app.controller('testCtrl', function($scope, $cordovaVibration) {
  $scope.number = 5;
  $scope.vibrate = function() {
    console.log('button')
    $cordovaVibration.vibrate(1000);
  }
});
