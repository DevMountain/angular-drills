angular.module('apiApp').service('getPropsService', function($q){
    
    this.getPropertiesFromFirstObjectInArray = function(arr){
        var deferred = $q.defer();
        var obj = arr[0];
        var props = [];
        
        for(var prop in obj){
            if(obj.hasOwnProperty(prop)){
                props.push(prop);
            }
        }
        
        deferred.resolve({
            birds: arr,
            props: props
        })
        
        
        return deferred.promise;
    }
})