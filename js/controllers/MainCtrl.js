(function() {

	var app = angular.module('mrTsybranCV');
  
	var MainCtrl = function($rootScope, $timeout,
							setMenu, bodyAnim){

		bodyAnim.bindEvent();

    	$rootScope.$on('$routeChangeSuccess', function(){
    		setMenu.setCurMenu();
    		$rootScope.curMenu = setMenu.getCurMenu();
 	  	});
 	  	
    	$rootScope.creator = 'Markian Tsybran';
		$timeout(hideLoader, 1000);

		function hideLoader(){
			$('md-progress-linear').addClass('loaded');
		};
	};

	app.controller('MainCtrl', MainCtrl);
	
})();