euroHubModule.controller('EuroHubController', ['$scope','hubSearchFactory', function($scope, hubSearchFactory) {

  $scope.test = "Hello world!"


  console.log(hubSearchFactory.people());


}]);
