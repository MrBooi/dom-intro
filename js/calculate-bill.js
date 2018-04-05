//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");


function billCalculate() {
  var priceSms = 0;
  var priceCall = 0;
  var priceTotal = 0;

  function calculateBill(billString) {
    var billoutput = billString.split(",");
    for (var i = 0; i < billoutput.length; i++) {
      var foundBill = billoutput[i].trim();
      if (foundBill === 'sms') {
        priceSms += 0.75;
      } else if (foundBill === 'call') {
        priceCall += 2.75;
      }
    }
    priceTotal = priceSms + priceCall;
    return priceTotal.toFixed(2);
  }

  function totalbill() {
    return priceTotal.toFixed(2);
  }

  var callPrice = function() {
    return priceCall.toFixed(2);
  }

  var smsPrice = function() {
    return priceSms.toFixed(2);
  }

  return {
    billcalc: calculateBill,
    callprice: callPrice,
    smsprice: smsPrice,
    totalprice: totalbill
  }
}
var billcalulate = billCalculate();


function calculateBtnClicked() {
  var billString = billStringElement.value;
  billcalulate.billcalc(billString);
  roundedBillTotal = billcalulate.totalprice();

  billTotalElement.innerHTML = roundedBillTotal.toFixed(2);

  if (roundedBillTotal >= 20.00 && roundedBillTotal < 30.00) {

    billTotalElement.classList.add("warning");

  } else
  if (roundedBillTotal >= 30.00) {
    billTotalElement.classList.add("danger");
  }
}

//link the function to a click event on the calculate button
//calculateBtn.addEventListener('click', calculateBill);
calculateBtn.addEventListener('click', calculateBtnClicked){
}









//split the string
// var billItems = billString.split(",");
// // a variable for the total phone bill.
// var billTotal = 0;
// //loop over all the bill items
// for (var i=0;i<billItems.length;i++){
//     var billItem = billItems[i].trim();
//     if (billItem === "call"){
//         billTotal += 2.75;
//     }
//     else if (billItem === "sms"){
//         billTotal += 0.75;
//     }
// }
