euroHubModule.controller('EuroHubController', ['$scope','hubSearchFactory', function($scope, hubSearchFactory) {

  $scope.test = "Hello world!"

  function searchType() {
    hubSearchFactory.searchType($scope.searchCategory).then(function(res) {
       $scope.searchList = res;
    });
  };

  $scope.search = function() {
    var searchTerm = $scope.searchTerm;
    $scope.searchResults = [];
    for ( var i = 0; i < $scope.searchList.length; i++ ) {
      $.each($scope.searchList[i], function(key, value) {
        if ($scope.arrayCheck(value) && $.inArray(searchTerm, value) !== -1) {
            $scope.searchResults.push($scope.searchList[i]);
        }
        else if ($scope.stringCheck(value) && (value === searchTerm)) {
          $scope.searchResults.push($scope.searchList[i]);
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

  $scope.$watch("dropdown.value", function(select){
    $scope.searchCategory = select;
    searchType();
  })

// <img src="{{ rightPane }}" alt="euro hub logo" style="width:100%;height:100%">

  $scope.rightPane = "assets/images/euro-money.png";

  $scope.openImage = function(location){
    $scope.rightPane = location;
  }

  $scope.documentClick = function(location, download){
    if (download === false) {
      $scope.rightPane = window.location.href + location;
      console.log('clicked');
    }
  }



}]);
