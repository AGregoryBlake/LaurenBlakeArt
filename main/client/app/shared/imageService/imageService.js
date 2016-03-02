app.service('imageService', ['$resource', '$timeout', function($resource, $timeout) {
    var Images = $resource('/images');
    var images = [];
    var imagesReady = false;
    
    Images.query(function(result) {
	images = result;
	imagesReady = true;
    });
    
    return {
	areImagesReady: function() {
	    return imagesReady;
	},
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
