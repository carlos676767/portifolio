const editar = document.getElementById("editar");
const deletar = document.getElementById("deletar");
let array = [];
let entrada = document.getElementById("valor");


const editarInput = () => {
  entrada.addEventListener("input", function () {
    localStorage.setItem("input", entrada.value);
    array.push(entrada.value);
    console.log(array);

    const contarLetras = () => {
      const p = document.getElementById("p");
      p.textContent = `Total de caractrezes digitadas ${array.length}`;
    };

    contarLetras();
  });

  const salvarDados = () => {
    let recuperar = localStorage.getItem("input");
    entrada.value = recuperar;
  };
  salvarDados();
};


editar.addEventListener("click", function () {
  const editarInputValor = () => {
    const estaReadOnly = entrada.getAttribute("readonly") === "true";
    if (estaReadOnly) {
      entrada.removeAttribute("readonly");
    } else {
      entrada.setAttribute("readonly", "true");
    }
  };
  editarInputValor();
});

editarInput();


const dialog = document.querySelector("dialog");
const abrir = document.getElementById("add");
abrir.addEventListener("click", function () {
  const abrirDialog = () => {
    dialog.showModal();
  };
  abrirDialog();
});


deletar.addEventListener("click", function () {
  const apagarDialog = () => {
    dialog.close();
  };
  apagarDialog();
});

let titulo = document.getElementById("titulo");
const editarTitulo = () => {
  titulo.addEventListener("input", () => {
    localStorage.setItem("titulos", titulo.value);
  });

  const recuperarValorExibir = () => {
    let receuperarValor = localStorage.getItem("titulos");
    titulo.value = receuperarValor;
  };
  recuperarValorExibir();
};

editarTitulo();

const salvarDadosTexto = () => {
  navigator.clipboard.writeText(entrada.value)
}

const copiarTitulo = () => {
  navigator.clipboard.writeText(titulo.value)
}

const alertaCopiado = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Texto copiado na area de transferencia",
    showConfirmButton: false,
    timer: 1500
  });
}


const botaoCopiarTexto = document.getElementById("copiar")
botaoCopiarTexto.addEventListener("click", () => {
  salvarDadosTexto()
  alertaCopiado()
})