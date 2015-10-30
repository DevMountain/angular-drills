angular.module('app3').controller('mainCtrl', function($scope, myService){
    $scope.something = myService.dataGood();
})