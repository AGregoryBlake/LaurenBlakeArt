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

	$scope.gallery = galleryService.assignGallery($routeParams.id);
}]);