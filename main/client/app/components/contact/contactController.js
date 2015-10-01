app.controller('ContactController', ['$scope', '$resource', function($scope, $resource) {
	$scope.contact = {
			fname: "",
			lname: "",
			email: "",
			subject: "",
			message: ""
	};
	$scope.error = {
			fname: false,
			lname: false,
			email: false,
			subject: false,
			message: false,
			submit: false
	};
	
	$scope.send = function(contact) {
		var Email = $resource('/sendmail');
		Email.save($scope.contact, function() {
			// Stuff after POST success happens here.
		});
	};
}]);