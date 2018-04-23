var callsTotalTwoElem = document.querySelector('.callTotalTwo');
// get a reference to the smsTotalTwo
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var totalCostTwoElem = document.querySelector('.totalTwo');

var radiobill = new TextBillTotal();

function radioBillClicked() {
   // start of radioBill function
   billTotalElement.classList.remove("warning");
     billTotalElement.classList.remove("danger");
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;

    radiobill.calc(billItemType);

  }

  callsTotalTwoElem.innerHTML = radiobill.callTotal();
  smsTotalTwoElem.innerHTML = radiobill.smsTotal();

  var totalCostTwo = radiobill.total();
  totalCostTwoElem.innerHTML = totalCostTwo;

  if (totalCostTwo > 30 && totalCostTwo < 50) {

    totalCostTwoElem.classList.add("warning");

  } else
  if (totalCostTwo > 50) {
    totalCostTwoElem.classList.add("danger");
  }

}
radioBillAddBtn.addEventListener('click', radioBillClicked);





document.addEventListener('DOMContentLoaded', function(){
   // get a reference to the template script tag
 var templateSource = document.querySelector(".billTemplate").innerHTML;
 // compile the template
var RadioBillTemplate = Handlebars.compile(templateSource);

var RadioDataElem = document.querySelector(".radiotemplate");

var userDataHTML = RadioBillTemplate({
       callTotal : '5.75',
       smsTotal : '2.75',
       billTotal : '10.50',

   });
   RadioDataElem.innerHTML = userDataHTML;


});
