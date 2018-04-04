describe('The text-bill function', function() {
  it('should display "5.5" has a  total of calls if user entered two calls and it must display "0.75" has a total of sms if user entered "sms" also must display' +
    '6.25 has ovarall total of bill  ',
    function() {
      var textbill = TextBillTotal();

      textbill.calc('call');
      textbill.calc('call');
      textbill.calc('sms');



      assert.equal(textbill.calltotal(), 5.5);
      assert.equal(textbill.smstotal(), 0.75);
      assert.equal(textbill.total(), 6.25);

    });


  it('should display "0.00" has a  total of calls if user  did not "call" string and it must display "2.25" has a total of sms if user entered  three "sms" has a string also must display' +
    '"2.25" has ovarall total of bill  ',
    function() {
      var textbill = TextBillTotal();

      textbill.calc('sms');
      textbill.calc('sms');
      textbill.calc('sms');



      assert.equal(textbill.calltotal(), 0.00);
      assert.equal(textbill.smstotal(), 2.25);
      assert.equal(textbill.total(), 2.25);

    });

  it('should display "0.00" has a  total of calls if user  did not "call" string and it must display "0.00" has a total of sms if user did not enter  "sms" has a string also must display' +
    '"0.00" has ovarall total of bill  ',
    function() {
      var textbill = TextBillTotal();

      textbill.calc('');
      textbill.calc('');
      textbill.calc('');



      assert.equal(textbill.calltotal(), 0.00);
      assert.equal(textbill.smstotal(), 0.00);
      assert.equal(textbill.total(), 0.00);

    });

});
