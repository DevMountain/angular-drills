angular.module('arrayApp').controller('arrayController', ['$scope', 'employeeService', function($scope, employees){
    $scope.employees = employees.getEmployees();
    
    $scope.$watch('daFilter', function(newValue, old){
        var doneFilter = {};
        if(!newValue ){
            return;
        }
        var split = newValue.split(',');
   
        for(var i = 0; i < split.length; i++){
            var piece = split[i];
            var pieces = piece.split(':');
            if(piece.length > 1){
                var propertyName = pieces[0];
                var searchVal = pieces[1];
                doneFilter[propertyName] = searchVal;
            }
        }
        $scope.doneFilter = doneFilter;
    });
}]);