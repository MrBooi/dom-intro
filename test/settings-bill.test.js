describe('The Setting bill function', function() {
  it('should display "1.50" has total of sms if user entered "0.75" in the settings sms cost field then pressed update settings button'+
  '  after pressed radio button two times, it must display "0.00" has total of calls and display "1.50" overrall total of bill ' , function() {
    var update = updateSetting();
    update.smscost(0.75);
    update.calc("sms");
    update.calc("sms");
    assert.equal(update.smsTotal(), 1.50);
    assert.equal(update.callTotal(), 0.00);
    assert.equal(update.total(), 1.50);
  });

  it('should display "2.00" has total of sms if user entered "2.00" in the settings sms cost field and also must display "3.00" in the call cost  field  when the update settings button is pressed'+
  ', it must display "2.00" has total of sms if radio of sms is pressed once and display "3.00" has total of call if radio of call is pressed once'+
   ' should display "5.00" has the overrall bill total when the user entered add button', function() {
    var update = updateSetting();
    update.smscost(2.00);
    update.callcost(3.00);
    update.calc("sms");
    update.calc("call");
    assert.equal(update.smsTotal(), 2.00);
    assert.equal(update.callTotal(), 3.00);
    assert.equal(update.total(), 5.00);
  });

  it('should display "2.00" in the settings sms cost field and also must display "3.00" in the call cost  field  when the update settings button is pressed'+
  ', it must display "2.00" has total of sms if radio of sms is pressed once and display "3.00" has total of call if radio of call is pressed once'+
   ' should display "5.00" has the overrall bill total when the user entered add button', function() {
    var update = updateSetting();
    update.smscost(2.00);
    update.callcost(3.00);
    update.calc("sms");
    update.calc("call");
    assert.equal(update.smsTotal(), 2.00);
    assert.equal(update.callTotal(), 3.00);
    assert.equal(update.total(), 5.00);
  });



});
