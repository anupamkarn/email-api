var search = require('./send');

module.exports = function(app) {

    console.log('in routes.js');

    //send mail
    app.use('/send', send);

    app.use('/',function(req,res,next){
        res.status(200).json({"message":"use /send  to send mail"});
    });
}
