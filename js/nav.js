(function() {

	var app = angular.module('mrTsybranCV');
	
	var navMenu = function(){
		return{
			restrict: 'E',
			templateUrl: 'content/navigation.html',
			controller: 'NavCtrl'
		};
	}

	app.directive('navMenu', navMenu);
	
}());