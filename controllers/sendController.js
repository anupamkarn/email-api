var nodemailer = require('nodemailer');

var config = require('../config/config');

module.exports = function(req, res, next) {
    console.log('in sendController.js');
    
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount(function () {
    // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            host: config.mail.smtp_host,
            port: config.mail.smtp_port,
            secure: config.mail.options.secure, // true for 465, false for other ports
            auth: {
                user: config.mail.options.auth.user, // generated ethereal user
                pass: config.mail.options.auth.pass // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        var mailOptions = {
            from: '"' + req.body.name + '" <' + req.body.email + '>', // sender address
            to: 'hiteshnayak305@gmail.com', // list of receivers
            subject: 'From Portfolio', // Subject line
            text: req.body.message, // plain text body
            html: '<b>' + req.body.message + '</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error) {
            if (error) {
                res.status(200).json({"message":"error"});            
                return console.log(error);
            }
        });
    });

    res.status(200).json({"message":"success"});
};
