var cookieApp = angular.module('cookieApp', []);

					
cookieApp.controller('cookieCtrl',["$scope", "$http", function($scope, $http) {

	$http.get('http://usweb.dotomi.com/resources/swfs/cookies.json').success(function(data,err){
		$scope.newData = data;
		$scope.cookieName = '';
		$scope.cookiePrice = '';
		$scope.cookieCat = '';
		$scope.submit = function(){
			var cookie = {
				'name': $scope.cookieName,
				'price': $scope.cookiePrice,
				'category': $scope.cookieCat 
			}
			$scope.newData.push(cookie);
			// $scope.cookieName = '';
			// $scope.cookiePrice = '';
			// $scope.cookieCat = '';
		};
		console.log(data);
	}).error(function(err){
		//alert(err);
	})
}]);

(function() {
	var cors_api_host = 'localhost:8080';
	var cors_api_url = 'http://' + cors_api_host + '/';
	var slice = [].slice;
	var origin = window.location.protocol + '//' + window.location.host;
	var open = XMLHttpRequest.prototype.open;
		XMLHttpRequest.prototype.open = function() {
			var args = slice.call(arguments);
			var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
			if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
				targetOrigin[1] !== cors_api_host) {
				args[1] = cors_api_url + args[1];
		}
			return open.apply(this, args);
	};
})();