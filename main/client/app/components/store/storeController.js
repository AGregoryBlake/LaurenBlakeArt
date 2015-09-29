app.controller('StoreController', ['$scope', 'storeService', function($scope, storeService) {
	$scope.products = storeService.getProducts();
}]);