describe('The calculateBill function', function() {
  it('should display "0.75" if user entered a string with "sms" only', function() {
    var billcalulate = billCalculate();
    billcalulate.billcalc("sms");
    assert.equal(billcalulate.totalprice(), 0.75);
  });

  it('should display "2.75" if user entered a string with "call" only', function() {
    var billcalulate = billCalculate();
    billcalulate.billcalc("call");
    assert.equal(billcalulate.totalprice(), 2.75);
  });

  it('should display "3,50" if user entered a string with "sms,call"seperated by comma', function() {
    var billcalulate = billCalculate();
    billcalulate.billcalc('sms,call');
    assert.equal(billcalulate.totalprice(), 3.5);
  });

});
