app.controller('GalleryController', ['$scope', '$routeParams', 'galleryService', function($scope, $routeParams, galleryService) {
	$scope.photoClicked = {};
	$scope.overlayShowing = false;
	  
	$scope.displayOverlay = function(index) {
		$scope.photoClicked = $scope.gallery.images[index];
		$scope.index = index;
		$scope.overlayShowing = true;
	};
	$scope.hideOverlay = function() {
		$scope.photoClicked = {};
		$scope.overlayShowing = false;
	};
	
	$scope.pressEsc = function(e){
		var ESC_KEY = 27;
		var LEFT_KEY = 37;
		var RIGHT_KEY = 39;
		if (e.which === ESC_KEY){
			$scope.hideOverlay();
		} else if (e.which === LEFT_KEY) {
			if ($scope.index === 0){
				$scope.index = $scope.gallery.images.length - 1;
			} else {
				$scope.index--;
			}
			$scope.photoClicked = $scope.gallery.images[$scope.index];
		} else if (e.which === RIGHT_KEY) {
			if ($scope.index === $scope.gallery.images.length - 1){
				$scope.index = 0;
			} else {
				$scope.index++;
			}
			$scope.photoClicked = $scope.gallery.images[$scope.index];
		}
	}

	$scope.gallery = galleryService.assignGallery($routeParams.id);
}]);