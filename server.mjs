import connect from 'connect';
import http from 'http';
import serveStatic from 'serve-static';

const paths = {
  static: 'src',
};

const app = connect();

const serve = serveStatic('src', {
  index: ['index.html']
});
app.use('/app', serve);

// create node.js http server and listen on port
http.createServer(app).listen(8080);
