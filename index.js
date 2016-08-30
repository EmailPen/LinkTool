var express = require('express');
var app = express();
var engines = require('consolidate');

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port);
});