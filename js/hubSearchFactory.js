euroHubModule.factory('hubSearchFactory', ['$http', function($http, $scope) {

  return {
    searchType: function(type) {
      return $.getJSON("data/" + type + ".json", function(data) {
        return data;
      })
    }
  }

}]);

// euroHubModule.factory('twitterFactory', ['$http', function($http, $scope) {
//
//     // $http({
//     //   method: 'GET',
//     //   url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=teeohbee&count=2'
//     // }).then(function successCallback(response) {
//     //   return (response)
//     //     // this callback will be called asynchronously
//     //     // when the response is available
//     // }, function errorCallback(response) {
//     //   return "Error"
//     //   // called asynchronously if an error occurs
//     //   // or server returns response with an error status.
//     // });
//
// }]);
