angular.module(apiApp).controller('swapiCtrl', function($scope, swapiVehicleService){
   $scope.vader = "I am your father"; 
   swapiVehicleService.getVehicles().then(function(vehiclesObj){
        var vehicles = vehiclesObj.results;
        var newVehicles = vehicles.map(function(vehicle){
            var newVehicle = {};
            newVehicle.cost_in_usd = vehicle.cost_in_credits * 1000; 
            newVehicle.cost_in_credits = vehicle.cost_in_credits;
            newVehicle.name = vehicle.name;
            return newVehicle;
        });
       $scope.vehicles = newVehicles;
   });
});