(function(){
  
  angular
    .module('mrTsybranCV', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'content/views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/education', {
          templateUrl: 'content/views/education.html',
          controller: 'EducationCtrl'
        })
        .when('/skills', {
          templateUrl: 'content/views/skills.html',
          controller: 'SkillsCtrl'
        })
        .when('/contacts', {
          templateUrl: 'content/views/contacts.html',
          controller: 'ContactsCtrl'
        })
        .otherwise({redirectTo:'/'});
  });
  
}());