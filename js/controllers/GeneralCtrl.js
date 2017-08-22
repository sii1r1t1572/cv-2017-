(function() {

	var app = angular.module('mrTsybranCV');
  
	var GeneralCtrl = function($scope, $rootScope){
		$scope.$on('$viewContentLoaded', function(){
		    this.about = [{
					label: 'Name',
					text: $rootScope.creator,
					class: 'md-full'
				}, {
					label: 'Location',
					text: 'Ukraine',
					class: 'md-half'
				}, {
					text: 'Lviv',
					class: 'md-half'
				},
				{
					label: 'Birthdate',
					text: '02',
					class: 'md-third'
				},
				{
					text: '06',
					class: 'md-third'
				},
				{
					text: '1994',
					class: 'md-third'
				},
				{
					label: 'Age',
					text: '23',
					class: 'md-third'
				}];

			this.education = [{
					label: '',
					text: ''
				}, {
					label: '',
					text: ''
				}];

			this.skills = [{
					label: '',
					text: ''
				}, {
					label: '',
					text: ''
				}];

			if($rootScope.curMenu == 'contacts'){
				$scope.hideEl = true;
				return false;
			} else {
				$scope.hideEl = false;
			}

			$scope.inputs = this[$rootScope.curMenu];
	  	});
		
	};

	app.controller('GeneralCtrl', GeneralCtrl);

}());