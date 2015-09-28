app.controller('ContactController', ['$scope', function($scope) {
	$scope.contact = {
			fname: "",
			lname: "",
			email: "",
			subject: "",
			message: ""
	}
	$scope.error = {
			fname: false,
			lname: false,
			email: false,
			subject: false,
			message: false,
			submit: false
	}
	
	$scope.send = function(contact) {

	}
}]);