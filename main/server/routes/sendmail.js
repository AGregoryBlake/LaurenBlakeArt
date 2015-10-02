var app = require('../app');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// send mail with defined transport object
app.post('/sendmail', function (req, res, next) {
	if(req.body.length >= 1e6) {
		req.connection.destroy();
		res.sendStatus(400);
		res.end();
	}
	
	//create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: '',
	        pass: ''
	    }
	});
	
	
	// setup e-mail data with unicode symbols
	var mailOptions = {};
	mailOptions.from = req.body.fname + " " + req.body.lname + " <" + req.body.email + ">";
	mailOptions.sender = req.body.email;
	mailOptions.to = "lauren@laurenblakeart.com";
	mailOptions.subject = req.body.subject;
	mailOptions.text = req.body.text;

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    } else {
	    	console.log('Message sent: ' + info.response);
	    }
	    res.end();
	});
});