const port = 8080;

const server = require('./server');
server.listen(port, () => {
  console.log(`server listening to port 8080`);
});
