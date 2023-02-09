function button1() {
  // alert("resposta não aceite");
  let text = "<h1>não tens escolha<h1><br><br><button onclick='button3()'>vou voltar e aceitar</button>";
  document.getElementById("things").innerHTML = text;
}

let box = document.querySelector("box").classList;;

function button2() {
  var x = document.getElementById("things");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function button3() {
  // alert("resposta não aceite");
  let text = "<style>button {margin: 0px 40px; margin-bottom: 30px}</style><h1>pensavas mesmo que eu ia fazer um website tipo wix?</h1><h2>jenny, will you be my valentine? ;)</h2><br><button onclick='button1()'>não</button><button onclick='button2()'>sim</button>";
  document.getElementById("things").innerHTML = text;
}

