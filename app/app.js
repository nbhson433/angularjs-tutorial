var mainModule = angular.module('mainModule', [])

mainModule.config(() => {

})

mainModule.controller('mainController', ['$scope', ($scope) => {
  $scope.message = 'Hey! this is a message!'
  $scope.ninja = [ 
    { name: 'Son', age: 18, rate: 5000 },
    { name: 'Khoa', age: 19, rate: 13200 },
    { name: 'Thong',age: 20, rate: 7800 }
  ]
}])
