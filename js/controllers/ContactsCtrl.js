(function() {

	var app = angular.module('mrTsybranCV');
  
	var ContactsCtrl = function($timeout, $scope){

    	Skype.ui({
	         "name": "call",
	         "element": "skype_button",
	         "participants": ["kerka121"],
	         "imageSize": 32
	         });
    	$timeout($('#skype_button img').attr('src', '../images/bg_patt.png'),2000);
    	
    	$('form').on('submit', function(e){
    		e.preventDefault();
    		formSubmit();
    	});

    	var formSubmit = function(){
    		var formData = {
    			Name: $scope.interviewer.name,
    			Company: $scope.interviewer.company,
    			Date: $scope.interviewer.date,
    			Email: $scope.interviewer.email,
    			Offer: $scope.interviewer.offer
    		};

    		$.ajax({
    			type: 'POST',
    			url: 'https://script.google.com/macros/s/AKfycbyUI_6bFRqz1j6HTdO7ZabjITJ0BuToQnfMhFeMV09oGdKmFSzk/exec',
    			data: formData,
    			success: function(){
    				$('#send_form')[0].reset();
    				$('#send_form md-input-container')
    					.removeClass('md-input-has-value');
    			}
    		});
    	}
    	
    };

	app.controller('ContactsCtrl', ContactsCtrl);
	
})();