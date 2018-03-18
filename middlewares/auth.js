module.exports = function(req, res, next) {
    console.log('in auth.js');
    var key = req.body.key;
    if(key == 'alohamora') {
        next();
    } else {
        res.status(200).json({"message":"invalid-user"});
    }
};
