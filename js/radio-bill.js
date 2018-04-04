var callsTotalTwoElem = document.querySelector('.callTotalTwo');
// get a reference to the smsTotalTwo
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var totalCostTwoElem = document.querySelector('.totalTwo');

var radiobill = new TextBillTotal();

function radioBillClicked() { // start of radioBill function
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;

    radiobill.calc(billItemType);

  }

  callsTotalTwoElem.innerHTML = radiobill.calltotal();
  smsTotalTwoElem.innerHTML = radiobill.smstotal();

  var totalcostTwo = radiobill.total();
  totalCostTwoElem.innerHTML = totalcostTwo;

  if (totalcostTwo > 30 && totalcostTwo < 50) {

    totalCostTwoElem.classList.add("warning");

  } else
  if (totalcostTwo > 50) {
    totalCostTwoElem.classList.add("danger");
  }

}
radioBillAddBtn.addEventListener('click', radioBillClicked);









// if(checkedRadioBtn){ //start of checkedRadioBtn
//     var billItemType =checkedRadioBtn.value;
//      if(billItemType ==='call'){// start of call
//
//        totalcalls += 2.75;
//
//      }//end of call
//      else if (billItemType==='sms') {// start of sms
//        totalsmss += 0.75;
//     }//end of sms
//
// } //end of checkedRadioBtn
//
// //update the totals that is displayed on the screen.
//   callsTotalTwoElem.innerHTML = totalcalls.toFixed(2);
//   smsTotalTwoElem.innerHTML = totalsmss.toFixed(2);
//   // calculating the total of sms's and calls
//   var totalcostTwo = totalcalls + totalsmss;
//   totalCostTwoElem.innerHTML = totalcostTwo.toFixed(2);
//
// //If the total cost exceed R30.00 show the total cost in orange, if over R50 show it in red.
// if(totalcostTwo >30 && totalcostTwo<50 ){
//
// totalCostTwoElem.classList.add("warning");
//
// }
//
// else
//  if (totalcostTwo >50) {
//   totalCostTwoElem.classList.add("danger");
// }
