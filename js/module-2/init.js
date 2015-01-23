define(['module-2/dep'], function(dep){
	return function(){
		console.log('module 2');
		dep();
	};
});