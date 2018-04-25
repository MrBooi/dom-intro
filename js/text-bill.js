// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector('.billTypeText');
// get a reference of  callTotalOne
var callsTotalElem = document.querySelector('.callTotalOne');
//get a reference of smsTotalOne
var smsTotalElem = document.querySelector('.smsTotalOne');
// gt a reference where the to total will be displayed
var totalCostElem = document.querySelector('.totalOne');
//get a reference to the add button
var addToBillBtn = document.querySelector('.addToBillBtn');

// get a reference to the template script tag
var templateSource = document.querySelector(".billTemplate").innerHTML;
// compile the template
var textBillTemplate = Handlebars.compile(templateSource);
var BillDataElem = document.querySelector(".textBillTotals");

function TextBillTotal() {

  var smsCost = 0;
  var callCost = 0;


  function calcBill(typeofBill) {
    if (typeofBill === 'sms') {
      smsCost += 0.75;
    } else if (typeofBill === 'call') {
      // it will add 2.75 only if typeofBill equal to call
      callCost += 2.75;
    }
  }

  var CallTotal = function() {
    return parseFloat(callCost).toFixed(2);
  }

  var smsTotal = function() {

    return parseFloat(smsCost).toFixed(2);
  }

  var billTotal = function() {

    return parseFloat(callCost + smsCost).toFixed(2);
  }

  function totalCostAlert() {

    if (billTotal() > 30.00 && billTotal() <= 50.00) {
      return "warning";
    } else if (billTotal() > 50.00) {
      return "danger";
    }


  }
  return {
    calc: calcBill,
    smsTotal: smsTotal,
    callTotal: CallTotal,
    total: billTotal,
    totalAlert: totalCostAlert
  }
}


var textbill = TextBillTotal();

// DOM function that will be displaying the output
var textbillClicked = function() {
  var billTypeEntered = billTypeText.value.trim();
  textbill.calc(billTypeEntered);

  var textData = textBillTemplate({
    billTotalClass: 'totalOne ' + textbill.totalAlert(),
    callTotal: textbill.callTotal(),
    smsTotal: textbill.smsTotal(),
    billTotal: textbill.total()
  });
  BillDataElem.innerHTML = textData;
}

addToBillBtn.addEventListener('click', textbillClicked);
document.addEventListener('DOMContentLoaded', function() {

  var textData = textBillTemplate({
    callTotalClass: 'callTotalOne',
    smsTotalClass: 'smsTotalOne',
    billTotalClass: 'totalOne',
    callTotal: '0.00',
    smsTotal: '0.00',
    billTotal: '0.00'
  });
  BillDataElem.innerHTML = textData;
});
