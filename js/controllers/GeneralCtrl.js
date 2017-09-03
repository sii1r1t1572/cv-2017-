(function() {

	var app = angular.module('mrTsybranCV');
  
	var GeneralCtrl = function($scope, $rootScope){
		
		$scope.$on('$viewContentLoaded', function(){

		    this.about = {
		    	heading: 'General Info',
		    	inputs: [
			    	{ label: 'Name', text: $rootScope.creator, class: 'md-full' }, 
			    	{ label: 'Location', text: 'Ukraine', class: 'md-half' },
			    	{ text: 'Lviv', class: 'md-half' }, 
			    	{ label: 'Birthdate', text: '02', class: 'md-third' }, 
			    	{ text: '06', class: 'md-third' }, 
			    	{ text: '1994', class: 'md-third' }, 
			    	{ label: 'Age', text: '23', class: 'md-third'}
			    ]
			};

			this.education = {
				heading: 'Education',
				inputs: [
					{ label: 'Title', text: 'Lviv School №18', 
					  class: 'md-full', preLabel: 'School' }, 
					{ label: 'Title', text: 'LNU of Ivan Franko', 
					  class: 'md-full', preLabel: 'University' }, 
					{ label: 'Master\'s degree', text: 'Comp. & Applied Mathematics', 
					  class: 'md-full md-small' },
					{ label: 'From', text: '2010', class: 'md-third' }, 
					{ text: '2015', class: 'md-third' },
					{ class: 'md-third md-hidden' }
				]
			};

			this.skills = {
				heading: 'Skills',
				inputs: [
			    	{ label: 'Front-end', text: 'Js, Jquery, AngularJs, Backbone',
					  class: 'md-full md-small' }, 
					{ label: 'Back-end', text: 'Ruby, Php, Python',
					  class: 'md-full md-small' }, 
					{ label: 'UI/UX', text: 'Photoshop, AI, Material Design',
					  class: 'md-full md-small' }, 
					{ label: 'Repos & PM', text: 'Git, Bitbucket, Scrum, Trello, Jira',
					  class: 'md-full md-small' }
				]
			};

			this.experience = {
				heading: 'Experience',
				inputs: [
					{ label: 'Company', text: 'NeoSeo', class: 'md-half md-exp' },
					{ label: 'Aug', text: '2015', class: 'md-third md-exp' },
					{ label: 'Nov', text: '2015', class: 'md-third md-expm' },
					{ label: 'Company', text: 'Smart', class: 'md-half md-exp' },
					{ label: 'Nov', text: '2015', class: 'md-third md-exp' },
					{ text: 'Present', class: 'md-third' },
					{ text: 'Freelance', class: 'md-half md-exp' },
					{ text: '2014', class: 'md-third md-exp' },
					{ text: 'Present', class: 'md-third' }
				]
			};

			this.contacts = {
				heading: 'Contacts',
				inputs: [
					{ label: 'E-mail', text: 'mr.tsybran@gmail.com', class: 'md-full' }, 
					{ label: 'Phone', text: '+380 (730) 347607', class: 'md-full' }, 
					{ label: 'Location', text: 'Ukraine', class: 'md-half' }, 
					{ text: 'Lviv', class: 'md-half' }, 
					{ label: 'Skype', text: 'kerka121', class: 'md-half md-skype' }
				]
			};

			$scope.inputs = this[$rootScope.curMenu].inputs;
			$scope.heading = this[$rootScope.curMenu].heading;

			if($rootScope.curMenu == 'contacts'){
				$scope.infClass = 'contacts_card';
			} else {
				$scope.infClass = '';
			}
	  	});

	  	Skype.ui({
	        'name': 'call',
	        'element': 'skype_button',
	        'participants': ['kerka121']
        });
	};

	app.controller('GeneralCtrl', GeneralCtrl);

}());