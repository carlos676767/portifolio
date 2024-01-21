const cores = {
  white: "#808080",
  black: "#333",
};

const container = document.getElementById("container");
const containerCorWhite = () => {
  container.style.backgroundColor = cores.white;
};

const containerBlack = () => {
  container.style.backgroundColor = cores.black;
};

const header = document.querySelector("header")

const headerColorWhite = () => {
    header.style.backgroundColor = cores.white
}

const headerColorBlack = () => {
    header.style.backgroundColor = cores.black
}

const ul = document.querySelectorAll("ul")[0]
const ulWhite = () => {
  ul.style.backgroundColor = cores.white
}

const ulBlack = () => {
  ul.style.backgroundColor = cores.black
}


const select = document.querySelector("select");
select.addEventListener("click", () => {
  const white = document.querySelectorAll("option")[0];
  const black = document.querySelectorAll("option")[1];
  const reset = document.querySelectorAll("option")[2]
  if (white.selected) {
    containerCorWhite();
    headerColorWhite()
    ulWhite()
    localStorage.setItem("cores", cores.white)
  } else if (black.selected) {
    localStorage.setItem("cores", cores.black)
    containerBlack();
    headerColorBlack()
    ulBlack()
  } else if (reset.selected) {
    localStorage.clear()
  }
});

const recuperarDarkMode = () => {
    const recuperarValor = localStorage.getItem("cores")
    if (recuperarValor === cores.white) {
        containerCorWhite()
        headerColorWhite()
        ulWhite()
    }else if (recuperarValor === cores.black) {
        containerBlack()
        headerColorBlack()
        ulBlack()
    }
}


recuperarDarkMode()