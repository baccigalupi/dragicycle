desc('get latest wheel source');
task('wheel', function() {
  var http = require('http');
  var fs = require('fs');
  var request = require('request');

  var base_path = 'http://raw.github.com/baccigalupi/wheel.js/master/dist/';

  var files = ['wheel_light.js', 'wheel_legacy.js','wheel_modern.js'];
  files.forEach(function(file_name) {
    request(base_path + file_name).pipe(fs.createWriteStream('site/' + file_name));
  });
});
