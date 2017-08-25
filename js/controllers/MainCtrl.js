(function() {

	var app = angular.module('mrTsybranCV');
  
	var MainCtrl = function($rootScope, $location, 
							$timeout){

    	var str = 20,
			height = str / $(window).height(),
			width = str / $(window).width();
	
		$('body').mousemove(function(e){
			var pageX = e.pageX - ($(window).width() / 2),
			  	pageY = e.pageY - ($(window).height() / 2),
			  	newX = width * pageX * -1 - 25,
			  	newY = height * pageY * -1 - 50;

			$('body').css('background-position', newX + 'px ' + newY + 'px');
		});

    	$rootScope.creator = 'Markian Tsybran';
    	$rootScope.maxViewWidth = $(window).width() - 424;

    	var setCurMenu = function(){
    		$('.active_menu').removeClass('active_menu');
    		var curMenu = $location.path().replace('/', '') || 'about';
			$('#' + curMenu).addClass('active_menu');
			$rootScope.curMenu = curMenu;
    	};
    	
    	$rootScope.$on('$routeChangeSuccess', function(){
    		setCurMenu();
 	  	});
		$timeout(hideLoader, 1000);
		function hideLoader(){
			$('md-progress-linear').addClass('loaded');
		};
	};

	app.controller('MainCtrl', MainCtrl);
	
})();