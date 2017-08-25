(function() {

	var app = angular.module('mrTsybranCV');
  
	var AboutCtrl = function($scope){

    	$('.intro_content .md-button').mouseover(function(){
    		var id = $(this).attr('id');
    		if(id){
    			$('nav-menu ' + id).addClass('tmp_active'); 
    		}
    	});

    	$('.intro_content .md-button').mouseout(function(){
    		$('nav-menu .md-button.tmp_active')
    			.removeClass('tmp_active');
    	});

	};

	app.controller('AboutCtrl', AboutCtrl);
	
})();