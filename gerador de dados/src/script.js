
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
  const button = document.querySelectorAll("button")[0]
  const p = document.querySelector(`p`)

  



const gerarCpf = () => {
  const array = [];
  const cpf = document.getElementById("cpf")
  if (cpf.checked) {
    for (let i = 0; i < 11; i++) {
      let gerarCpf = Math.floor(Math.random() * 1000);
      array.push(gerarCpf);
    }
  }
  const juntarArray = array.join("").substring(0, 7);
  p.textContent = `Dados gerados: ${juntarArray}`;
};


const gerarEmail = () => {
  const email = document.getElementById("email")
  if (email.checked) {
    const arrayComNomesEmais = [ 'Ana', 'João', 'Maria', 'Pedro', 'Isabela',
    'Lucas', 'Gabriela', 'Mateus', 'Juliana', 'Fernando', 
    'Amanda', 'Rafael', 'Mariana', 'Diego', 'Carolina',  'Ana', 'João', 
    'Maria', 'Pedro', 'Isabela',  'jhon', 'carla', 'silva'
    ]
    const gerarNomesAleatorios = Math.floor(
      Math.random() * arrayComNomesEmais.length
    );
    const obterNomesGerados = arrayComNomesEmais[gerarNomesAleatorios];

    const arrayNumeros = [];
    for (let i = 0; i < 3; i++) {
      const obterNumeros = Math.floor(Math.random() * 50);
      arrayNumeros.push(obterNumeros);
    }
    const concatenarNumeros = arrayNumeros.join("").substring(0, 3);

    const dominiosEmais = [
      "gmail.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
    ];
    const gerarEmaisDominioEmais = Math.floor(
      Math.random() * dominiosEmais.length
    );
    const obterDominioEmail = dominiosEmais[gerarEmaisDominioEmais];

    const obterEnderecoEmail = obterNomesGerados.concat(
      concatenarNumeros,
      obterDominioEmail
    );

    p.textContent = `Dados gerados:  ${obterEnderecoEmail}`;
  }
};



const gerarNicks = () => {
  const nicks = document.getElementById("nicks");
  if (nicks.checked) {
    const letrasAleatorias = [];
    const numerosAleatorios = [];
    const caractreAleatorios = [];

    for (let i = 0; i <= 2; i++) {
      const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
     'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];
      const gerarAlfabeto = Math.floor(Math.random() * alfabeto.length);
      const obterLetra = alfabeto[gerarAlfabeto];
      letrasAleatorias.push(obterLetra);
    }

    for (let i = 0; i < 1; i++) {
      const gerarNumerosAleatros = Math.floor(Math.random() * 1000);
      numerosAleatorios.push(gerarNumerosAleatros);
    }

    for (let i = 0; i < 1; i++) {
      const caracteresEspeciais = ['!', '@', '#', '$', '%', '^', '&', '*', ' ', '-', '_'];
      const gerarCaractreAleatorio = Math.floor(
        Math.random() * caracteresEspeciais.length
      );
      const retornarCaractre = caracteresEspeciais[gerarCaractreAleatorio];
      caractreAleatorios.push(retornarCaractre);
    }

    const concatenarArrayLetras = letrasAleatorias.join("");
    const concatenarArrayNumeros = numerosAleatorios.join("");
    const concatenarArrayCaractre = caractreAleatorios.join("");
    const juntarArrays = concatenarArrayLetras.concat(
      concatenarArrayNumeros,
      concatenarArrayCaractre
    );
    p.textContent = `Dados gerados:  ${juntarArrays}`;
  }
};
const gerarCep = () => {
  const cep = document.getElementById("cep")
  if (cep.checked) {
   const fakeCEP = faker.address.zipCode();
   p.textContent = `Dados gerados:  ${fakeCEP}`
  }
}



button.addEventListener(`click`, function () {
  gerarCpf();
  gerarEmail();
  gerarNicks();
  gerarCep();
});


