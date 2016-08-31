var express = require('express');
var router = express.Router();
var linkParser = require('../../utilities/linkParser');

router.get('/', function (req, res) {
  res.render('linktool/index', {title: 'Link Tool'});
});

router.post('/selectToDispose', function (req, res) {
  linkParser(req.body.linkInfo, function (data) {
    res.render('linktool/selectToDispose', {title: 'Link Tool - Select the row or column you don\'t want', linkdata: data});
  })
});


module.exports = router;