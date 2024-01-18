const editar = document.getElementById("editar");
const deletar = document.getElementById("deletar");
let array = [];
let entrada = document.getElementById("valor");

const editarInput = () => {
  entrada.addEventListener("input", function () {
    localStorage.setItem("input", entrada.value);
    array.push(entrada.value);

    const contarLetras = () => {
      const p = document.getElementById("p");
      p.textContent = `Total de caractrezes ${array.length}`;
      localStorage.setItem("contar", array.length);
    };
    contarLetras();
  });

  const recuperarValorContador = () => {
    let recuperar = localStorage.getItem("contar");
    p.textContent = `Total de caractrezes ${recuperar}`;
  };
  recuperarValorContador();

  const salvarDados = () => {
    let recuperar = localStorage.getItem("input");
    entrada.value = recuperar;
  };
  salvarDados();

  deletar.addEventListener("click", function () {
    const apagarTextoSalvo = () => {
      localStorage.clear();
    };
    apagarTextoSalvo();
  });
};

editar.addEventListener("click", function () {
  const editarInputValor = () => {
    const estaReadOnly = entrada.getAttribute("readonly") === "true";
    titulo.getAttribute("readonly") === true
    if (estaReadOnly) {
      entrada.removeAttribute("readonly");
      titulo.removeAttribute("readonly");
    } else {
      entrada.setAttribute("readonly", "true");
      titulo.setAttribute("readonly", "true");
    }
  };
  editarInputValor();
});

editarInput()

let titulo = document.getElementById("titulo");
titulo.addEventListener("input", () => {
  localStorage.setItem("titulos", titulo.value);
});

const recuperarValorExibir = () => {
  let receuperarValor = localStorage.getItem("titulos");
  titulo.value = receuperarValor;
};
recuperarValorExibir();

const salvarDadosTexto = () => {
  navigator.clipboard.writeText(entrada.value);
};


const alertaCopiado = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Texto copiado na area de transferencia",
    showConfirmButton: false,
    timer: 1500,
  });
};

const botaoCopiarTexto = document.getElementById("copiar");
botaoCopiarTexto.addEventListener("click", () => {
  salvarDadosTexto()
  alertaCopiado();
});

const funcaoGerarPdf = () => {
  let opt = {
    margin: 1,
    filename: "notes.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(document.getElementById("valor")).save();
  html2pdf(document.getElementById("div-inputs"), opt);
};

const botaoPdf = document.getElementById("pdf");
botaoPdf.addEventListener("click", () => {
  funcaoGerarPdf();
});

const inputColor = document.getElementById("altera");
inputColor.addEventListener("input", () => {
  entrada.style.backgroundColor = inputColor.value;
  titulo.style.backgroundColor = inputColor.value;
  localStorage.setItem("valores", inputColor.value);
});

const recuperarValorColor = () => {
  let recuperarValor = localStorage.getItem("valores");
  entrada.style.backgroundColor = recuperarValor;
  titulo.style.backgroundColor = recuperarValor;
};

recuperarValorColor()

  
function DarkMode() {
  const select = document.querySelector("select");
  const white = document.querySelectorAll("option")[0];
  const dark = document.querySelectorAll("option")[1];
  const header = document.querySelector("header");
  let footer = document.querySelector("footer");
  let textoFooter = document.getElementById("texto-footer");
  let h5 = document.querySelectorAll("h5");

  const percorrerH5 = () => {
    h5.forEach(function (elemento) {
      elemento.style.color = "white";
    });
  };

  const headerEfooterWhite = () => {
    document.body.style.backgroundColor = "#808080";
    header.style.backgroundColor = "#808080";
    footer.style.backgroundColor = "#808080";
  };

  const headerEfooterBlack = () => {
    document.body.style.backgroundColor = "#333";
    header.style.backgroundColor = "#333";
    footer.style.backgroundColor = "#333";
  };

  const textoWhite = () => {
    textoFooter.style.color = "white";
  };

  select.addEventListener("change", () => {
    if (white.selected) {
      headerEfooterWhite();
      localStorage.setItem("colorMode", "#808080");
    } else if (dark.selected) {
      headerEfooterBlack();
      textoWhite()
      percorrerH5();
      localStorage.setItem("colorWhiteText", "#808080");
      localStorage.setItem("colorMode", "black");
    }
  });

  const aplicarCorSalva = () => {
    const colorMode = localStorage.getItem("colorMode");
    const ValorCorTexto = localStorage.getItem("colorWhiteText");
    if (colorMode === "#808080") {
      headerEfooterWhite();
    } else if (colorMode === "black" && ValorCorTexto === "#808080") {
      percorrerH5();
      headerEfooterBlack();
      textoWhite();
    }
  };
  aplicarCorSalva();
}

DarkMode()


const exibirMensagem = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Gostaria de fazer uma doação?",
      text: "Sua contribuição através de PIX é muito importante para nós!",
      imageUrl: "img/pix.png",
      imageAlt: "PIX Icon",
      showCancelButton: true,
      confirmButtonText: "Fazer Doação",
      cancelButtonText: "Não, obrigado!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Você será redirecionado em 5 segundos!",
          text: "A equipe da CSDev agradece imensamente pelo seu apoio.",
          icon: "success",
        });
        const contagem = () => {
          setTimeout(function () {
            location.href =
              "https://nubank.com.br/cobrar/frn1j/65a55e5a-975a-437a-a0b0-d1fb4a283597";
          }, 5000);
        };
        contagem();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Operação Cancelada",
          text: "Seu gesto é muito apreciado, obrigado de qualquer forma!",
          icon: "error",
        });
      }
    });
};

setInterval(exibirMensagem, 60000);
