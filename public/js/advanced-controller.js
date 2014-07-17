var toDoAdvancedControllers = angular.module('toDoAdvancedControllers',[]);

toDoAdvancedControllers.controller('advancedListController',['$scope','$http',function($scope,$http){

	$http.get('/api/todos').success(function(data){
		$scope.todos = data;
	}).error(function(data){
		console.log("Error " + data);
	});

}]);