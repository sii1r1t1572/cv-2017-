(function() {

	var app = angular.module('mrTsybranCV');
  
  	var NavCtrl = function(icons, $scope){

		$scope.items = icons.menuIcons;	
		
	};
		
	app.controller('NavCtrl', NavCtrl);
	
}());