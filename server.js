import connect from 'connect';
import http from 'http';
import serveStatic from 'serve-static';

const app = connect();

const serve = serveStatic('src', {
  index: ['index.html']
});
app.use(serve);

app.listen(8080);
