let array = ["pedra", "papel", "tesoura"]
let contadorVitorias = 0
let computador = 0

document.querySelectorAll("img")[0].addEventListener(`click`, function() {
    const JogarTesoura = () => {
        let aleatorio = Math.floor(Math.random() * array.length);
        let EscolhaComputador = array[aleatorio];
        document.querySelectorAll("p")[0].textContent = `O computador jogou: ${EscolhaComputador}`;
        document.querySelectorAll("p")[3].textContent = ``
        if (EscolhaComputador === "papel") {
            ++contadorVitorias
            document.querySelectorAll("p")[1].textContent = `Voce: ${contadorVitorias}`
        } else if (EscolhaComputador === "tesoura") {
         document.querySelectorAll("p")[3].textContent = `O jogo deu empate!`
        } else {
            ++computador
            document.querySelectorAll(`p`)[2].textContent = `Computador: ${computador}`
            document.querySelectorAll("p")[3].textContent = ``
        }
    };
    JogarTesoura();
});

document.querySelectorAll("img")[1].addEventListener("click",function() {
    const jogarPedra = () => {
        let aleatorio = Math.floor(Math.random() * array.length);
        let EscolhaComputador = array[aleatorio];
        document.querySelectorAll("p")[0].textContent = `O computador jogou: ${EscolhaComputador}`;
        if (EscolhaComputador === "tesoura") {
            ++contadorVitorias
            document.querySelectorAll("p")[1].textContent = `Voce: ${contadorVitorias}`
            document.querySelectorAll("p")[3].textContent = ``
        } else if (EscolhaComputador === "pedra") {
            document.querySelectorAll("p")[3].textContent = "O jogo deu empate!"
        } else{
            document.querySelectorAll(`p`)[2].textContent = `Computador: ${computador}`
            document.querySelectorAll("p")[3].textContent = ``
            ++computador
        }
    }
    jogarPedra();
})


document.querySelectorAll("img")[2].addEventListener("click",function() {
    const jogarPapel = () => {
        let aleatorio = Math.floor(Math.random() * array.length);
        let EscolhaComputador = array[aleatorio];
        document.querySelectorAll("p")[0].textContent = `O computador jogou: ${EscolhaComputador}`;
        if (EscolhaComputador === "pedra") {
            ++contadorVitorias
            document.querySelectorAll("p")[1].textContent = `Voce: ${contadorVitorias}`
            document.querySelectorAll("p")[3].textContent = ``
        }else if (EscolhaComputador === "papel") {
            document.querySelectorAll("p")[3].textContent = "O jogo deu empate!"
        }else{
            document.querySelectorAll("p")[2].textContent = `Computador: ${computador}`
            document.querySelectorAll("p")[3].textContent = ``
            ++computador
        }
    }
    jogarPapel();
})
