const semaforoVermelho = () => {
  document.getElementById("vermelhoSe").style.display = "block";
  document.getElementById("desligadoSe").style.display = "none";
  document.getElementById("amareloSe").style.display = "none";
  document.getElementById("verdeSe").style.display = "none";
};

const semaforoAmarelo = () => {
  document.getElementById("vermelhoSe").style.display = "none";
  document.getElementById("desligadoSe").style.display = "none";
  document.getElementById("amareloSe").style.display = "block";
  document.getElementById("verdeSe").style.display = "none";
  
};

const semaforoVerde = () => {
  document.getElementById("vermelhoSe").style.display = "none";
  document.getElementById("desligadoSe").style.display = "none";
  document.getElementById("amareloSe").style.display = "none";
  document.getElementById("verdeSe").style.display = "block";
};


const vermelho = document.getElementById("vermelho");
vermelho.addEventListener("click", function () {
  semaforoVermelho();
});


const amarelo = document.getElementById("amarelo");
amarelo.addEventListener("click", function () {
  semaforoAmarelo();
});


const verde = document.getElementById("verde");
verde.addEventListener("click", function () {
  semaforoVerde();
});


const automatico = document.getElementById("automatico");
automatico.addEventListener("click", function () {
  const trocarCores = () => {
    const auto1 = setInterval(semaforoVermelho, 1000);
    const auto2 = setInterval(semaforoAmarelo, 1500);
    const auto3 = setInterval(semaforoVerde, 2000);
    const pararIntervalo = () => {
      const stop = document.getElementById("parar");
      stop.addEventListener("click", function () {
        setTimeout(function () {
          clearInterval(auto1);
          clearInterval(auto2);
          clearInterval(auto3);
          const sinalDesligado = () => {
            document.getElementById("vermelhoSe").style.display = "none";
            document.getElementById("desligadoSe").style.display = "block";
            document.getElementById("amareloSe").style.display = "none";
            document.getElementById("verdeSe").style.display = "none";
          };
          sinalDesligado();
        }, 2000);
      });
    };
    pararIntervalo();
  };
  trocarCores();
});