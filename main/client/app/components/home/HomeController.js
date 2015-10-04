app.controller('HomeController', ['$scope', 'imageService', function($scope, imageService) {
	$scope.galleries = [];
	
	var conceptArtSamples = imageService.getImagesByGallery("Concept Art");
	var illustrationSamples = imageService.getImagesByGallery("Illustration");
	var fineArtSamples = imageService.getImagesByGallery("Fine Art");
	
	conceptArtSamples = conceptArtSamples.splice(conceptArtSamples.length - 2, 2);
	illustrationSamples = illustrationSamples.splice(illustrationSamples.length - 2, 2);
	fineArtSamples = fineArtSamples.splice(fineArtSamples.length - 1, 1);
	
	var conceptArt = {};
	var illustration = {};
	var fineArt = {};
	
	conceptArt.galleryName = "Concept Art";
	illustration.galleryName = "Illustration";
	fineArt.galleryName = "Fine Art";
	
	conceptArt.galleryUrl = "#/gallery/concept-art";
	illustration.galleryUrl = "#/gallery/illustration";
	fineArt.galleryUrl = "#/gallery/fine-art";
	
	conceptArt.gallerySamples = conceptArtSamples;
	illustration.gallerySamples = illustrationSamples;
	fineArt.gallerySamples = fineArtSamples;
	
	$scope.galleries.push(conceptArt);
	$scope.galleries.push(illustration);
	$scope.galleries.push(fineArt);
	
}]);