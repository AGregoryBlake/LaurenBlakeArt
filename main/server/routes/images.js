var app = require('../app');

var images = [
    {
	"title" : "Neptune",
	"thumbnailUrl" : "/assets/img/art/NeptuneThumbnail.jpg",
	"fullSizeUrl" : "/assets/img/art/NeptuneFullSize.jpg",
	"medium" : "Digital Painting",
	"year" : "2014",
	"gallery" : "Concept Art",
	"forSale" : false
    },
    {
	"title" : "Barn",
	"thumbnailUrl" : "/assets/img/art/BarnThumbnail.jpg",
	"fullSizeUrl" : "/assets/img/art/BarnFullSize.jpg",
	"medium" : "Digital Painting",
	"year" : "2010",
	"gallery" : "Illustration",
	"forSale" : false
    },
    {
	"title" : "Daytime Quebec",
	"thumbnailUrl" : "/assets/img/art/DaytimeQuebecThumbnail.jpg",
	"fullSizeUrl" : "/assets/img/art/DaytimeQuebecFullSize.jpg",
	"medium" : "Digital Painting",
	"year" : "2010",
	"gallery" : "Illustration",
	"forSale" : false
    },
    {
	"title" : "Nightly Quebec",
	"thumbnailUrl" : "/assets/img/art/NightlyQuebecThumbnail.jpg",
	"fullSizeUrl" : "/assets/img/art/NightlyQuebecFullSize.jpg",
	"medium" : "Digital Painting",
	"year" : "2010",
	"gallery" : "Illustration",
	"forSale" : false
    },
    {
	"title" : "Storm Clouds",
	"thumbnailUrl" : "/assets/img/art/StormCloudsFullSize.jpg",
	"fullSizeUrl" : "/assets/img/art/StormCloudsFullSize.jpg",
	"medium" : "Digital Painting",
	"year" : "2010",
	"gallery" : "Illustration",
	"forSale" : false
    },
    {
	"title" : "Jingwei",
	"thumbnailUrl" : "/assets/img/art/JingweiThumbnail.jpg",
	"fullSizeUrl" : "/assets/img/art/JingweiFullSize.jpg",
	"medium" : "Digital Painting",
	"year" : "2010",
	"gallery" : "Illustration",
	"forSale" : false
    },
    {
	"title" : "Tiger Lily",
	"thumbnailUrl" : "https://s3-us-west-2.amazonaws.com/lauren-blake-art/TigerLilyThumbnail.jpg",
	"fullSizeUrl" : "https://s3-us-west-2.amazonaws.com/lauren-blake-art/TigerLilyFullSize.jpg",
	"medium" : "Digital Painting",
	"year" : "2010",
	"gallery" : "Illustration",
	"forSale" : false
    },
    {
	"title" : "Neptune",
	"thumbnailUrl" : "/assets/img/art/NeptuneThumbnail.jpg",
	"fullSizeUrl" : "/assets/img/art/NeptuneFullSize.jpg",
	"medium" : "Digital Painting",
	"year" : "2014",
	"gallery" : "Illustration",
	"forSale" : false
    },
    {
	"title" : "Hand and Ball",
	"thumbnailUrl" : "/assets/img/art/fineart/handball.jpg",
	"fullSizeUrl" : "/assets/img/art/fineart/handball.jpg",
	"medium" : "Charcoal",
	"year" : "2015",
	"gallery" : "Fine Art",
	"forSale" : false
    },
    {
	"title" : "Richard",
	"thumbnailUrl" : "/assets/img/art/fineart/richard.jpg",
	"fullSizeUrl" : "/assets/img/art/fineart/richard.jpg",
	"medium" : "Charcoal",
	"year" : "2015",
	"gallery" : "Fine Art",
	"forSale" : true
    },
    {
	"title" : "Chelsea",
	"thumbnailUrl" : "/assets/img/art/fineart/chelsea.jpg",
	"fullSizeUrl" : "/assets/img/art/fineart/chelsea.jpg",
	"medium" : "Charcoal",
	"year" : "2015",
	"gallery" : "Fine Art",
	"forSale" : true,
	"price" : 300
    },
    {
	"title" : "Serenade",
	"thumbnailUrl" : "/assets/img/art/fineart/serenade.jpg",
	"fullSizeUrl" : "/assets/img/art/fineart/serenade.jpg",
	"medium" : "Charcoal",
	"year" : "2015",
	"gallery" : "Fine Art",
	"forSale" : true,
	"price" : 300
    }
];

app.get('/images', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(images));
});

app.post('/images', function (req, res, next) {
    res.status(200).send('Success!');
});

app.get('/images/:id', function(req, res, next) {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    res.send(images[id]);
});

app.put('/images/:id', function(req, res, next) {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    res.send(images[id]);
});

app.delete('/images/:id', function(req, res, next) {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    res.send(images[id]);
});
