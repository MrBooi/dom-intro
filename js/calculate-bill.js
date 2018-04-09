//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");


function calculateBill(billString) {
  var priceSms = 0;
  var priceCall = 0;
  var priceTotal = 0;
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

function calculateBtnClicked() {
  var billString = billStringElement.value;
  var roundedBillTotal = calculateBill(billString);
  billTotalElement.innerHTML = roundedBillTotal;

  if (roundedBillTotal >= 20.00 && roundedBillTotal < 30.00) {
    billTotalElement.classList.add("warning");
  } else if (roundedBillTotal >= 30.00) {
    billTotalElement.classList.add("danger");
  }

}


calculateBtn.addEventListener('click', calculateBtnClicked);









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
