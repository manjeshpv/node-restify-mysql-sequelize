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

// GET: /api/todo
exports.getOne = function(req, res, next){
   db.Todo.find({where: {id:req.params.id}}).success(function(todos){
		console.log(req.params.id);
		res.send(todos);
		return next();
   });
   
};

// POST: /api/todos
exports.post = function(req, res, next){
	var sql;
	if(req.body.text != ""){
		sql = {text:req.body.text};
	} 
	 if (req.body.details != ""){
		sql = {text:req.body.text,details:req.body.details};
	}	
	db.Todo.create(sql).success(function(todo){
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



