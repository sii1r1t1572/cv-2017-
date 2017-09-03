		

(function(){

	var bodyAnim = function($location) {

        var bindEvent = function(){
            var str = 20, height = str / $(window).height(),
						  width = str / $(window).width();
	
			$('body').mousemove(function(e){
				var pageX = e.pageX - ($(window).width() / 2),
				  	pageY = e.pageY - ($(window).height() / 2),
				  	newX = width * pageX * -1 - 25,
				  	newY = height * pageY * -1 - 50;

				$('body').css('background-position', newX + 'px ' + newY + 'px');
			});
        };
	        
        return {
        	bindEvent: bindEvent   
        };
    };

    angular
        .module('mrTsybranCV')
        .factory('bodyAnim', bodyAnim);

}());