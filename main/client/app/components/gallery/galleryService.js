app.factory('galleryService', ['imageService', function(imageService) {
    var findGallery = function(galleryName) {
	var gallery = {};
	gallery.galleryName = galleryName;
	gallery.images = imageService.getImagesByGallery(galleryName);
	return gallery;
    };
    return {
	isGalleryReady: function() {
	    imageService.areImagesReady();
	},
	assignGallery: function(id){
	    if(id == 'concept-art') {
		return findGallery("Concept Art");
	    } else if(id == 'illustration'){
		return findGallery("Illustration");
	    } else if (id == 'fine-art') {
		return findGallery("Fine Art");
	    } else {
		return findGallery("Error: Gallery Not Found");
	    }
	}
    }
}]);
