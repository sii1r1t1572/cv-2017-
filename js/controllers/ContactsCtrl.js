(function() {

	var app = angular.module('mrTsybranCV');
  
	var ContactsCtrl = function(){
    	Skype.ui({
	         "name": "call",
	         "element": "skype_button",
	         "participants": ["kerka121"],
	         "imageSize": 32
	         });
	};

	app.controller('ContactsCtrl', ContactsCtrl);
	
})();