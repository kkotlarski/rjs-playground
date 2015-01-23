define('module-2/dep',['common2'], function(common){
	return function(){
		console.log('module 2 dep');
		common();
	};
});
define('module-2/init',['module-2/dep'], function(dep){
	return function(){
		console.log('module 2');
		dep();
	};
});
