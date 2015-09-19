app.controller('HomeController', ['$scope', function($scope) {
	$scope.galleries = [
	                    {
	                    	"galleryName": "Concept Art",
							"galleryUrl": "#/gallery/concept-art",
							"gallerySamples": [
							                   {
							                	   "url": "/assets/img/art/BarnThumbnail.jpg"
							                   },
							                   {
							                	   "url": "/assets/img/art/NightlyQuebecThumbnail.jpg"
							                   }
							                  ]
	                    },
	                    {
	            			"galleryName": "Illustration",
	            			"galleryUrl": "#/gallery/illustration",
	            			"gallerySamples": [
	            			                   {
	            			                   	"url": "/assets/img/art/BarnThumbnail.jpg"
	            			                   },
	            			                   {
	            			                   	"url": "/assets/img/art/NightlyQuebecThumbnail.jpg"
	            			                   }
	            			                  ]
	                    },
	                    {
	            			"galleryName": "Fine Art",
	            			"galleryUrl": "#/gallery/fine-art",
	            			"gallerySamples": [
	            			                   {
	            			                   	"url": "/assets/img/art/BarnThumbnail.jpg"
	            			                   },
	            			                   {
	            			                   	"url": "/assets/img/art/NightlyQuebecThumbnail.jpg"
	            			                   }
	            			                  ]
	                    }
	                   ];
	
}]);