module.exports = function(req, res, next) {
    console.log('in auth.js');
    var key = req.body.key;
    if(key == 'alohamora') {
        next();
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.status(200).json({"message":"invalid-user"});
    }
};
