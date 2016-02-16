/**
 * Created by ychai on 2016/2/16.
 */
var express = require('express');
var router = express.Router();
var converter = require('./convertToArray');

/* GET linktool page. */
router.get('/', function(req, res, next) {
    res.render('linktool/index', { title: 'LinkTool' });
});

/* GET linktool - convert page. */
router.post('/convert', converter);

module.exports = router;
