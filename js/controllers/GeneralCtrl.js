(function() {

	var app = angular.module('mrTsybranCV');
  
	var GeneralCtrl = function(){
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
		// const tilt = $('nav-menu').tilt();
	};

	app.controller('GeneralCtrl', GeneralCtrl);

}());