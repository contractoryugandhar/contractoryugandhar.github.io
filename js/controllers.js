var myApp=angular.module('myApp',[]);

myApp.controller('PortfolioController',function($scope,$http){
	$http.get('model/portfolio.json').success(function(data){
		$scope.portfolio=data;
	});
} );