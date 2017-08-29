(function() {

	var app = angular.module('mrTsybranCV');
  
	var ContactsCtrl = function($timeout){
    	Skype.ui({
	         "name": "call",
	         "element": "skype_button",
	         "participants": ["kerka121"],
	         "imageSize": 32
	         });
    	$timeout($('#skype_button img').attr('src', '../images/bg_patt.png'),2000);
	};

	app.controller('ContactsCtrl', ContactsCtrl);
	
})();