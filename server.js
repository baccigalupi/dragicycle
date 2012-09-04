var buffet = require('buffet')(__dirname + '/site', {});
var port = process.env.PORT || 9000;
var http = require('http');

http.createServer(function (req, res) {

  buffet(req, res, function next () {
    buffet.notFound(req, res);
  });

}).listen(port, function() {
  console.log('static server running on port ' + port);
});
