euroHubModule.controller('EuroHubController', ['$scope','hubSearchFactory', function($scope, hubSearchFactory) {

  $scope.test = "Hello world!"

  $scope.searchPeople = function() {
    
  }

  console.log(hubSearchFactory.documents());

}]);
