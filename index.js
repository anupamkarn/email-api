var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//routes
require('./routes/routes')(app);

app.listen(PORT,function(){
    console.log('server started on port = ' + PORT +'...');
});
