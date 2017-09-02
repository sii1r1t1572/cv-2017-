(function() {

	var app = angular.module('mrTsybranCV');
	
	var gag = function(){
		return{
			restrict: 'E',
			templateUrl: 'content/gag.html'
		};
	}

	app.directive('gag', gag);
	
}());