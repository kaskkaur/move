moveApp.factory('Move',function ($resource, $firebaseArray, $firebaseObject) {

	
	
	this.ref = new Firebase("https://move-8eb1e.firebaseio.com/");



	this.addProfile = function(name, length, type, description){
		
		this.actRef.push({
		    name: name,
		    length: length,
		    type: type,
		    description: description
		});
	}


	


return this;
});