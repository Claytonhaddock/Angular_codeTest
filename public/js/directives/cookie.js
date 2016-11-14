cookieApp.directive('cookie', function() {
	return {
		restrict: 'E',
		scope: {  info: '=' },
		templateUrl: 'js/directives/cookie.html'
	};
})