var app = require('../app');

app.get('/test', function (req, res, next) {
	  res.write("test");
	  res.end();
});