(function() {

	var app = angular.module('mrTsybranCV');
  
	var MainCtrl = function($rootScope, $timeout,
							setMenu, bodyAnim){

		bodyAnim.bindEvent();
    	$rootScope.creator = 'Markian Tsybran';
    	
    	// $rootScope.maxViewWidth = ('max-position', $(window).width() - 424);

    	$rootScope.$on('$routeChangeSuccess', function(){
    		setMenu.setCurMenu();
    		$rootScope.curMenu = setMenu.getCurMenu();
 	  	});

		$timeout(hideLoader, 1000);

		function hideLoader(){
			$('md-progress-linear').addClass('loaded');
		};
	};

	app.controller('MainCtrl', MainCtrl);
	
})();