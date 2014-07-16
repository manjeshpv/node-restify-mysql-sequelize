// Getting all the available models in ./models
// Currently Todo Model is available
var db = require('../models');

// GET: /api/todos
exports.get = function(req, res, next){
   db.Todo.findAll().success(function(todos){
		res.send(todos);
		return next();
   });
   
};

// POST: /api/todos
exports.post = function(req, res, next){	
	db.Todo.create({text:req.body.text}).success(function(todo){
		db.Todo.findAll().success(function(todos){
			res.send(todos);
			return next();
	   });
	});
	
   return next();
};

// D: /api/todos
exports.del = function(req, res, next){
	db.Todo.destroy({id:req.params.id}).success(function(affectedRows){
		console.log(affectedRows);
		
		db.Todo.findAll().success(function(todos){
			res.send(todos);
			return next();
	   });
	});	
		
	
	
};



