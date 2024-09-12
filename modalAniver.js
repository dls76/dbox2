import { nomes } from './proxAniver.js';


function mostrarModal(aniversariante) {
    const modal = document.getElementById('aniversarianteModal');
    const foto = document.getElementById('fotoAniversariante');
    const nome = document.getElementById('nomeAniversariante');
    const funcao = document.getElementById('funcaoAniversariante');

    // Define os valores no modal
    foto.src = aniversariante.foto;

    // Extrai o nome da pessoa conforme a regra (dois ou três nomes)
    const nomes = aniversariante.nome.split(' ');
    let nomeExibido;
    if (nomes[1] && nomes[1].length <= 3 && nomes[2]) {
        nomeExibido = `${nomes[0]} ${nomes[1]} ${nomes[2]}`;
    } else {
        nomeExibido = `${nomes[0]} ${nomes[1]}`;
    }

    nome.textContent = nomeExibido;
    funcao.textContent = aniversariante.funcao;

    // Exibe o modal
    modal.style.display = 'block';

    // Fecha o modal ao clicar no "x"
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    };

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Chama a função ao carregar a página
window.onload = adicionarProximosAniversariantes;
