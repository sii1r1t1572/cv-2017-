(function() {

	var app = angular.module('mrTsybranCV');
  
  	var NavCtrl = function($scope){

		$scope.items = [
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
            	id: 'experience',
            	name: 'timeline'
            },
            {
                id: 'contacts',
                name: 'mail_outline',
            }
        ];
	};
		
	app.controller('NavCtrl', NavCtrl);
	
}());