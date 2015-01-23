define(['common1'], function(common1){
	describe('common1', function(){
		beforeEach(function(){
			spyOn(console, 'log');
		});

		it('should call console.log', function(){
			common1();
			expect(console.log).toHaveBeenCalledWith('common 1');
		});
	});
});