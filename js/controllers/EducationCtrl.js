(function() {

	var app = angular.module('mrTsybranCV');
  
	var EducationCtrl = function($scope){
		
		$scope.languages1 = [{
				title: 'Ukrainian',
				subtext: 'My native language.',
				val: 100
			}, {
				title: 'English',
				subtext: 'Strong Upper-Intermediate.',
				val: 90
			}];

		$scope.languages2 = [{
				title: 'Russian',
				subtext: 'Can easily speak and write.',
				val: 90
			}, {
				title: 'Polish',
				subtext: 'Can understand but hard to speak.',
				val: 50
			}];
    	
	};

	app.controller('EducationCtrl', EducationCtrl);
	
})();