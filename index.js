var express = require('express');
var path = require('path');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var linktool = require('./routes/linktool');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { layout: './layouts/index' });
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.redirect('/linktool');
});

app.use('/linktool', linktool);

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port);
});