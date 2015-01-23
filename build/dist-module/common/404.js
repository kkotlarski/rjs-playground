define([], function(){
	console.error('this file shouldn\'t be included');

	return function(){
		console.log('404');
	};
});