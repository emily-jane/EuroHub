euroHubModule.factory('hubSearchFactory', ['$http', function($http, $scope) {

  return {
    searchType: function(type) {
      return $.getJSON("data/" + type + ".json", function(data) {
        return data;
      })
    }
  }

}]);
