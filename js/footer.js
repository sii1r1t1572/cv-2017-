(function() {

	var app = angular.module('mrTsybranCV');
	
	var footer = function(){
		return{
			restrict: 'E',
			templateUrl: 'content/footer.html'
		};
	}

	app.directive('footer', footer);
	
}());