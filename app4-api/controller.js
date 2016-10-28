angular.module("apiApp").controller('mainCtrl', function($scope, mainSvc){
    var promise = mainSvc.getShipInfo();
    promise.then(function(ships){
        $scope.ships = ships;
    })
})