angular.module(apiApp).service('swapiVehicleService', function($http){
    var rootVehicleUrl = "http://swapi.co/api/vehicles/"
    
    this.getVehicles = function(){
        return $http({
          method: 'GET',
          url: rootVehicleUrl
        }).then(function(webResponse){
            if(webResponse.status != 200){
                return "You broke something you nooob";
            }
            console.log(webResponse.data);
           return webResponse.data; 
        });
    }
});