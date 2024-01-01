
const botao = document.getElementById(`botao`)


const CriarLista = () => {
    const input = document.getElementById('input').value;
    const p = document.createElement('p');
    const conteudo = document.getElementById(`conteudo`)
    const icon = document.createElement('i');
    
    p.textContent = input;
    conteudo.appendChild(p)
}

botao.addEventListener('click', function() {
    CriarLista();
});

