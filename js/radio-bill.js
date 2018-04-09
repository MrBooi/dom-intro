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
