//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");


function calculateBill(billString) {
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");
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

   if(foundBill === ""){
    priceSms += 0;
    priceCall += 0;
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
