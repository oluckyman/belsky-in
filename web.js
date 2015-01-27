var express = require("express");
var app = express();
app.use(express.logger());


app.use('/script/', express.static(__dirname + '/script'));
app.use('/style/', express.static(__dirname + '/style'));
app.get('/', function(request, response) {
    response.sendfile('./index.html');
});

// Happy Birthday, Mom 2015
//
app.use('/hbm2015/', express.static(__dirname + '/hbm2015'));
app.get(/\/hbm2015$/, function(request, response) {
    response.redirect('/hbm2015/');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});
