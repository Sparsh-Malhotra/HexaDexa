function H2D(){
	var x = document.getElementById("Input").value;
	var y = parseInt(x,16);
	document.getElementById("Show").innerHTML = y;}
	
function D2H(){
	var a = document.getElementById("Input").value;
	var b = Number(a).toString(16);
	document.getElementById("Show").innerHTML = b;}