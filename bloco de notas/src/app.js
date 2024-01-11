const editar = document.getElementById("editar")
const deletar = document.getElementById("deletar")
let array = [];
let entrada = document.getElementById("valor");

const editarInput = () => {
  entrada.addEventListener("input", function () {
    localStorage.setItem("input", entrada.value);
    array.push(entrada.value);

    const contarLetras = () => {
      const p = document.querySelector("p");
      p.textContent = `Total de ja digitados ${array.length}`;
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




const dialog = document.querySelector("dialog")
const abrir = document.getElementById("add")
abrir.addEventListener("click", function () {
  const abrirDialog = () => {
    dialog.showModal();

  };
  abrirDialog()
});



deletar.addEventListener("click", function () {
  const apagarDialog = () => {
    dialog.close();
  };
  apagarDialog();
});



const dark = document.getElementById("dark");
dark.addEventListener("click", function () {
  const alterarModo = () => {
    document.body.classList.toggle("dark-mode");
  };
  alterarModo();
});

