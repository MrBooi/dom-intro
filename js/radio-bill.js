// get a reference to the sms or call radio buttons
// get a reference to the  callTotalTwo
var callsTotalTwoElem = document.querySelector('.callTotalTwo');
// get a reference to the smsTotalTwo
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var  totalCostTwoElem =  document.querySelector('.totalTwo');
//create a variable that will keep track of the total bill
var totalcall =0;
var totalsms =0;

//radio bill function
function radioBill(){ // start of radioBill function
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if(checkedRadioBtn){ //start of checkedRadioBtn
    var billItemType =checkedRadioBtn.value;
     if(billItemType ==='call'){// start of call
      
       totalcall += 2.75;

     }//end of call
     else if (billItemType==='sms') {// start of sms
       totalsms += 0.75;
    }//end of sms

} //end of checkedRadioBtn

//update the totals that is displayed on the screen.
  callsTotalTwoElem.innerHTML = totalcall.toFixed(2);
  smsTotalTwoElem.innerHTML = totalsms.toFixed(2);
  // calculating the total of sms's and calls
  var totalcostTwo = totalcall + totalsms;
  totalCostTwoElem.innerHTML = totalcostTwo.toFixed(2);

//If the total cost exceed R30.00 show the total cost in orange, if over R50 show it in red.
if(totalcostTwo >=30 && totalcostTwo<50){

totalCostTwoElem.classList.toggle("warning");

}
else
 if (totalcostTwo >=50) {
  totalCostTwoElem.classList.toggle("danger");
}


} // end of radiobill function



//add an event listener for when the add button is pressed
 radioBillAddBtn.addEventListener('click', radioBill);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
