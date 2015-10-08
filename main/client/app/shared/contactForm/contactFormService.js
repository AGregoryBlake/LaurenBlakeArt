app.service('contactFormService', ['$resource', function($resource) {
	var contactForm = {
			fname: "",
			lname: "",
			email: "",
			subject: "",
			message: "",
			error: "",
			success: false,
			send: function() {
				if(contactForm.isValid()) {
					contactForm.error = "";
					var Email = $resource('/sendmail');
					Email.save(contactForm, function() {
						contactForm.success = true;
					}, function(error){
						console.log(error);
					});
				} else {
					contactForm.error = contactForm.getValidationErrors();
				}
			},
			isValid: function() {
				if(contactForm.fname === "" || contactForm.lname === "" || contactForm.email === "" || contactForm.subject === "" || contactForm.message === "") {
					return false;
				}
				return true;
			},
			getValidationErrors: function() {
				return "Please provide a valid name, email, subject, and message.";
			}
	};
	return {
		getContactForm: function(subject) {
			contactForm.subject = subject;
			return contactForm;
		}
	};
}]);