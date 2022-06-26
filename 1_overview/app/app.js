var mainModule = angular.module('mainModule', ['ngRoute', 'ngAnimate'])

mainModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true)

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'mainController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'mainController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contactController'
    })
    .when('/contact-success', {
      templateUrl: 'views/contact-success.html',
      controller: 'contactController'
    })
    .otherwise({
      redirectTo: '/home'
    })
}])

mainModule.controller('mainController', ['$scope', '$http', function ($scope, $http) {
  $scope.message = 'Hey! this is a message!'

  $scope.addNinja = function () {
    $scope.ninja.push({
      name: $scope.newNinja.name,
      age: $scope.newNinja.age,
      rate: $scope.newNinja.rate
    })
  }

  $scope.removeAll = function () {
    $scope.ninja = []
  }

  $scope.addContact = function () {
    console.log($scope.contact);
  }

  // $http.get('data/main.json').success(function(data) {
  //   $scope.ninja = data
  // })

  $http({
    method: 'GET',
    url: 'data/main.json'
  }).then(function (response) {
    $scope.ninja = response.data
  }, function (error) {

  });
}])

mainModule.controller('contactController', ['$scope', '$location', function ($scope, $location) {
  $scope.addContact = function () {
    $location.path('contact-success');
  }
}])


mainModule.directive('randomNinja', [function () {
  return {
    restrict: 'E',
    scope: {
      ninja: '=',
      title: '='
    },
    transclude: true,
    // replace: true,
    templateUrl: 'views/random.html',
    controller: function ($scope) {
      $scope.random = Math.floor(Math.random() * 4)
    }
  }
}])