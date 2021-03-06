(function(){

  angular
    .module('mrTsybranCV', ['ngRoute', 'ngMaterial', 
                            'ngAnimate', 'ngMessages'])
    .config(function($routeProvider, $locationProvider){
      $locationProvider.hashPrefix();
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          templateUrl: 'content/views/about.html'
        })
        .when('/education', {
          templateUrl: 'content/views/education.html',
          controller: 'EducationCtrl'
        })
        .when('/skills', {
          templateUrl: 'content/views/skills.html',
          controller: 'SkillsCtrl'
        })
        .when('/experience', {
          templateUrl: 'content/views/experience.html'
        })
        .when('/contacts', {
          templateUrl: 'content/views/contacts.html',
          controller: 'ContactsCtrl'
        })
        .otherwise({redirectTo:'/'});
  });

}());