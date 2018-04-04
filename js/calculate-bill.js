//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function calculateBill(billString){
 //var checkbill = billStringElement.value;
//console.log(checkbill);
 var  billoutput = billString.split(",");
var priceSms =0;
var priceCall=0;
var priceTotal =0;
  for (var i = 0; i <  billoutput.length; i++) {
      var foundBill = billoutput[i].trim();
      if (foundBill==='sms') {
        priceSms += 0.75;
      }
      else if (foundBill==='call') {
        priceCall += 2.75;
      }


  }
  priceTotal = priceSms+priceCall;


return priceTotal;

}


function calculateBtnClicked(){
    var billString = billStringElement.value;
    //round to two decimals
    var roundedBillTotal = calculateBill(billString).toFixed(2);

    billTotalElement.innerHTML = roundedBillTotal;

    if(roundedBillTotal>=20 && roundedBillTotal<30){

    billTotalElement.classList.add("warning");

    }
    else
     if (roundedBillTotal>=30) {
      billTotalElement.classList.add("danger");
    }
}

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBill);
calculateBtn.addEventListener('click', calculateBtnClicked);














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
