var send = require('./send');

module.exports = function(app) {

    console.log('in routes.js');

    //send mail
    app.use('/send', send);

    app.use('/',function(req,res,next){
        res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.status(200).json({"message":"use /send  to send mail"});
    });
}
