var toDoControllers =  angular.module('toDoControllers',[]);

toDoControllers.controller('listController',['$scope','$http',function($scope,$http){
	$scope.formData = {};
	//$scope.todos = data;
	// when landing on the page, get all todos and show them
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
		})
		.error(function(data) {
			console.log('Errorxx: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}]) ;

toDoControllers.controller('advancedListController',['$scope','$http',function($scope,$http){

	$http.get('/api/todos').success(function(data){
		$scope.todos = data;
	}).error(function(data){
		console.log("Error " + data);
	});

	// delete a todo after checking it
	$scope.deleteTodo = function(id,text) {
		var ok = confirm("Delete : "+ text + " ?");
		if(ok) {
			$http.delete('/api/todos/' + id)
				.success(function(data) {
					$scope.todos = data;
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
			}
	};

}]);

toDoControllers.controller('advancedDetailController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

	$http.get('/api/todo/'+$routeParams.id).success(function(data){
		//$scope.todo = data[data[]($routeParams.id)];
		$scope.todo = data;
		console.log(data);
	}).error(function(data){
		console.log("Error " + data);
	});

}]);

toDoControllers.controller('advancedCreateController',['$scope','$http',function($scope,$http){

	$scope.formData = {};

	$scope.createTodo = function(){
		$http
		.post('/api/todos',$scope.formData)
		.success(function(data){
			$scope.formData = {}; // clear the form so our user is ready to enter another
			$scope.todo = data;
			console.log(data);
		})
		.error(function(data){
			console.log("Error " + data);
		});
	}
}]);