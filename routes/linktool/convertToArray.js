/**
 * Created by ychai on 2016/2/16.
 */
var converter = function(req, res, next) {
    res.render('index', { title: 'Express' });
};

module.exports = converter;
