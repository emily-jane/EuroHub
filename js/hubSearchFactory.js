euroHubModule.factory('hubSearchFactory', ['$http', function($http, $scope) {

  return {
    people: function() {
      return $.getJSON("data/people.json", function(data) {
        return data;
      })
    },
    documents: function() {
      return $.getJSON("data/people.json", function(data) {
        return data;
      })
    }
  }

}]);
