define(['common2'], function(common){
	return function(){
		console.log('module 2 dep');
		common();
	};
});