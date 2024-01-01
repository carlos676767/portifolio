const ligar = document.querySelectorAll("button")[0];
const desligar = document.querySelectorAll("button")[1];

const desabilitarBotoes = () => {
  ligar.disabled = true;
  desligar.disabled = true;
};

const ligarLampada = () => {
  document.querySelectorAll("img")[1].style.display = "block";
};

const esconderDesligada = () => {
  document.querySelectorAll("img")[0].style.display = "none";
};

ligar.addEventListener("click", function () {
  const audioLigandoLampada = () => {
    let audio = new Audio("../audio/ligado.mp3");
    audio.play();
  };
  esconderDesligada();
  ligarLampada();
  audioLigandoLampada();
});

const desligarLampada = () => {
  document.querySelectorAll("img")[0].style.display = "block";
};

const esconderLigada = () => {
  document.querySelectorAll("img")[1].style.display = "none";
};

desligar.addEventListener("click", function () {
  const audioDesligandoLampada = () => {
    let audio = new Audio("../audio/desligado.mp3");
    audio.play();
  };
  desligarLampada();
  esconderLigada();
  audioDesligandoLampada();
});

const mostrarQuebrada = () =>
  (document.querySelectorAll("img")[2].style.display = "block");

document.querySelectorAll("img")[0].addEventListener("dblclick", function () {
  const audioQuebrandoLampada = () => {
    let audio = new Audio("../audio/quebrando.mp3");
    audio.play();
  };
  esconderDesligada();
  desabilitarBotoes();
  audioQuebrandoLampada();
  mostrarQuebrada();
});
alert(`hello0`)