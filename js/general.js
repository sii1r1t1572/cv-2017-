(function() {

	var app = angular.module('mrTsybranCV');

	var generalInfo = function(){
		return{
			restrict: 'E',
			templateUrl: 'content/general.html',
			controller: 'GeneralCtrl'
		};
	}

	app.directive('generalInfo', generalInfo);

}());