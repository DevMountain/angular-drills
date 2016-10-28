angular.module("myApp").controller("mainCtrl", function($scope, mainSvc){
    $scope.employees = mainSvc.getEmployees();

    $scope.prebuiltFilter = {
        name: "K"
    }
});