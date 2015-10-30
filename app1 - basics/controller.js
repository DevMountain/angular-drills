angular.module('app1').controller('mainCtrl', function($scope, mainService){
    
   $scope.bananaInfo = mainService.returnDataOrSomething();

})

//angular.module('app1').controller('mainCtrl', ['$scope', '$http', 'myService' function(scp, http, msrvc){
//        
//}])
