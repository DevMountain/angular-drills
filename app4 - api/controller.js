angular.module('apiApp').controller('myCtrl', function($scope, myService, getPropsService){
    
    var promise = myService.getBirds();
    
    //Promise evalution chain - PART B
    promise.then(getPropsService.getPropertiesFromFirstObjectInArray)
       .then(function(birdsAndProps){
        $scope.birds = birdsAndProps.birds;
        $scope.props = birdsAndProps.props;
    })
    
});