var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');

var paths = {
  static: 'src',
};

var app = connect();

var serve = serveStatic(paths.static, {
  index: ['index.html'],
});
app.use('/app', serve);

// create node.js http server and listen on port
http.createServer(app).listen(8080);
