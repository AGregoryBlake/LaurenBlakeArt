app.factory('storeService', ['imageService', function(imageService) {
	return {
		getProducts: function(){
			return imageService.getImagesForSale();
		}
	}
}]);