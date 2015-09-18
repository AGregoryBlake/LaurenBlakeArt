app.controller('GalleryController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
  $scope.photoClicked = {};
  $scope.overlayShowing = false;
  $scope.displayOverlay = function(photo) {
	  $scope.overlayShowing = true;
	  $scope.photoClicked = photo;
  };
  $scope.hideOverlay = function() {
	  $scope.overlayShowing = false;
	  $scope.photoClicked = {};
  };
}]);