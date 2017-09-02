(function() {

	var app = angular.module('mrTsybranCV');
  
	var ContactsCtrl = function($timeout, $scope){

    	// $timeout($('#skype_button img').attr('src', '../images/bg_patt.png'),2000);
    	// $scope.interviewer = {
     //        Name: '',
     //        Company: '',
     //        Date: '',
     //        Email: '',
     //        Offer: ''
     //    };
        var tommorow = new Date();
        tommorow.setDate(tommorow.getDate() + 1);
        $scope.interviewer = {
            date: tommorow
        };
        $scope.sendingForm = false;

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
                    $scope.$apply(function() {
                      $scope.sendingForm = false;
                    });
                }
            });
        };

    	$('form').on('submit', function(e){
    		e.preventDefault();
            $scope.sendingForm = true;
    		formSubmit();
    	});
    	
    };

	app.controller('ContactsCtrl', ContactsCtrl);
	
})();