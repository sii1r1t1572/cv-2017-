(function(){

	var icons = function() {

        var menuIcons = [
            {
                id: 'about',
                name: 'comment', 
            },
            {   
                id: 'education',
                name: 'school',
            },
            {
                id: 'skills',
                name: 'assessment',
            },
            {
                id: 'contacts',
                name: 'mail_outline',
            }
        ];

        var sizes = [
            {
                size: 'md-18',
                padding: 0
            },
            {
                size: 'md-24',
                padding: 2
            }
        ];

        return {
        	menuIcons: menuIcons,
            sizes: sizes   
        };
    };

    angular
        .module('mrTsybranCV')
        .factory('icons', icons);

}());