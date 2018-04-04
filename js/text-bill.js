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

function TextBillTotal() {
  var billtext = {
    sms: 0,
    call: 0,
    //totalbill:0
  };

  function calcBill(typeofBill) {
    if (typeofBill === 'sms') {
      // it will add 0.75 only if typeofBill equal to sms
      billtext['sms'] += 0.75;
    } else if (typeofBill === 'call') {
      // it will add 2.75 only if typeofBill equal to call
      billtext['call'] += 2.75;
    }
    if (typeofBill === '') {
      // if typeofBill equal to blank the will add zero to both sms and call
      billtext['sms'] += 0;
      billtext['call'] += 0;
    }
  }



  var CallTotal = function(){

  return  billtext['call'].toFixed(2);
  }

  var smsTotal = function(){

    return billtext['sms'].toFixed(2);
  }

var  billTotal = function(){

   return (billtext['sms']+billtext['call']).toFixed(2);
}

  var checkbill = function(typeofBill) {
    return {
      sms: billtext['sms'],
      call: billtext['call']
    }


  }

  return {
    calc: calcBill,
    check: checkbill,
    total : billTotal,
  smstotal :smsTotal,
  calltotal:CallTotal

  }
}





var textbill = TextBillTotal();



// DOM function that will be displaying the output
var textbillClicked = function() {

  var billTypeEntered = billTypeText.value.trim();
  // entered string into calcbill function
  textbill.calc(billTypeEntered);
  //passing enteredstring
  var totalbill = textbill.check(billTypeEntered);
  callsTotalElem.innerHTML = (totalbill['call']).toFixed(2);
  smsTotalElem.innerHTML = (totalbill['sms']).toFixed(2);
  var checkTotal = (totalbill['call'] + totalbill['sms']);
  totalCostElem.innerHTML = checkTotal.toFixed(2);
  if (checkTotal >= 30 && checkTotal < 50) {
    //  adding the danger class will make the text red
    totalCostElem.classList.add("warning");
  } else if (checkTotal >= 50) {
    totalCostElem.classList.add("danger");
  }
}


addToBillBtn.addEventListener('click', textbillClicked);
