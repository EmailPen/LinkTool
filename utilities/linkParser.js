var csv = require('csv');
var _ = require('lodash');

var linkParser = function (data, callback) {
  var links = [];
  csv.parse(data, {delimiter: '\t'}, function (err, data) {
    callback(data);
  })
  return false;
}

module.exports = linkParser;