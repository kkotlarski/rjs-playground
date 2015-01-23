define(function(require){
	console.log('App 2');

	return window.App = {
		module1: function() {
			require(['module-1/init'], function(module1){
				module1();
			});
		}
	};
});