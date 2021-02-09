document.onreadystatechange = function() {

  if (document.readyState !== "complete") {

    document.querySelector("body").style.visibility = "hidden";

    document.querySelector("#loader").style.visibility = "visible";

  } else {

    document.querySelector("#loader").style.display = "none";

    document.querySelector("body").style.visibility = "visible";

  }
};

function H2D(){
	var x = document.getElementById("Input").value;
	var y = parseInt(x,16);
	document.getElementById("Show").innerHTML = y;}
	
function D2H(){
	var a = document.getElementById("Input").value;
	var b = Number(a).toString(16);
	document.getElementById("Show").innerHTML = b;}