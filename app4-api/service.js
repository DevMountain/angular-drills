angular.module("apiApp").service("mainSvc", function ($http) {

    var baseUrl = 'http://swapi.co/api';
    // function thatSendsOutTheRequest
    this.getShipInfo = function () {
        return $http({
            method: 'GET',
            url: baseUrl + "/starships/"
        }).then(function (response) {
           if(response.status === 200){
            return response.data.results;
           }
           return "The death star blew up our request";
        })
    }
})