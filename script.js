function button1() {
  let text = "<h1>não tens escolha<h1><br><br><button onclick='button3()'>vou voltar e aceitar</button>";
  document.getElementById("things").innerHTML = text;
}

let box = document.querySelector("box").classList;;

function button2() {
  let text = "<h1>pronto agora sabemos que tu queres, mas será que eu aceito?<h1><h1>vamos fazer um pequeno teste<h1><br><button onclick='button4()'>és mesmo chato milton, mas ok</button><h1><a href='#' onclick='button3();'>Voltar</a></h1>";
  document.getElementById("things").innerHTML = text;
}


function button3() {
  let text = "<style>button {margin: 0px 40px; margin-bottom: 30px}</style><img src='img/cupid.png' alt='' width='100rem'><h1>pensavas mesmo que eu ia fazer um website tipo wix?</h1><h2>jenny, will you be my valentine? ;)</h2><br><button onclick='button1()'>não</button><button onclick='button2()'>sim</button>";
  document.getElementById("things").innerHTML = text;
}

function button4() {
  let text = "<style>button {margin: 0px 15px; margin-bottom: 30px}</style><h1>primeira pergunta >:)</h1><h2>qual destas pessoas é o amor da minha vida?</h2><br><button onclick='button5()'>jenny</button><button onclick='button5()'>jennifer</button><button onclick='button5()'>jenninha</button><h1><a href='#' onclick='button2();'>Voltar</a></h1>";
  document.getElementById("things").innerHTML = text;
}


function button5() {
  let text = "<style>button {margin: 0px 40px; margin-bottom: 30px}</style><h1>essa foi fácil, segunda pergunta!</h1><h2>algum dia vais me abandonar?</h2><br><button onclick='button7()'>não!</button><br><button onclick='button6()'>sim, se me tratares mal</button><h1><a href='#' onclick='button4();'>Voltar</a></h1>";
  document.getElementById("things").innerHTML = text;
}

function button6() {
  alert("erro 404: impossível");
}

function button7() {
  let text = "<style>button {margin: 0px 40px; margin-bottom: 30px}</style><h1>que boa escolha! última pergunta :)</h1><h2>já que aceitaste ser a minha namorada, automaticamente aceitaste casar comigo também, não concordas?</h2><br><button onclick='button8()'>não concordo</button><button onclick='button9()'>concordo</button><h1><a href='#' onclick='button5();'>Voltar</a></h1>";
  document.getElementById("things").innerHTML = text;
}

function button8() {
  let text = "<style>button {margin: 0px 40px; margin-bottom: 30px}</style><h1>errado.</h1><br><button onclick='button7()'>peço imensa desculpa, mudei de opinião</button>";
  document.getElementById("things").innerHTML = text;
}

function button9() {
  let text = "<style>button {margin: 0px 40px; margin-bottom: 30px}</style><h1>parabéns amor, passaste no teste!</h1><h1>infelizmente não posso estar contigo ainda mas podes clicar neste butão para revelar a prendinha que te vou dar ;)</h1><br><button class='purplebutton' onclick='button10()'>Revelar!</button><h1><a href='#' onclick='button7();'>Voltar</a></h1>";
  document.getElementById("things").innerHTML = text;
}

function button10() {
  let text = "<style>.box {margin-top: -26rem;}button {margin: 0px 40px; margin-bottom: 30px}</style><h1>POUCA-VERGONHA!</h1><h1>aprende a ter paciência amor</h1><h1>mas em princípio vais ter algo á tua espera quando chegares a casa ;)</h1><h1>incialmente pensei em só escrever um texto mas queria ser um bocado mais original, demorou mais tempo do que parece, programei isto tudo á mão :) amo te imenso, obrigado por exister, estou atualmente a escrever isto enquanto estamos no facetime e estou super ansioso para estar contigo. beijnhos e feliz dia de são valentim</h1><h1>P.S. se viste algum erro ortográfico, desculpa, escrevi isto tudo numa aplicação para editar código</h1><br><h2>- Milton</h2><br><br><h1><a href='#' onclick='button3();'>Início</a></h1>";
  document.getElementById("things").innerHTML = text;
}