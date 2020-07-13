//Tip Calculation
function calcTipEvent(e) {
  e.preventDefault();
  calcTip();
  return false;
}
function calcTip() {
    var totalBill = document.getElementById("totalbill").value;
    var tipAmount = document.getElementById("tipamount").value;
    var peopleSplit = document.getElementById("peoplesplit").value;


//Verifying input
if (totalBill ==="" ) {
    alert("Please enter your bill amount");
    return;
}
if (tipAmount === "0" ) {
  alert("Please specify how the service was.");
  return;
}
//If the bill is not being split 
if ( peopleSplit === " " || peopleSplit <= 1){
    peopleSplit = 1;
     document.getElementById("each").style.display = "none";
} else {
  document.getElementById("each").style.display = "block";
}
//Total Bill Calculation 
var total = (totalBill * tipAmount) / peopleSplit;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);
document.getElementById("totalAmount").style.display = "block";
  document.getElementById("tip").innerHTML = total;
//For tip display
}
document.getElementById("totalAmount").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() {
    calcTip();
};