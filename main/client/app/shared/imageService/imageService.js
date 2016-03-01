app.service('imageService', ['$resource', function($resource) {
    var Images = $resource('/images');
    var images = Images.query();
    
    return {
	getAllImages: function() {
	    return images;
	},
	getImagesByGallery: function(gallery) {
	    return images.filter(function(image) {
		return image.gallery === gallery;
	    });
	},
	getImagesForSale: function() {
	    return images.filter(function(image) {
		return image.forSale;
	    });
	}
    };
}]);
