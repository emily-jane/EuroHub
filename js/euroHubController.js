euroHubModule.controller('EuroHubController', ['$http', '$scope', '$q', 'hubSearchFactory', function($http, $scope, $q, hubSearchFactory) {

  $scope.test = "Hello world!"

  $scope.twittersearch = function() {
    OAuth.initialize('dOdOAo0b7V9mjme6j6rPar7Aebc')
      $.ajax({
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=teeohbee&count=2',
        dataType: 'jsonp',
        success: function(dataWeGotViaJsonp) {
          console.log(dataWeGotViaJsonp)
        }
      });
  }

  function searchType() {
    hubSearchFactory.searchType($scope.searchCategory).then(function(res) {
      $scope.searchList = res;
    });
  };

  $scope.search = function() {
    var searchTerm = $scope.searchTerm;
    $scope.searchResults = [];
    for (var i = 0; i < $scope.searchList.length; i++) {
      $.each($scope.searchList[i], function(key, value) {
        if ($scope.arrayCheck(value) && $.inArray(searchTerm, value) !== -1) {
          $scope.searchResults.push($scope.searchList[i]);
        } else if ($scope.stringCheck(value) && (value === searchTerm)) {
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

  $scope.$watch("dropdown.value", function(select) {
    $scope.searchCategory = select;
    searchType();
  })

  $scope.floorplanImage = "assets/images/euro-money.png";

  $scope.openImage = function(location) {
    $scope.floorplanImage = location;
    console.log("Image clicked!")
  }

}]);
