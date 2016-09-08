moveApp.controller('MainCtrl', function ($scope, Move, $firebaseObject, $uibModal, $firebaseArray) {

	$scope.go = function ( path ) {
  		$location.path( path );
  		alert("sss")
	};


	$scope.search = function(){
		var query = $scope.searchinput;
		$scope.keyword = query;
		// Agenda.dayRef.on("value", function(response){
		// 	days = response.val();
		// 	days.forEach(function(snapshot) {
		// 	console.log(item);
		// })
		// })
	}

	// if (Agenda.dayRef) {

	// 	var arr = $firebaseObject(Agenda.dayRef);
	// 	arr.$loaded(function(data){
	// 		$scope.spin = true;
	// 		$scope.days = data;
	// 	});

	// };
	

	




  	// $scope.open = function () {
	  //   var modalInstance = $uibModal.open({
	  //     	templateUrl: 'overviewModal.html',
	  //     	controller: 'OverviewModalCtrl'
   //  	});
  	// };

  	
  	










});

