var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    response.send('Hello <b>Keshee</b>!');
});

app.get('/hbm', function(request, response) {
    response.send('Here is mom birthday page');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});
