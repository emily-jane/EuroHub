euroHubModule.controller('EuroHubController', ['$scope', 'hubSearchFactory', function($scope, hubSearchFactory) {

  $scope.test = "Hello world!"
  $scope.rightPane = "assets/images/euro-money.png";

  function searchType() {
    hubSearchFactory.searchType($scope.searchCategory).then(function(res) {
      $scope.searchList = res;
    });
  };

  $scope.search = function() {
    var searchTerm = $scope.searchTerm;
    $scope.searchResults = [];

    if (searchTerm.length > 0) {
      for (var i = 0; i < $scope.searchList.length; i++) {
        $.each($scope.searchList[i], function(key, value) {
          if ($scope.arrayCheck(value) && $scope.inArrayPartial(searchTerm.toUpperCase(), value)) {
            $scope.searchResults.push($scope.searchList[i]);
          } else if ($scope.stringCheck(value) && (value.toUpperCase().substring(0, searchTerm.length) === searchTerm.toUpperCase())) {
            $scope.searchResults.push($scope.searchList[i]);
          }
        })
      }
      $scope.searchResults = $.unique($scope.searchResults)
      console.log($scope.searchResults)
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

  $scope.inArrayPartial = function(searchTerm, value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i].toUpperCase().substring(0, searchTerm.length) === searchTerm) {
        return true;
      }
    }

  }

  $scope.$watch("dropdown.value", function(select) {
    $scope.searchCategory = select;
    searchType();
  })


  $scope.openImage = function(location) {
    $scope.rightPane = location;
  }

  $scope.documentClick = function(location, download) {
    if (download === false) {
      $scope.rightPane = window.location.href + location;
      console.log('clicked');
    }
  }

}]);
