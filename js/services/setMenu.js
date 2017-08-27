(function(){

	var setMenu = function($location) {
        
        var curMenu = $location.path().replace('/', '') || 'about';

        var setCurMenu = function(){
            curMenu = $location.path().replace('/', '') || 'about';
            $('.active_menu').removeClass('active_menu');
            $('.tmp_active').removeClass('tmp_active');
            $('nav-menu .md-button#' + curMenu).addClass('active_menu'); 
        };
        
        var getCurMenu = function(){
            return curMenu;
        };

        return {
        	setCurMenu: setCurMenu,
            getCurMenu: getCurMenu   
        };
    };

    angular
        .module('mrTsybranCV')
        .factory('setMenu', setMenu);

}());