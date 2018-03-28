describe('The calculateBill function', function(){
    it('should display "0.75" if user entered a string with "sms" only', function(){
         assert.equal(calculateBill('sms'), 0.75);
    });

    it('should display "2.75" if user entered a string with "call" only', function(){

         assert.equal(calculateBill('call'), 2.75);
    });

    it('should display "3,50" if user entered a string with "sms,call"seperated by comma', function(){
         assert.equal(calculateBill('sms,call'), 3.50);
    });

});
