var myApp = angular.module("myApp",['ngRoute']); 


myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'studentcontroller'
		})
		.when('/students', {
			templateUrl:'templates/list.html',
			controller:'studentcontroller'
		})
		.when('/students/create', {
			templateUrl:'templates/add.html',
			controller:'studentcontroller'
		})
		.when('/students/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'studentcontroller'
		})
		.when('/students/:id/show', {
			templateUrl:'templates/show.html',
			controller:'studentcontroller'
		});
});

