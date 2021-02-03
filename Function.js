var y;
  var b;
  function H2D(){
    var x = document.getElementById("HexInput").value;
    var y = parseInt(x,16);
  document.getElementById("DecShow").innerHTML = y;
  }
  function D2H(){
    var a = document.getElementById("DecInput").value;
    var b = Number(a).toString(16);
    document.getElementById("HexShow").innerHTML = b;
  }
  function CopyH(){
    var a = document.getElementById("DecInput");
    var c = Number(a).toString(16);
    c.select();
    c.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + c.value);
  }
  function CopyD(){
  y.select();
  y.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + y.value);
  }