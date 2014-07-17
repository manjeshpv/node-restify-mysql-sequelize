// Please check ./models/index.js for MySQL DB Connections
// Includes
var restify = require('restify');
var db = require('./models');

// Setting Parameters to server
var server = restify.createServer({
  name: 'Todo',
});

// Initiating All Routes avaliable in ./route folder
var routes =require('./routes');

// Using bodyparser for POST Request Parameters
server.use(restify.bodyParser());

// Routes to Function Assaignment
server.get('/api/todo/:id', routes.todo.getOne);
server.get('/api/todos', routes.todo.get);
server.post('/api/todos', routes.todo.post);
server.del('/api/todos/:id', routes.todo.del);

// Serving Public Folder for angular JS
server.get(/\/?.*/, restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));

 // Creating Tables or Initiating Connections
 db
.sequelize
.sync({ force: false})
.complete(function(err) {
  if (err) {
    throw err;
  } else {
    // Listening in 8080 Port
	server.listen(8080);
	console.log("Server started: http://localhost:8080/");
	
  }
});
