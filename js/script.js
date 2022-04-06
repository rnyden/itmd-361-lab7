function init(){
  function alertPopUp(){
    var textIn = document.getElementById("entryinput").value;
		alert("Reeanna Nyden: " + textIn);
  }
	var alertButton = document.getElementById("entrybutton");
  alertButton.addEventListener('click', alertPopUp);
}

window.addEventListener('load', init);
