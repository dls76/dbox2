let array = document.querySelectorAll('.eventBorders');
let ultimoElemento = array[array.length - 1];

ultimoElemento.style.borderBottom = '2px solid gray'

let bordas = document.querySelectorAll('.date');
let bg = document.body;
let dia = document.querySelectorAll('.dia');
let mes = document.querySelectorAll('.mes');
let title = document.querySelectorAll('.tituloEvento');
let arrow = document.querySelectorAll('.fa-chevron-right');
let toggleButton = document.querySelector('#toggleButton');

// Função para aplicar estilos
function aplicarEstilos(corBorda, corFundo, corTexto, corArrow) {
    bordas.forEach(e => e.style.borderLeftColor = corBorda);
    bg.style.backgroundColor = corFundo;
    
    [title, dia, mes].forEach(group => {
        group.forEach(e => e.style.color = corTexto);
    });
    
    // Alterar a cor da seta separadamente
    arrow.forEach(e => e.style.color = corArrow);
}

// Adiciona um evento de mudança (change) no checkbox
toggleButton.addEventListener('change', function() {
    if (this.checked) {
        aplicarEstilos('#913CF3', 'white', '#000', '#000');
    } else {
        aplicarEstilos('dodgerblue', '#323232', '#fff', '#fff');
    }
});
