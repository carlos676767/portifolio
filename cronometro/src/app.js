
const iniciar = document.querySelectorAll("button")[0]
let cronometrar 
let contador = 0
const cronometroIniciar = () => {
    const texto = document.querySelector("p")
     cronometrar = setInterval(function () {
      ++contador
      texto.textContent = `00:${contador}`
    }, 100);
  }

  
iniciar.addEventListener("click", function() {
    cronometroIniciar()
})

const parar = document.querySelectorAll("button")[1];
parar.addEventListener("click", function () {
  const pararCronometro = () => {
    clearTimeout(cronometrar);
  };
  pararCronometro();
});


const reiniciar = document.querySelectorAll("button")[2]
reiniciar.addEventListener("click", function() {
    contador = 0
})