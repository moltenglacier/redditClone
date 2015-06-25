'use strict';

var notReddit = angular.module('notReddit', ["ngRoute"])
.config(function($routeProvider){
  $routeProvider
    .when("/", {
      controller: "ListCtrl",
      templateUrl: "list.html"
    })
    .when("/new",{
      controller: "NewLinkCtrl",
      templateUrl: "new.html"
    })
    .when("/show/:id",{
      controller: "showLinkCtrl",
      templateUrl: "show.html"
    })
    .otherwise({
      redirectTo: "/"
    });
})
.service("linkService", function(){
  this.links = [
    {title: "google", url: "https://www.google.com", description: "The google is the google"}
  ];
  this.storeLink = function (newLink){
    this.links.unshift(newLink);
  };
  this.deleteLink = function(listIndex){
    this.links.splice(listIndex, 1);
  };
  this.readLink = function(index){
    return this.links[index];
  };
})
.controller("showLinkCtrl", function($scope, linkService, $routeParams){
  $scope.oneLink = linkService.readLink($routeParams.id);
});
