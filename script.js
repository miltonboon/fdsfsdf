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
  let text = "<style>button {margin: 0px 40px; margin-bottom: 30px}</style><img class='animation' src='img/coupon.png' alt='' width='350rem'><br><br><h1>e em princípio vais ter mais uma coisa á tua espera quando chegares a casa ;)</h1><br><br><button onclick='button11()'>próximo</button><br><br><h1><a href='#' onclick='button9();'>Voltar</a></h1>";
  document.getElementById("things").innerHTML = text;
}

function button11() {
  let text = "<style>.box {margin-top: -26rem;}button {margin: 0px 40px; margin-bottom: 30px}</style><h1>Tentei fazer algo um pouco mais divertido em vez de apenas um texto ou uma carta, por isso espero que tenhas gostado pelo menos um bocadinho. Estou muito ansioso para estar contigo outra vez, senti muito a tua falta e estou a precisar imenso de algum tempo de qualidade com a minha linda namorada. Obrigado por me fazeres rir, por me fazeres companhia, por me ouvires quando preciso de ti, por me ajudares a mim e à minha família e muito mais. Prometo-te que nunca vou deixar de fazer essas mesmas coisas por ti. Estou eternamente grato pela tua existência e pelo amor que partilhamos.</h1><h1>Eu amo-te hoje, amanhã e sempre.</h1><br><h2>- Milton</h2><br><br><h1><a href='#' onclick='button10();'>Voltar</a></h1><br><h1><a href='#' onclick='button3();'>Início</a></h1>";
  document.getElementById("things").innerHTML = text;
}
