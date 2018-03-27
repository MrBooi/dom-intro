//var billTypeSet = document.querySelector('.billItemTypeWithSettings');
// get refences to all the settings fields
var costCall = document.querySelector('.callCostSetting');
var costSms = document.querySelector('.smsCostSetting');
var callTotalSettingsElem =document.querySelector('.callTotalSettings');
var smsTotalSettingsElem  = document.querySelector('.smsTotalSettings');
var totalSettingsElem   = document.querySelector('.totalSettings');
var warningLevelSetting  =document.querySelector('.warningLevelSetting');
var    criticalLevelSetting= document.querySelector('.criticalLevelSetting');
//get a reference to the add button
var buttonAdd= document.querySelector('.addtotal');
//get a reference to the 'Update settings' button
var UpdateBtn = document.querySelector('.updateSettings');
// create a variables that will keep track of all the settings
// create a variables that will keep track of all three totals.
 var smsTotalthree =0;
 var callTotalthree =0;
 var totalcall = 0;
 var totalsms =0;
 var Totalthree =0;


 var warning =0;
 var danger  =0;
// create a function called settingsBill

 function updateSetting(){
   var  updateCallTotal = costCall.value;
     //console.log(updateCallTotal);
   var updateSmsTotal = costSms.value;

   var updateWarningSetting = warningLevelSetting.value;
   var  updateCriticalSetting = criticalLevelSetting.value;
  if (costSms !="") {
    smsTotalthree = parseFloat(updateSmsTotal);

  }
  if(costCall !="") {
    callTotalthree = parseFloat(updateCallTotal);
  }

  if(warningLevelSetting !=""){
    warning = parseFloat(updateWarningSetting);
  }
  if (criticalLevelSetting !="") {
        danger = parseFloat(updateCriticalSetting);
        console.log(danger);
  }
 }


  function RadioTotal(){
var radioBillBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
//console.log(radioBillBtn);
if (radioBillBtn) {
  var callOrSms = radioBillBtn.value;
    // console.log(callOrSms);
  if(callOrSms === 'sms'){
    totalsms +=  smsTotalthree;
  //  console.log(SettingsCheck);
  } // end of sms brace bracket
   if (callOrSms ==='call') {
    totalcall   += callTotalthree ;
  //    console.log(SettingsCheck);

  }// end of sms brace bracket
}

// updating the vales
callTotalSettingsElem.innerHTML = totalcall.toFixed(2);
smsTotalSettingsElem.innerHTML  = totalsms.toFixed(2);
var billTotalThree = totalsms + totalcall;
totalSettingsElem.innerHTML  = billTotalThree.toFixed(2);

if(billTotalThree >= warning && billTotalThree <danger){
totalSettingsElem.classList.toggle("warning");

}
else
if (billTotalThree > danger) {
    totalSettingsElem.classList.toggle("danger");
  document.getElementById("Addtotal").disabled = true;
  //document.getElementsByClassName('.addtotal').disabled=true;
}

}


  UpdateBtn.addEventListener('click', updateSetting);
   buttonAdd.addEventListener('click', RadioTotal);
