var costCallSetting = document.querySelector('.callCostSetting');
var costSmsSetting = document.querySelector('.smsCostSetting');
var callTotalSettingsElem = document.querySelector('.callTotalSettings');
var smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
var totalSettingsElem = document.querySelector('.totalSettings');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');
//get a reference to the add button
var buttonAdd = document.querySelector('.addtotal');
//get a reference to the 'Update settings' button
var UpdateBtn = document.querySelector('.updateSettings');
// create a variables that will keep track of all the settings
// factory function
function UpdateBillWithSettings() {
  var smsCost = 0;
  var callCost = 0;
  var totalCall = 0;
  var totalSms = 0;
  var warning = 0;
  var danger = 0;
  var total = 0;
  // setters
  var setCallCost = function(value) {
      callCost = parseFloat(value);
    return callCost.toFixed(2);
  }
  var setSmsCost = function(value) {
    smsCost = parseFloat(value);
    return smsCost.toFixed(2);
  }
  var setWarningLevel = function(value) {
    warning = parseFloat(value);
    return warning.toFixed(2);
  }
  var setCriticalLevel = function(value) {
    danger = parseFloat(value);
    return danger.toFixed(2);
  }
  // getters
  var getCallTotal = function() {
    return totalCall.toFixed(2);
  }

  var getSmsTotal = function() {
    return totalSms.toFixed(2);
  }

  var getWarningLevel = function() {
    return warning.toFixed(2);
  }

  var getCriticalLevel = function() {
    return danger.toFixed(2);
  }

  var billTotal = function() {
    total = (totalCall + totalSms).toFixed(2)
    return total;
  }

  var changeColor = function() {
    var Color = "";
    if (total >= warning && total < danger) {
      Color = "warning";

    } else if (total > danger) {
      Color = "danger";
    }
    return Color;
  }

  // Radio button clicked
  var Calculate = function(billtext) {
    if (billtext === 'sms') {
      totalSms += smsCost;
    } else if (billtext === 'call') {
      totalCall += callCost;
    }
  }

  return {
    calc: Calculate,
    callCost: setCallCost,
    smsCost: setSmsCost,
    setWarning: setWarningLevel,
    setCritical: setCriticalLevel,
    total: billTotal,
    callTotal: getCallTotal,
    smsTotal: getSmsTotal,
    getWarning: getWarningLevel,
    getCritical: getCriticalLevel,
    check: changeColor
  }
}

var update = UpdateBillWithSettings();


  function updateSettingClicked() {

    var newSmsValue = costSmsSetting.value;
    update.smsCost(newSmsValue);
    console.log(newSmsValue);

    var newCallValue = costCallSetting.value;
    update.callCost(newCallValue);
    console.log(newCallValue);
    var warningValue = warningLevelSetting.value;
    update.setWarning(warningValue);
    var criticalValue = criticalLevelSetting.value;
    update.setCritical(criticalValue);




      if(update.total< warningValue){

        totalSettingsElem.classList.remove("warning");
      }
      else if (update.total < criticalValue) {
        totalSettingsElem.classList.remove("danger");
        document.getElementById("Addtotal").disabled = false;
      }
      if (update.total > criticalValue) {
        document.getElementById("Addtotal").disabled = false;
      }
}

var warningcheck = update.getWarning();

var criticalcheck = update.getCritical();


function RadioTotal() {
  var settingsRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (settingsRadioBtn) {
    var billType = settingsRadioBtn.value.trim();
    update.calc(billType);
  }
  console.log(update.smsTotal());
  smsTotalSettingsElem.innerHTML = update.smsTotal();
  callTotalSettingsElem.innerHTML = update.callTotal();
  var totalBill = update.total();
  totalSettingsElem.innerHTML = totalBill;
  var color = update.check();

  if (color === "warning") {
    totalSettingsElem.classList.add("warning");
  } else if (color === "danger") {
    totalSettingsElem.classList.add("danger");
    document.getElementById("Addtotal").disabled = true;
  }
}


UpdateBtn.addEventListener('click', updateSettingClicked);
buttonAdd.addEventListener('click', RadioTotal);
