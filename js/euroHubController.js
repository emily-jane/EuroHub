euroHubModule.controller('EuroHubController', ['$scope', 'hubSearchFactory', function($scope, hubSearchFactory) {

  $scope.test = "Hello world!"
  $scope.rightPane = "assets/images/euro-money.png";
  $scope.noSearch = true;
  $scope.badges = hubSearchFactory.badges;
  $scope.rightTitle = 'Company News';

  Pusher.log = function(message) {
    if (window.console && window.console.log) {
      window.console.log(message);
    }
  };

  var pusher = new Pusher('576f64a3302dbb55d959', {
    encrypted: true
  });
  var channel = pusher.subscribe('my_channel');
  channel.bind('my_event', function(data) {
    // alert(data.message);
    $(".fire").toggle();
  });


  $scope.cardClick = function() {

     $('.documentview').addClass('slideUp');

     $('.small-close').click(function(){

         $('.documentview').removeClass('slideUp');
     });
   }


  function searchType() {
    hubSearchFactory.searchType($scope.searchCategory).then(function(res) {
      $scope.searchList = res;

    });
  };

  function checksearch(results) {
    if (results.length === 0){
      $scope.noResultsFound = true;
    } else {
      $scope.noResultsFound = false;
    }
  };

  $scope.noResultsFound = false;

  $scope.search = function() {
    $scope.noSearch = false;
    var searchTerm = $scope.searchTerm;
    $scope.rightPane = "assets/images/euro-money.png";
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
      checksearch($scope.searchResults);
    } else {
      $scope.noSearch = true;
      $scope.noResultsFound = false;
      $scope.rightTitle = 'Company News';

    }
  }


$scope.clearSearch = function() {
  $scope.noSearch = true;
  $scope.noResultsFound = false;
  $scope.searchResults = [];
  $scope.searchTerm = "";
  $scope.rightPane = "assets/images/euro-money.png";
  $scope.rightTitle = "Company News";
  };


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


  $scope.openImage = function(location, first_name, last_name, desk) {
    $scope.rightPane = location;
    $scope.rightTitle = first_name + ' ' + last_name + ', Desk: ' + desk;
  }

  $scope.documentClick = function(location, download, title, department) {
    if (download === false) {
      $scope.rightPane = window.location.href + location;
      $scope.rightTitle = title + ', Department: ' + department;
    }
  }

  $scope.businessClick = function(location) {
    $scope.rightPane = window.location.href + location;
  }

}]);
