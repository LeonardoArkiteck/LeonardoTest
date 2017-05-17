angular.module("appModule", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				controller: "analytics",
				templateUrl: "templates/analytics.html"
			})
			.when("#news", {
				controller: "news",
				templateUrl: "templates/news.html"
			})
			.otherwise("/")
	})