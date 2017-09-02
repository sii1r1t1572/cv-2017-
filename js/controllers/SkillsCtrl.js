(function() {

	var app = angular.module('mrTsybranCV');
  
	var SkillsCtrl = function($scope){

		$scope.frontend = [{
				title: 'HTML/HTML5',
				used: true
			}, {
				title: 'CSS/CSS3',
				used: true
			}, {
				title: 'Haml'
			}, {
				title: 'Javascript',
				used: true
			}, {
				title: 'Jquery',
				used: true
			}, {
				title: 'AngularJs',
				used: true
			}, {
				title: 'Backbone'
			}, {
				title: 'Underscore'
			}, {
				title: 'AJAX'
			}];

		$scope.backend = [{
				title: 'PHP'
			}, {
				title: 'Ruby on Rails'
			}, {
				title: 'Python'
			}, {
				title: 'NodeJs'
			}];

		$scope.graphics = [{
				title: 'Material Design',
				used: true
			}, {
				title: 'Angular Material',
				used: true
			}, {
				title: 'Bootstrap'
			}, {
				title: 'Photoshop',
				used: true
			}, {
				title: 'Adobe Illustrator'
			}, {
				title: 'SVG',
				used: true
			}];

		$scope.cms = [{
				title: 'WordPress'
			}, {
				title: 'OpenCart'
			}];

		$scope.pm = [{
				title: 'Scrum'
			}, {
				title: 'Agile'
			}, {
				title: 'Jira'
			}, {
				title: 'Trello',
				used: true
			}];

		$scope.scm = [{
				title: 'Git',
				used: true
			}, {
				title: 'Bitbucket'
			}];

		$scope.os = [{
				title: 'Linux',
				used: true
			}, {
				title: 'Windows',
				used: true
			}, {
				title: 'Mac Os',
				used: true
			}];
    
	};

	app.controller('SkillsCtrl', SkillsCtrl);
	
})();