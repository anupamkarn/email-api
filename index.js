var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(function(req, res, next) //CORs request handle, coss origin resourse sharing
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
	res.setHeader('Access-Control-Allow-Headers', 'content-type');
	next();
});
//routes
require('./routes/routes')(app);

app.listen(PORT,function(){
    console.log('server started on port = ' + PORT +'...');
});
