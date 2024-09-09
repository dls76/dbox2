let array = document.querySelectorAll('.eventBorders');
let ultimoElemento = array[array.length - 1];

ultimoElemento.style.borderBottom = '2px solid gray';

let tituloPagina = document.querySelector('#tituloPagina'); // Seleciona o título da página
let bordas = document.querySelectorAll('.date');
let bg = document.body;
let dia = document.querySelectorAll('.dia');
let mes = document.querySelectorAll('.mes');
let title = document.querySelectorAll('.tituloEvento');
let arrow = document.querySelectorAll('.fa-chevron-right');
let toggleButton = document.querySelector('#toggleButton');

// Função para aplicar estilos
function aplicarEstilos(corTituloPagina, corBorda, corFundo, corTexto, corArrow, modoClaro) {
    bordas.forEach(e => e.style.borderLeftColor = corBorda);
    bg.style.backgroundColor = corFundo;
    
    // Aplica cor aos dias e meses
    dia.forEach(e => e.style.color = corTexto);
    mes.forEach(e => e.style.color = corTexto);
    
    // Aplicar a cor aos títulos de evento
    title.forEach(e => {
        // Remover estilos inline anteriores, caso existam
        e.style.removeProperty('color');
        
        // Aplicar nova cor diretamente no estilo inline, garantindo que sobrescreva qualquer outro estilo
        e.style.setProperty('color', corTexto, 'important');
    });
    
    // Alterar a cor da seta separadamente
    arrow.forEach(e => e.style.color = corArrow);

    // Aplicar a cor ao título da página
    tituloPagina.style.setProperty('color', corTituloPagina, 'important');

    // Alterar hover dinamicamente
    array.forEach(element => {
        if (modoClaro) {
            element.classList.add('modo-claro-hover');  // Adiciona classe para modo claro
        } else {
            element.classList.remove('modo-claro-hover'); // Remove classe quando estiver no modo escuro
        }
    });
}

// Adiciona um evento de mudança (change) no checkbox
toggleButton.addEventListener('change', function() {
    if (this.checked) {
        aplicarEstilos('#000', 'dodgerblue', 'white', '#000', '#000', true); // Modo claro
    } else {
        aplicarEstilos('#fff', 'dodgerblue', '#323232', '#fff', '#fff', false); // Modo escuro
    }
});
