describe('EuroHubController', function() {
  beforeEach(module('EuroHub'));

  var ctrl;
  var $scope;

  beforeEach(module(function($provide) {
    $scope = {};
    $provide.value('$scope', $scope);
  }));

  beforeEach(inject(function($controller) {
    ctrl = $controller('EuroHubController');
  }));

  it('links to the controller test', function() {
    expect($scope.test).toEqual('Hello world!');
  });
});