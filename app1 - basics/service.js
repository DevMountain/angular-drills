//service.js
angular.module('app1').service('mainService', function(){
    var anArray = []
    
    for(var i = 0; i< 100; i++){
        
        if(i % 2 === 0 ){
           anArray.push("Banana " + i);   
        } else {
            anArray.push("ananaB " + i);   
        }
    }
    
    anArray.push("Chimpanzee");
    
    this.returnDataOrSomething = function(){
        return anArray;   
    }
})