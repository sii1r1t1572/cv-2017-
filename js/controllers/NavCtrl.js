(function() {

	var app = angular.module('mrTsybranCV');
  
  	var NavCtrl = function($scope){

        $scope.items = [
            { id: 'about', name: 'comment' },
            { id: 'education', name: 'school' },
            { id: 'skills', name: 'assessment' },
            { id: 'experience', name: 'timeline' },
            { id: 'contacts', name: 'mail_outline' }
        ];

        $('.intro_content .md-button').mouseover(function(){
            var id = $(this).attr('id');
            if(id){ $('nav-menu ' + id).addClass('tmp_active'); }
        });

        $('.intro_content .md-button').mouseout(function(){
            $('nav-menu .md-button.tmp_active')
                .removeClass('tmp_active');
        });
	};
		
	app.controller('NavCtrl', NavCtrl);
	
}());