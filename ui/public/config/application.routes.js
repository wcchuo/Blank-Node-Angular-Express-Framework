'use strict';

// Set up routing
angular.module('myApp').config(['$routeProvider',
	function($routeProvider) {
 	//Application routing definition
 	$routeProvider.
 		when('/', {
			templateUrl: 'views/index.html',
			controller: 'IndexController'
		}).
 		when('/Page-1', {
			templateUrl: 'views/page1.html',
			controller: 'IndexController'
		}).
 		when('/Page-2', {
			templateUrl: 'views/page2.html',
			controller: 'IndexController'
		}).
 		when('/Page-3', {
			templateUrl: 'views/page3.html',
			controller: 'IndexController'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);
