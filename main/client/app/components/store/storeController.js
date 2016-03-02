app.controller('StoreController', ['$scope', '$timeout', 'imageService', function($scope, $timeout, imageService) {
    $scope.products = imageService.getImagesForSale();
    $timeout(function() {
	$scope.products = imageService.getImagesForSale();
    }, 100);
}]);
