var app = require('../app');
var nodemailer = require('nodemailer');

// send mail with defined transport object
app.post('/sendmail', function (req, res, next) {
	if(req.body.length >= 1e6) {
		request.connection.destroy();
		return;
	}

	//create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'greg@gregoryblake.net',
	        pass: ''
	    }
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {};
	mailOptions.from = body.firstName + body.lastName + " <" + body.email + ">";
	mailOptions.sender = "mailman@laurenblakeart.com";
	mailOptions.to = "lauren@laurenblakeart.com";
	mailOptions.subject = body.subject;
	mailOptions.text = body.text;
	
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
});