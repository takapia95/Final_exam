
window.onload = init;
function init() {
  addLastUpdate();
}

// last update code in footer
function addLastUpdate(){
  const date = new Date(document.lastModified);
  document.getElementById("modified").innerHTML = "Last modified: " + date.toDateString();
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
function calculate() {
  //submit the form//
  var bill = Number(document.getElementById('foodtol').value);
  var tipPercent = document.getElementById('myRange').value;
  var tipValue = bill * (tipPercent / 100);
    document.getElementById('tipAmount').innerHTML = " $" + tipValue.toFixed(2);
  var newBill = bill + tipValue;
  document.getElementById('newBill').innerHTML = " $" + newBill.toFixed(2);
}

 function reset(){  
document.getElementById('form_id').value = '';  
 } 