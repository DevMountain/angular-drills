app.service('starWarsService',
			function($http){

	//I am the function ready to receive the answer
	var handleResponse = function(webResponse){
	  	 	return webResponse.data;
	  	 };

	  this.getStarWarsPeople = function(){
	  	//Hearing the question
	  	//Doesn't know the answer
	  	//Asks http
	  	 var promise = $http({
	  	 	//I don't know, but I PROMISE I'll get it
	  	 	method: 'GET',
	  	 	url: 'http://swapi.co/api/people/1/'
	  	 });
	  	 promise.then(
	  	 //Tell this guy when we have an answer : 
	  	 //Will get the answer first 
	  	 handleResponse);

	  	 return promise;
	  }
})