var express = require("express");
var app = express();
app.use(express.logger());


app.use('/script/', express.static(__dirname + '/script'));
app.use('/style/', express.static(__dirname + '/style'));
app.use('/images/', express.static(__dirname + '/images'));
app.get('/', function(request, response) {
    response.sendfile('./index.html');
});

// Happy Birthday, Mom 2015
//
app.use('/hbm2015/', express.static(__dirname + '/hbm2015'));
app.get(/\/hbm2015$/, function(request, response) {
    response.redirect('/hbm2015/');
});

// Happy Birthday, Vika 2015
//
app.use('/hbv2015/', express.static(__dirname + '/hbv2015'));
app.get(/\/hbv2015$/, function(request, response) {
    response.redirect('/hbv2015/');
});

// Banco Popular claim
//
app.use('/bp/', express.static(__dirname + '/bp'));
app.get(/\/bp$/, function(request, response) {
    response.redirect('/bp/');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});
