app.service('contactFormService', ['$resource', function($resource) {
	var contactForm = {
			fname: "",
			lname: "",
			email: "",
			subject: "",
			message: ""
	};
	return {
		getContactForm: function(subject) {
			contactForm.subject = subject;
			return contactForm;
		},
		send: function(contact) {
			var Email = $resource('/sendmail');
			Email.save(contact, function() {
				// Stuff after POST success happens here.
			}, function(error){
				console.log(error);
			});
		}
	};
}]);