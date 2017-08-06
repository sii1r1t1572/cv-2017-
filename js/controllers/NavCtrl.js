(function() {

	var app = angular.module('mrTsybranCV');
  
  	var NavCtrl = function($location, $http, $scope){
   
		$http.get('resources/nav-items.json')
			.then(function(response){
  			$scope.items = response.data;
			});

		$scope.setActive = function(el, init){
			$location.path().replace('/', '') ? loc = $location.path().replace('/', '') : loc = 'about';
			
			if(el != loc || init){
				if(!el) el = loc;
				$('body').attr('data-active', el);
			}
		}

		$scope.setActive(null, true);
		
	};
		
	app.controller('NavCtrl', NavCtrl);
	
}());