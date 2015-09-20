app.factory('galleryService', [function() {
	galleryService = {};

	conceptArt = {
			galleryName: "Concept Art",
	        images: [
	                 {
	                	 "title": "Neptune",
	                	 "thumbnailUrl": "/assets/img/art/NeptuneThumbnail.jpg",
	                	 "fullSizeUrl": "/assets/img/art/NeptuneFullSize.jpg",
	                	 "medium": "Digital Painting",
	                	 "year": "2014"
	                 }
	                ]
	};
	illustration = {
			galleryName: "Illustration",
			images: [
			         {
			        	 "title": "Barn",
			        	 "thumbnailUrl": "/assets/img/art/BarnThumbnail.jpg",
			        	 "fullSizeUrl": "/assets/img/art/BarnFullSize.jpg",
			        	 "medium": "Digital Painting",
			        	 "year": "2010"
			         },
			         {
			        	 "title": "Daytime Quebec",
			        	 "thumbnailUrl": "/assets/img/art/DaytimeQuebecThumbnail.jpg",
			        	 "fullSizeUrl": "/assets/img/art/DaytimeQuebecFullSize.jpg",
			        	 "medium": "Digital Painting",
			        	 "year": "2010"
			         },
			         {
			        	 "title": "Nightly Quebec",
			        	 "thumbnailUrl": "/assets/img/art/NightlyQuebecThumbnail.jpg",
			        	 "fullSizeUrl": "/assets/img/art/NightlyQuebecFullSize.jpg",
			        	 "medium": "Digital Painting",
			        	 "year": "2010"
			         },
			         {
			        	 "title": "Storm Clouds",
			        	 "thumbnailUrl": "/assets/img/art/StormCloudsFullSize.jpg",
			        	 "fullSizeUrl": "/assets/img/art/StormCloudsFullSize.jpg",
			        	 "medium": "Digital Painting",
			        	 "year": "2010"
			         },
			         {
			        	 "title": "Jingwei",
			        	 "thumbnailUrl": "/assets/img/art/JingweiThumbnail.jpg",
			        	 "fullSizeUrl": "/assets/img/art/JingweiFullSize.jpg",
			        	 "medium": "Digital Painting",
			        	 "year": "2010"
			         },
			         {
			        	 "title": "Tiger Lily",
			        	 "thumbnailUrl": "/assets/img/art/TigerLilyThumbnail.jpg",
			        	 "fullSizeUrl": "/assets/img/art/TigerLilyFullSize.jpg",
			        	 "medium": "Digital Painting",
			        	 "year": "2010"
			         },
			         {
			        	 "title": "Neptune",
			        	 "thumbnailUrl": "/assets/img/art/NeptuneThumbnail.jpg",
			        	 "fullSizeUrl": "/assets/img/art/NeptuneFullSize.jpg",
			        	 "medium": "Digital Painting",
			        	 "year": "2014"
			         }
			        ]
		};
	fineArt = {
			galleryName: "Fine Art",
			images: [
			         {
			        	 "title": "Barn",
			        	 "thumbnailUrl": "/assets/img/art/BarnThumbnail.jpg",
			        	 "fullSizeUrl": "/assets/img/art/BarnFullSize.jpg",
			        	 "medium": "Digital Painting",
			        	 "year": "2010"
			         }
			        ]
	};
	error = {
			galleryName: "Error: Gallery Not Found",
			images: []
	};
	galleryService.assignGallery = function(id){
		if(id == 'concept-art') {
			return conceptArt;
		} else if(id == 'illustration'){
			return illustration;
		} else if (id == 'fine-art') {
			return fineArt;
		} else {
			return error;
		}
	};
	return galleryService;
}]);