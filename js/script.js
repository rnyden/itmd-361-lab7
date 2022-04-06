function init(){
  function alertPopUp(){
    var textIn = document.getElementById("entryinput").value;
    var textOut = document.getElementById("textoutput")
    alert("Reeanna Nyden: " + textIn);
    textOut.innerHTML = textIn
  }
	var alertButton = document.getElementById("entrybutton");
  alertButton.addEventListener('click', alertPopUp);
}
window.addEventListener('load', init);
