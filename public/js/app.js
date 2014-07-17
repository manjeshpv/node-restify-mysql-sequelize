var restifyMysql = angular.module('restifyMysql', [
	'ngRoute',
	'toDoControllers'
	]);

restifyMysql.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/list',{
		templateUrl:'partials/todo.html',
		controller:'listController'
	}).when('/advanced',{
		templateUrl:'partials/list.html',
		controller:'advancedListController'
	}).when('/details/:id',{
		templateUrl:'partials/details.html',
		controller:'advancedDetailController'
	}).when('/create',{
		templateUrl:'partials/create.html',
		controller:'advancedCreateController'
	}).otherwise({
		redirectTo:'/list'
	});

}]);