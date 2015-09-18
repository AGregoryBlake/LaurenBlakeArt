express = require('express');
var app = module.exports = express.createServer();

require('./routes');

app.configure(function(){
	  app.use(express.static(__dirname + '/../client'));
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(app.router);
	  app.use(express.errorHandler());
});

app.listen(3000, function(){
	  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});