var callsTotalTwoElem = document.querySelector('.callTotalTwo');
// get a reference to the smsTotalTwo
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var totalCostTwoElem = document.querySelector('.totalTwo');


// get a reference to the template script tag
// compile the template
var RadioBillTemplate = Handlebars.compile(templateSource);

var RadioDataElem = document.querySelector(".radioBillTotals");

var radiobill = new TextBillTotal();

function radioBillClicked() {
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;
    radiobill.calc(billItemType);

  }
  var RadioTotal = RadioBillTemplate({
    billTotalClass: 'totaltwo ' + radiobill.totalAlert(),
    callTotal: radiobill.callTotal(),
    smsTotal: radiobill.smsTotal(),
    billTotal: radiobill.total()
  });
  RadioDataElem.innerHTML = RadioTotal;

}
radioBillAddBtn.addEventListener('click', radioBillClicked);





document.addEventListener('DOMContentLoaded', function() {
  var RadioTotal = RadioBillTemplate({

    callTotalClass: 'callTotalTwo',
    smsTotalClass: 'smsTotalTwo',
    billTotalClass: 'totalCostTwo',
    callTotal: '0.00',
    smsTotal: '0.00',
    billTotal: '0.00',
  });
  RadioDataElem.innerHTML = RadioTotal;


});
