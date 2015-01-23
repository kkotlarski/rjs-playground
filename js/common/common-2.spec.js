define(['common2'], function(common2){
	describe('common2', function(){
		beforeEach(function(){
			spyOn(console, 'log');
		});

		it('should call console.log', function(){
			common2();
			expect(console.log).toHaveBeenCalledWith('common 2');
		});
	});
});