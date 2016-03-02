app.controller('GalleryController', ['$scope', '$routeParams', '$timeout', 'galleryService', function($scope, $routeParams, $timeout, galleryService) {
    $scope.photoClicked = {};
    $scope.overlayShowing = false;

    $scope.gallery = {};
    var getGallery = function() {
	$scope.gallery = galleryService.assignGallery($routeParams.id);
    };
    if($scope.gallery = {}) {
	$timeout(getGallery, 100);
    }
    
    $scope.displayOverlay = function(index) {
	$scope.photoClicked = $scope.gallery.images[index];
	$scope.index = index;
	$scope.overlayShowing = true;
	};
    
    $scope.hideOverlay = function() {
	$scope.photoClicked = {};
	$scope.overlayShowing = false;
    };
	
    $scope.overlayKeyHandler = function(e){
	var ESC_KEY = 27, LEFT_KEY = 37, RIGHT_KEY = 39;
	
	if (e.which === ESC_KEY){
	    $scope.hideOverlay();
	} else if (e.which === LEFT_KEY) {
	    $scope.goLeft();
	} else if (e.which === RIGHT_KEY) {
	    $scope.goRight();
	}
    };
    
    $scope.goLeft = function() {
	$scope.index--;
	normalizeIndex();
    };
    
    $scope.goRight = function() {
	$scope.index++;
	normalizeIndex();
    }
    
    var normalizeIndex = function() {
	$scope.index = ($scope.index + $scope.gallery.images.length) % $scope.gallery.images.length;
	$scope.photoClicked = $scope.gallery.images[$scope.index];
    }
}]);
