describe('The Radio-bill function', function() {
  it('should display "8.25" has total calls if user clicked call radio button and clicked add three times' +
    'it must display "0.00" if user did not click on sms radio button after it must display "8.25" has ovarall total',
    function() {
      var radiobill = new TextBillTotal();
      radiobill.calc('call');
      radiobill.calc('call');
      radiobill.calc('call');


      assert.equal(radiobill.callTotal(), 8.25);
      assert.equal(radiobill.smsTotal(), 0.00);
      assert.equal(radiobill.total(), 8.25);

    });

  it('should display "2.25" has total calls if user clicked call radio button once and clicked add button, it must display "1.50" if user clicked sms radio button two times and add button' +
    'after it must display "4.25" has a ovarall total',
    function() {
      var radiobill = new TextBillTotal();

      radiobill.calc('call');
      radiobill.calc('sms');
      radiobill.calc('sms');



      assert.equal(radiobill.callTotal(), 2.75);
      assert.equal(radiobill.smsTotal(), 1.50);
      assert.equal(radiobill.total(), 4.25);

    });

  it('should display "5.5" has total calls if user clicked call radio button twice and clicked add button twice, it must display "0.75" if user clicked sms radio button once and add button' +
    'after it must display "6.25" has a ovarall total',
    function() {
      var radiobill = new TextBillTotal();

      radiobill.calc('call');
      radiobill.calc('call');
      radiobill.calc('sms');



      assert.equal(radiobill.callTotal(), 5.5);
      assert.equal(radiobill.smsTotal(), 0.75);
      assert.equal(radiobill.total(), 6.25);

    });

});
