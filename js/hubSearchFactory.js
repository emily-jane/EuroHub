euroHubModule.factory('hubSearchFactory', ['$http', function($http, $scope) {

  return {
    searchType: function(type) {
      return $.getJSON("data/" + type + ".json", function(data) {
        return data;
      })
    },

    badges:
    
    {
      "C#":"fa-windows",
      ".NET":"fa-windows",
      "Javascript":"fa-code",
      "AngularJS":"fa-file-code-o",
      "Agile":"fa-tasks",
      "First Aid":"fa-medkit",
      "Health and Safety":"fa-medkit",
      "Fire Marshal":"fa-fire",
      "Excel":"fa-file-excel-o",
      "VBA":"fa-windows",
      "Holiday":"fa-plane",
      "Advice":"fa-info-circle",
      "Forcasting":"fa-line-chart",
      "Accountancy":"fa-usd",
      "Management":"fa-building",
      "Sales Training":"fa-graduation-cap",
      "SalesForce":"fa-money",
      "InDesign":"fa-pencil",
      "MS Word":"fa-file-word-o",
      "Automated testing":"fa-users",
      "Selenium":"fa-users",
      "Protractor":"fa-users",
      "SQL":"fa-database",
      "SQL Server":"fa-database",
      "Oracle":"fa-database",
      "MongoDB":"fa-leaf ",
      "NoSQL":"fa-table"
    }
  }

}]);
