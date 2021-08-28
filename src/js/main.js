(function(window){

	var pixelTheme = function () {

        /*
        * validate user input for the contact information
        * prevent submitting function if there are empty fiels 
        * prevent submitting function if there are valid character (only a-z A-Z 0-9 allowed)
        * 
        */
        var submitContact = function(){
            $('.submit').click(function(event){
                var shouldSubmit  = true;
                var inputs= $('.contact-info');
                
                for(var i = 0; i<inputs.length ; i++){
                    value = inputs[i].value;
                    if(value.trim()==""){
                        let missingFiled = $('.contact-us-form label:eq('+i+')').text();
                        $('.errormessage:eq('+i+')').text( "Please fill in "+missingFiled);
                        shouldSubmit = false;
                    }
                    else if(!validString(value)){
                        let invalid = $('.contact-us-form label:eq('+i+')').text();
                        $('.errormessage:eq('+i+')').text( "Invalid text in "+invalid);
                        shouldSubmit = false;
                    }
                    else {
                        $('.errormessage:eq('+i+')').text("");
                    }
                }

                if(!shouldSubmit){
                    event.preventDefault();
                }
            });
        };
        var validString = function(str){
            return /^[a-zA-Z0-9_-\s]+$/.test(str);
        };
		this.submitContact = submitContact;
	};

	/* -------------------------------------------------------------------------- */

	$(document).ready(function () {
		pixelTheme = new pixelTheme();
		pixelTheme.submitContact();
	});
	
	$(window).resize(function () {
        //when resize
	});    

})(window);