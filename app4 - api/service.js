angular.module('apiApp').service('myService', function($http){
    var baseUrl = 'http://bird-api.com/api/birds'
    
    this.getBirds = function(){
        return $http({
            method: 'GET',
            url: baseUrl
        }).then(function(response){
                var birdDAta = response.data;
                birdDAta = JSON.parse(JSON.stringify(birdDAta));
                return birdDAta;
        });
    }
})