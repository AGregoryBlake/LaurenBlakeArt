app.factory('galleryService', [function() {
	galleryService = {};

	var conceptArt = {
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
	var illustration = {
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
	var fineArt = {
			galleryName: "Fine Art",
			images: [
			         {
			        	 "title": "Hand and Ball",
			        	 "thumbnailUrl": "/assets/img/art/fineart/handball.jpg",
			        	 "fullSizeUrl": "/assets/img/art/fineart/handball.jpg",
			        	 "medium": "Charcoal",
			        	 "year": "2015"
			         },
			         {
			        	 "title": "Richard",
			        	 "thumbnailUrl": "/assets/img/art/fineart/richard.jpg",
			        	 "fullSizeUrl": "/assets/img/art/fineart/richard.jpg",
			        	 "medium": "Charcoal",
			        	 "year": "2015"
			         },
			         {
			        	 "title": "Chelsea",
			        	 "thumbnailUrl": "/assets/img/art/fineart/chelsea.jpg",
			        	 "fullSizeUrl": "/assets/img/art/fineart/chelsea.jpg",
			        	 "medium": "Charcoal",
			        	 "year": "2015"
			         },
			         {
			        	 "title": "Serenade",
			        	 "thumbnailUrl": "/assets/img/art/fineart/serenade.jpg",
			        	 "fullSizeUrl": "/assets/img/art/fineart/serenade.jpg",
			        	 "medium": "Charcoal",
			        	 "year": "2015"
			         }
			        ]
	};
	var error = {
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