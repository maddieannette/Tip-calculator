//Tip Calculation
function calcTip() {
    var totalBill = document.getElementById("totalbill").value;
    var tipAmount = document.getElementById("tipamount").value;
    var peopleSplit = document.getElementById("peoplesplit").value;


//Verifying input
if (totalBill ==="" || tipAmount === "0") {
    alert("Please enter your amount");
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