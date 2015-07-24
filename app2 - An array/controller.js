arrayApp.controller('arrayController',
	function($scope, arrayService){
	$scope.people = arrayService.getPeople();
})