app.controller('ProductController', ['$scope', 'storeService', '$routeParams', function($scope, storeService, $routeParams) {
	$scope.product = storeService.getProducts()[$routeParams.id];
}]);