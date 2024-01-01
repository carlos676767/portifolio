const start = document.getElementById("start");
const fechar = document.getElementById("fechar");
const dialog = document.querySelector("dialog");




function exibirAlerta() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title:
      "Se você está usando um computador para visualizar esta página, pressione 'E' para fechar o popup ou 'p' para ir para o quiz.",
    showConfirmButton: false,
    timer: 5000,
  });
}


addEventListener("DOMContentLoaded", function () {
 exibirAlerta()
});

const abrirDialog = () => {
  document.body.classList.add("blur-background");
  dialog.showModal();
};


start.addEventListener("click", function () {
  abrirDialog();
});

function fecharDialog() {
  dialog.close();
  document.body.classList.remove("blur-background");
}

fechar.addEventListener("click", function () {
  fecharDialog();
});

addEventListener("keydown",function(entrar) {
  if (entrar.key === "e") {
      abrirDialog();
  }
})


addEventListener("keydown", function (sair) {
  if (sair.key === "s") {
    fecharDialog();
  }
});


//ser redirecionado para o proximo pagina
addEventListener("keydown", function (proximo) {
  if (proximo.key === "p") {
    location.href = "../quiz/pages/perguntas.html";
  }
});