
function darplayParte() {
  let h = document.getElementById("h");
  let audio = new Audio("src/dumbo.mp3");
  let adicionar = h.appendChild(audio);
  adicionar.play();
  h.style.color = `blue`;
}

addEventListener("keydown", function (argumento) {
  if (argumento.key === "h") {
    darplayParte();
  }
});

function teclaP() {
  let p = document.getElementById("p");
  let audio = new Audio("src/dumbo.mp3");
  let adicionar = p.appendChild(audio);
  adicionar.play();
  p.style.color = `red`;
}

addEventListener("keydown", function (argumento1) {
  if (argumento1.key === "p") {
    teclaP();
  }
});

function teclaK() {
  const k = document.getElementById("k");
  let audio = new Audio("src/RideCymbal.mp3");
  let adicionar2 = k.appendChild(audio);
  adicionar2.play();
  k.style.color = "green";
}

addEventListener("keydown", function (paran) {
  if (paran.key === "k") {
    teclaK();
  }
});

function teclaU() {
  const u = document.getElementById("u");
  let audio2 = new Audio("src/RideCymbal.mp3");
  let adicionar = u.appendChild(audio2);
  u.style.color = "chartreuse";
  adicionar.play();
}

addEventListener("keydown", function (argumento3) {
  if (argumento3.key === "u") {
    teclaU();
  }
});

function teclaS() {
  const s = document.getElementById("s");
  let audio = new Audio("src/splash.mp3");
  let adicionar = s.appendChild(audio);
  s.style.color = "#008B8B";
  adicionar.play();
}

addEventListener("keydown", function (argumento4) {
  if (argumento4.key === "s") {
    teclaS();
  }
});

function teclaC() {
  const c = document.getElementById("c");
  let audio = new Audio("src/bo.mp3");
  let adicionar = c.appendChild(audio);
  c.style.color = "#00FF7F";
  adicionar.play();
}

addEventListener("keydown", function (argumento5) {
  if (argumento5.key === "c") {
    teclaC();
  }
});

function teclaE() {
  const e = document.getElementById("e");
  let audio = new Audio("src/centraldumbo.mp3");
  let adicionar = e.appendChild(audio);
  e.style.color = "#DAA520";
  adicionar.play();
}

addEventListener("keydown", function (argumento6) {
  if (argumento6.key === "e") {
    teclaE();
  }
});

function teclaF() {
  const f = document.getElementById("f");
  let audio = new Audio("src/hits.mp3");
  const adicionar = f.appendChild(audio);
  f.style.color = "#CD853F";
  adicionar.play();
}
addEventListener("keydown", function (argumento7) {
  if (argumento7.key === "f") {
    teclaF();
  }
});