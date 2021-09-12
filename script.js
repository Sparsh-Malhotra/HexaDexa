var output = document.querySelector("p");

var input = document.querySelector("input");

var message = document.querySelector(".tooltiptext");

function H2D() {
  output.innerHTML = parseInt(input.value, 16);
}
function D2H() {
  output.innerHTML = Number(input.value).toString(16);
}
function copyToClipboard() {
  navigator.clipboard.writeText(output.textContent);
  message.textContent = "Copied Successfully";
}
function textCopied() {
  message.textContent = "Copy to Clipboard";
}
