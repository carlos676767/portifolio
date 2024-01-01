const cronometro = (contar) => {
  const span = document.querySelectorAll("div")[2];

  switch (contar) {
    case 0:
      location.href = "../index.html";
      break;
  }

  if (contar >= 0) {
    span.textContent = contar;
    setTimeout(function () {
      cronometro(contar - 1);
    }, 1000);
  }
};

cronometro(20);

const span = document.querySelectorAll("span");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const p = document.querySelectorAll("p");


function desabilitarAcoesFuturas() {
  document.getElementById("proximo3").disabled = true;
  document.getElementById("proximo4").disabled = true;
  document.getElementById("proximo").style.color = "#808080";
  document.getElementById("proximo2").disabled = true;
}

desabilitarAcoesFuturas();

const desabiltarProximoEtrocarCor = () => {
  document.getElementById("proximo").disabled = false;
  document.getElementById("proximo").style.color = "white";
};

const trocarCorProximo2EDesabilitar = () => {
  document.getElementById("proximo2").disabled = false;
  document.getElementById("proximo2").style.color = "white";
};

const desabiltarProximo3EtrocarCor = () => {
  document.getElementById("proximo3").disabled = false;
  document.getElementById("proximo3").style.color = "white";
};

const proximo4DesabilitadoEcomAcorWhite = () => {
  document.getElementById("proximo4").disabled = false;
  document.getElementById("proximo4").style.color = "white";
};

const proximo3Eproximo4None = () => {
  document.getElementById("proximo2").style.display = "none";
  document.getElementById("proximo3").style.display = "none";
  document.getElementById("proximo4").style.display = "none";
};


const proximo2Eproximo3noneEblock = () => {
  document.getElementById("proximo2").style.display = "none";
  document.getElementById("proximo3").style.display = "block";
  document.getElementById("proximo3").style.color = "#808080";
}

const QuizPergunta1 = () => {
  document.getElementById("proximo").disabled = true;
  document.querySelectorAll("p")[1].textContent = "1/4";
  proximo3Eproximo4None();
  const pergunta1 = {
    pergunta: "Qual é a função da declaração import em Python?",
    alternativa1: "Alocar memória",
    alternativa2: "Inserir um comentário",
    alternativa3: "Importar módulos ou bibliotecas",
  };

  document.querySelectorAll("p")[0].textContent = pergunta1.pergunta;
  document.querySelectorAll("span")[0].textContent = pergunta1.alternativa1;
  document.querySelectorAll("span")[1].textContent = pergunta1.alternativa3;
  document.querySelectorAll("span")[2].textContent = pergunta1.alternativa2;

  addEventListener("change", function () {
    if (document.querySelectorAll('input[type="checkbox"]')[1].checked) {
      desabiltarProximoEtrocarCor();
      pararCheckboxsCaso1sejaCheckado();
    }
  });
};


QuizPergunta1();

const pararCheckboxsCaso1sejaCheckado = () => {
  document.querySelectorAll('input[type="checkbox"]')[0].checked = false;
  document.querySelectorAll('input[type="checkbox"]')[2].checked = false;
};


const pararCheckboxsCaso2E3sejaCheckado = () => {
  document.querySelectorAll('input[type="checkbox"]')[1].checked = false;
  document.querySelectorAll('input[type="checkbox"]')[0].checked = false;
};

const pararCheckboxsCasose0jaCheckado = () => {
  document.querySelectorAll('input[type="checkbox"]')[1].checked = false;
  document.querySelectorAll('input[type="checkbox"]')[2].checked = false;
};


const QuizPergunta2 = () => {
  document.querySelectorAll("p")[1].textContent = "2/4";
  const pergunta2 = {
    pergunta: "Em programação, o que significa o termo loop infinito?",
    alternativa1: "Um código que nunca é executado",
    alternativa2: "Uma variável sem valor atribuído",
    alternativa3: "Um código que repete indefinidamente",
  };
  document.querySelectorAll("p")[0].textContent = pergunta2.pergunta;
  document.querySelectorAll("span")[0].textContent = pergunta2.alternativa1;
  document.querySelectorAll("span")[1].textContent = pergunta2.alternativa2;
  document.querySelectorAll("span")[2].textContent = pergunta2.alternativa3;

  addEventListener("change", function () {
    if (document.querySelectorAll('input[type="checkbox"]')[2].checked) {
      trocarCorProximo2EDesabilitar();
      pararCheckboxsCaso2E3sejaCheckado();
    }
  });
};


document.getElementById("proximo").addEventListener("click", function () {
  document.getElementById("proximo").disabled = true;
  QuizPergunta2();
  trocarCoresProximo2E1none();
  limparCheckboxs();
});


const trocarCoresProximo2E1none = () => {
  document.getElementById("proximo").style.display = "none";
  document.getElementById("proximo2").style = "block";
  document.getElementById("proximo2").style.color = "#808080";
};


const pergunta3 = () => {
  document.querySelectorAll("p")[1].textContent = "3/4";
  const questoes = {
    pergunta: "O que é um array em programação?",
    alternativa1: "Uma estrutura de controle de fluxo",
    alternativa2: "Uma declaração condicional",
    alternativa3: "Uma coleção ordenada de elementos",
  };

  document.querySelectorAll("p")[0].textContent = questoes.pergunta;
  document.querySelectorAll("span")[0].textContent = questoes.alternativa1;
  document.querySelectorAll("span")[1].textContent = questoes.alternativa2;
  document.querySelectorAll("span")[2].textContent = questoes.alternativa3;

  addEventListener("change", function () {
    if (document.querySelectorAll('input[type="checkbox"]')[2].checked) {
      desabiltarProximo3EtrocarCor();
      pararCheckboxsCaso2E3sejaCheckado();
    }
  });
};


document.getElementById("proximo2").addEventListener("click", function () {
  pergunta3();
  proximo2Eproximo3noneEblock();
  limparCheckboxs();
});




const pergunta4 = () => {
  document.querySelectorAll("p")[1].textContent = "4/4";
  const questao = {
    pergunta: "Em linguagens de programação, o que é um ponteiro?",
    alternativa1: "Um endereço de memória",
    alternativa2: "Uma estrutura de controle de repetição",
    alternativa3: "Um endereço de memória",
  };
  document.querySelectorAll("p")[0].textContent = questao.pergunta;
  document.querySelectorAll("span")[0].textContent = questao.alternativa1;
  document.querySelectorAll("span")[1].textContent = questao.alternativa2;
  document.querySelectorAll("span")[2].textContent = questao.alternativa3;

  addEventListener("change", function () {
    if (document.querySelectorAll('input[type="checkbox"]')[0].checked) {
      proximo4DesabilitadoEcomAcorWhite();
      pararCheckboxsCasose0jaCheckado();
    }
  });
};




function limparCheckboxs() {
  document.querySelectorAll('input[type="checkbox"]')[1].checked = false;
  document.querySelectorAll('input[type="checkbox"]')[2].checked = false;
  document.querySelectorAll('input[type="checkbox"]')[0].checked = false;
}


function proximoClicar() {
  document.getElementById("proximo").click();
  document.getElementById("proximo2").click();
  document.getElementById("proximo3").click();
  document.getElementById("proximo4").click();
}


document.getElementById("proximo3").addEventListener("click", function () {
  document.getElementById("proximo3").style.display = "none";
  document.getElementById("proximo4").style.display = "block";
  document.getElementById("proximo4").style.color = "#808080";
  pergunta4();
  limparCheckboxs();
});


addEventListener("keydown", function (a) {
  if (a.key === "a") {
    document.querySelectorAll('input[type="checkbox"]')[0].click();
  }
});



addEventListener("keydown", function (b) {
  if (b.key === "b") {
    document.querySelectorAll('input[type="checkbox"]')[1].click();
  }
});

addEventListener("keydown", function (c) {
  if (c.key === "c") {
    document.querySelectorAll('input[type="checkbox"]')[2].click();
  }
});


addEventListener("keydown", function (enter) {
  if (enter.key === "y") {
    proximoClicar();
  }
});


const alteraImagem = () => {
  document.body.style.backgroundImage = "url('../971.jpg')";
  document.body.style.backgroundSize = "100% 100%";
};


const ocultarDiv = () => {
  document.querySelectorAll("main")[0].remove();
};


const mostrarNovoConteudo = () => {
  document.querySelector("section").style.display = "block";
};


document.getElementById("proximo4").addEventListener("click", function () {
  ocultarDiv();
  mostrarNovoConteudo();
  alteraImagem();
});
