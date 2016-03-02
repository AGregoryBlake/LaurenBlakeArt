app.controller('HomeController', ['$scope', '$timeout', 'imageService', function($scope, $timeout, imageService) {
    $scope.galleries = [];

    var buildSamples = function() {
	var conceptArtSamples = imageService.getImagesByGallery("Concept Art");
	var illustrationSamples = imageService.getImagesByGallery("Illustration");
	var fineArtSamples = imageService.getImagesByGallery("Fine Art");
    
	conceptArtSamples = conceptArtSamples.splice(conceptArtSamples.length - 2, 2);
	illustrationSamples = illustrationSamples.splice(illustrationSamples.length - 2, 2);
	fineArtSamples = fineArtSamples.splice(fineArtSamples.length - 1, 1);

	conceptArt.gallerySamples = conceptArtSamples;
	illustration.gallerySamples = illustrationSamples;
	fineArt.gallerySamples = fineArtSamples;

    };
    
    var conceptArt = {};
    var illustration = {};
    var fineArt = {};
    
    conceptArt.galleryName = "Concept Art";
    illustration.galleryName = "Illustration";
    fineArt.galleryName = "Fine Art";
    
    conceptArt.galleryUrl = "#/gallery/concept-art";
    illustration.galleryUrl = "#/gallery/illustration";
    fineArt.galleryUrl = "#/gallery/fine-art";
    
    $scope.galleries.push(conceptArt);
    $scope.galleries.push(illustration);
    $scope.galleries.push(fineArt);

    buildSamples();
    if(!imageService.areImagesReady()) {
	$timeout(buildSamples, 100);
    }

}]);
