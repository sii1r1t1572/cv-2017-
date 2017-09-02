(function() {

	var app = angular.module('mrTsybranCV');
	
	var footer = function(){
		return{
			restrict: 'E',
			templateUrl: 'content/footer.html',
			controller: 'FooterCtrl'
		};
	}

	app.directive('footer', footer);
	
}());