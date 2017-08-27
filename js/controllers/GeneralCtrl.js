(function() {

	var app = angular.module('mrTsybranCV');
  
	var GeneralCtrl = function($animate, $scope, $rootScope, $timeout){
		$scope.$on('$routeChangeStart', function(){
			$scope.hideView = true;
			// console.log(!$('md-progress-linear.loading_view').length);
			// if(!$('md-progress-linear.loading_view').length){
			// 	var viewEl = $('.page > div');
			// 	$('md-progress-linear').width(viewEl.width());
			// 	$('md-progress-linear').addClass('loading_view');
			// 	$scope.hideView = true;
			// } else {
			// 	$scope.hideView = true;
			// 	$('md-progress-linear').removeClass('invisible_loader');
			// }
		});

		$scope.$on('$viewContentLoaded', function(){
		    this.about = {
		    	inputs: 
			    	[{
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
					}, {
						label: 'Birthdate',
						text: '02',
						class: 'md-third'
					}, {
						text: '06',
						class: 'md-third'
					}, {
						text: '1994',
						class: 'md-third'
					}, {
						label: 'Age',
						text: '23',
						class: 'md-third'
					}],
				heading: 
					'General Info'
				};

			this.education = {
				inputs: 
			    	[{
						label: 'Title',
						text: 'Lviv School №18',
						class: 'md-full',
						preLabel: 'School'
					}, {
						label: 'Title',
						text: 'LNU of Ivan Franko',
						class: 'md-full',
						preLabel: 'University'
					}, {
						label: 'Master\'s degree',
						text: 'Comp. & Applied Mathematics',
						class: 'md-full md-small'
					}, {
						label: 'From',
						text: '2010',
						class: 'md-third'
					}, {
						text: '2015',
						class: 'md-third'
					}, {
						class: 'md-third md-hidden'
					}],
				heading: 
					'Education'
				};

			this.skills = {
					inputs: 
			    	[{
						label: 'Front-end',
						text: 'Js, Jquery, AngularJs, Backbone',
						class: 'md-full md-small'
					}, {
						label: 'Back-end',
						text: 'Ruby, Php, Python',
						class: 'md-full md-small'
					}, {
						label: 'UI/UX',
						text: 'Photoshop, AI, Material Design',
						class: 'md-full md-small'
					}, {
						label: 'Repos & PM',
						text: 'Git, Bitbucket, Scrum, Trello, Jira',
						class: 'md-full md-small'
					}],
				heading: 
					'Skills'
				};

			if($rootScope.curMenu == 'contacts'){
				$scope.infClass = 'contacts_card';
			} else {
				$scope.infClass = '';
			}

			$scope.inputs = this[$rootScope.curMenu].inputs;
			$scope.heading = this[$rootScope.curMenu].heading;

			$timeout(hideLoader, 1200);

			function hideLoader(){
				$scope.hideView = false;
				// $('md-progress-linear').addClass('invisible_loader');
			};
	  	});
		
	};

	app.controller('GeneralCtrl', GeneralCtrl);

}());