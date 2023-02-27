const selectedCookie = document.querySelector("#selected-cookie");
const btnOpenAnotherCookie = document.querySelector('button');
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

document.addEventListener('keypress', pressEnter);

selectedCookie.addEventListener('click', handleClick);
btnOpenAnotherCookie.addEventListener('click', handleBtnClick);

function handleClick() {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
}

function handleBtnClick() {
  screen2.classList.add("hide");
  screen1.classList.remove("hide");
}

function getQuote() {
  const quote = new Array();
  quote[0] = "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?";
  quote[1] = "Olhe para cima, que é delá que vem sua força!";
  quote[2] = "A vida trará coisas boas se tiveres paciência";
  quote[3] = "A juventude não é uma época da vida, é um estado de espírito";
  quote[4] = "Não compense na ira o que lhe falta na razão";
  quote[5] = "O bom-senso vale mais do que muito conhecimento.";
  quote[6] = "Não há que ser forte. Há que ser flexível";
  quote[7] = "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos";
  quote[8] = "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.";
  quote[9] = "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.";
  quote[10] = "Comece onde você está. Use o que você tem. Faça o que você pode.";
  const i = Math.floor(11 * Math.random())
  document.getElementById("sorte").innerHTML = quote[i];
}

function pressEnter(event) {
  if (event.key == 'Enter' && screen1.classList.contains("hide")) {
    handleBtnClick();
    getQuote();
  }
  else {
    handleClick();
    getQuote();
  }
}



