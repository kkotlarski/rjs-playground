define(['app'], function(App){
	describe('app', function(){

		it('module 1', function(){
			expect(App.module1).toEqual(jasmine.any(Function));
		});

		it('module 2', function(){
			expect(App.module2).toEqual(jasmine.any(Function));
		});
	});
});