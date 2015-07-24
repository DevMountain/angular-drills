var ourModule = angular.module('basicsApp');

ourModule.controller('basicsController',
					  function($scope, basicsService){
	$scope.words = basicsService.getMeWords();
});
