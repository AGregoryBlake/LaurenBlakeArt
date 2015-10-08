app.controller('ContactController', ['$scope', 'contactFormService', function($scope, contactFormService) {
	$scope.contact = contactFormService.getContactForm("");
}]);