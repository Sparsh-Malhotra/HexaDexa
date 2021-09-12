var output = document.querySelector('p');

var input = document.querySelector('input');

function H2D(){
  output.innerHTML = parseInt(input.value,16);
}
function D2H(){
  output.innerHTML = Number(input.value).toString(16);
}
