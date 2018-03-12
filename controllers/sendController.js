var config = require('../config/config');

module.exports = function(req, res, next) {
    console.log('in sendController.js');
    
    next();
};
