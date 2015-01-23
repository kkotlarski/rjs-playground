define('module-1/init',[], function(){
	return function() {
		console.log('module 1');
	};
});
define('app-2',['require'],function(require){
	console.log('App 2');

	return window.App = {
		module1: function() {
			require(['module-1/init'], function(module1){
				module1();
			});
		}
	};
});
require.config({
	baseUrl: 'js',
	paths: {
		common0: 'common/404',
		common1: 'common/common-1',
		common2: 'common/common-2',
	},
	deps: ['app']
});
define("config", function(){});

