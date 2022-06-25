var mainModule = angular.module('mainModule', ['ngRoute'])

mainModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'mainController'
  })
  .when('/directory', {
    templateUrl: 'views/directory.html',
    controller: 'mainController'
  })
  .otherwise({
    redirectTo: '/home'
  })
}])

mainModule.controller('mainController', ['$scope', '$http', function($scope, $http) {
  $scope.message = 'Hey! this is a message!'

  $scope.addNinja = function() {
    $scope.ninja.push({ 
      name: $scope.newNinja.name,
      age: $scope.newNinja.age,
      rate: $scope.newNinja.rate
    })
  }
 
  // $http.get('data/main.json').success(function(data) {
  //   $scope.ninja = data
  // })

  $http({
    method: 'GET',
    url: 'data/main.json'
  }).then(function (response){
    $scope.ninja = response.data
  },function (error){

  });
}])


mainModule.directive('randomNinja', [function() {
  return {
    restrict: 'E',
    scope: {
      ninja: '=',
      title: '='
    },
    transclude: true,
    // replace: true,
    templateUrl: 'views/random.html',
    controller: function($scope) {
      $scope.random = Math.floor(Math.random() * 4)
    }
  }
}])