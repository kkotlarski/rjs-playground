define('common1',[], function(){
	return function(){
		console.log('common 1');
	};
});
define('app',['require','common1'],function(require){
	console.log('App');

	require('common1')();

	return window.App = {
		module1: function() {
			require(['module-1/init'], function(module1){
				module1();
			});
		},
		module2: function() {
			require(['module-2/init'], function(module2){
				module2();
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

define('common2',[], function(){
	return function(){
		console.log('common 2');
	};
});
