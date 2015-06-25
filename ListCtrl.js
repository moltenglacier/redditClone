notReddit.controller('ListCtrl', function($scope, linkService){
  $scope.links = linkService.links;
  $scope.deleteLink = linkService.deleteLink;
})
