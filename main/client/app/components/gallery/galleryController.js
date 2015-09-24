app.controller('GalleryController', ['$scope', '$routeParams', 'galleryService', function($scope, $routeParams, galleryService) {
	$scope.photoClicked = {};
	$scope.overlayShowing = false;
	  
	$scope.displayOverlay = function(image) {
		$scope.photoClicked = image;
		$scope.overlayShowing = true;
	};
	$scope.hideOverlay = function() {
		$scope.photoClicked = {};
		$scope.overlayShowing = false;
	};
	$scope.pressEsc = function(e){
		var ESC_KEY = 27;
		if (e.which === ESC_KEY){
			$scope.hideOverlay();
		}
	}

	$scope.gallery = galleryService.assignGallery($routeParams.id);
}]);