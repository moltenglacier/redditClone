'use strict';

angular.module('notReddit', [])
.controller('MainCtrl', function($scope){
  $scope.links = [{title: "test", url: "test url", description: "test description"}];
  $scope.addLink = function (){
    $scope.links.unshift($scope.link);
    $scope.link = {};
  };
});
