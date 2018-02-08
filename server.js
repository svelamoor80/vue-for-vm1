var jsonServer = require('json-server');
var server = jsonServer.create();
var middlewares = jsonServer.defaults();
var router = jsonServer.router('db.json');
console.log("inside server");
server.use(middlewares);
server.use(router);
server.listen(3002);
