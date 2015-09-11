angular.module('arrayApp').controller('arrayController', ['$scope', 'employeeService', function($scope, employeeService){
    $scope.employees = employeeService.getEmployees();
});