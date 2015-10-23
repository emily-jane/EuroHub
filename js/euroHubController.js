euroHubModule.controller('EuroHubController', ['$scope','hubSearchFactory', function($scope, hubSearchFactory) {

  $scope.test = "Hello world!"

  $scope.searchType = function(type) {
    hubSearchFactory.searchType(type).then(function(res) {
      $scope.searchList = res;
    });
  };

  $scope.search = function(searchTerm) {
    $scope.searchResults = [];
    for ( var i = 0; i < $scope.searchList.length; i++ ) {
      $.each($scope.searchList[i], function(key, value) {
        if ($scope.arrayCheck(value) && ($.inArray(searchTerm, value))) {
            $scope.searchResults.push($scope.searchList[i]);
            console.log($scope.searchResults);
        } else if ($scope.stringCheck(value) && (value === searchTerm)) {
          $scope.searchResults.push($scope.searchList[i]);
          // console.log($scope.searchResults);
        }
      })
    }
  }

  $scope.arrayCheck = function(option) {
    if (Array.isArray(option)) {
      return true;
    }
  }

  $scope.stringCheck = function(option) {
    if (typeof option === 'string') {
      return true;
    }
  }
}]);
