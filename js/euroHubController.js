euroHubModule.controller('EuroHubController', ['$scope','hubSearchFactory', function($scope, hubSearchFactory) {

  $scope.test = "Hello world!"

  $scope.searchType = function(type) {
    hubSearchFactory.searchType(type).then(function(res) {
      $scope.searchList = res;
    });
  };

  $scope.search = function(searchTerm) {
    $scope.options = [];
    for ( var i = 0; i < $scope.searchList.length; i++ ) {
      $.each($scope.searchList[i], function(key, value) {
        if ($scope.arrayCheck(value)) {
          if ($.inArray(searchTerm, value)) {
            $scope.options.push($scope.searchList[i]);
            // console.log($scope.options);
          }
        } else if ($scope.stringCheck(value)) {
          if (value === searchTerm) {
            $scope.options.push($scope.searchList[i]);
            console.log($scope.options);
          }
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
