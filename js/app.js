define(function(require){
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