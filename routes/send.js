var express = require('express');
var router = express.Router();

var sendController = require('../controllers/sendController');
var auth = require('../middlewares/auth');

console.log('in send.js');

router.get('/', function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Methods', 'GET,POST');
    	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.status(200).json({"message":"invalid-request"});
});

router.post('/', auth, sendController);

module.exports = router;
