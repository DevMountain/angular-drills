angular.module("arrayApp").controller("arrayController", function($scope, arrayService){
    $scope.employees = arrayService.getData();

    
})