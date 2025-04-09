window.addEventListener('load', function() {
    loadAniversariantes();
    scrollToNextEvent();
});
    
let dataAtual = new Date();
    
let diaDoMes = ('0' + dataAtual.getDate()).slice(-2);
    
let dataAtualCompleta = document.querySelector('#dataAtualizada');
    
// dataAtualCompleta.innerHTML = `${diasDaSemana[dataAtual.getDay()]}, ${diaDoMes} de ${mss[dataAtual.getMonth()]} de ${dataAtual.getFullYear()}`;

function loadAniversariantes() {

    for (let i = 0; i < pessoas.length; i++) { 
        // Restante do seu código para carregar os aniversariantes
        let h1 = document.querySelector('#h1-aniversariantes');
        h1.classList.add('h1Aniver');
        h1.innerHTML = "Aniversariantes " + dataAtual.getFullYear();

        let main = document.querySelector('#main-aniversariantes');
        main.classList.add('mainAniver');

        let linha = document.createElement('div');
        linha.classList.add('linha');
        main.appendChild(linha);
        
        let dia = document.createElement('div');
        dia.classList.add('dia');

        if ( pessoas[i].dia < 10) {
            dia.innerHTML = '0' + pessoas[i].dia + '<br>' + (mss[pessoas[i].mes]).slice(0,3);
        } else {
            dia.innerHTML = pessoas[i].dia + '<br>' + (mss[pessoas[i].mes]).slice(0,3);
        }

        linha.appendChild(dia);

        let box_foto = document.createElement('div');
        box_foto.classList.add('box-foto');
        linha.appendChild(box_foto);

        let foto = new Image();
        foto.src = pessoas[i].foto;
        foto.classList.add('foto');
        box_foto.appendChild(foto);

        let box_infoPessoa = document.createElement('div');
        box_infoPessoa.classList.add('box-infoPessoa');
        linha.appendChild(box_infoPessoa);

        let nome = document.createElement('div');
        nome.classList.add('nome');
        nome.innerHTML = pessoas[i].nome;
        box_infoPessoa.appendChild(nome);

        let funcao = document.createElement('div');
        funcao.classList.add('funcao');
        funcao.innerHTML = pessoas[i].funcao;
        box_infoPessoa.appendChild(funcao);

        let regressiva = document.createElement('div');
        regressiva.classList.add('regressivaAniver');
        linha.appendChild(regressiva);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Cria a data do aniversário deste ano
        let proximoAniver = new Date(today.getFullYear(), pessoas[i].mes, pessoas[i].dia);

        // Se já passou, ajusta para o próximo ano
        if (proximoAniver < today) {
            proximoAniver = new Date(today.getFullYear() + 1, pessoas[i].mes, pessoas[i].dia);
        }

        const timeDiff = proximoAniver - today;
        const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


        if (daysRemaining < -1) {
            regressiva.innerHTML = `Há ${Math.abs(daysRemaining)} dias`;
            regressiva.style.color = "lightgray";
        } else if (daysRemaining == -1) {
            regressiva.innerHTML = `Ontem`;
            regressiva.style.color = "lightgray";
        } else if (daysRemaining == 0) {
            regressiva.innerHTML = `Hoje!`;
            regressiva.style.color = "red";
            regressiva.style.fontWeight = "600";
        } else if (daysRemaining == 1) {
            regressiva.innerHTML = `Amanhã`;
            regressiva.style.color = "dodgerblue";
            regressiva.style.fontWeight = "600";
        } else {
            regressiva.innerHTML = `Em ${daysRemaining} dias`;
        }

    }
}

function scrollToNextEvent() {
    // Encontre a data atual
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    // Encontre o próximo evento com base na data atual
    const proximoEvento = pessoas.find(evento => evento.data >= hoje);

    // Certifique-se de que há um próximo evento antes de rolar
    if (proximoEvento) {
        // Encontre todos os elementos com a classe 'linha'
        const elementosNextEvent = document.querySelectorAll('.linha');

        // Encontre o índice do próximo evento
        const indiceProximoEvento = pessoas.indexOf(proximoEvento);

        // Certifique-se de que o índice seja válido antes de rolar
        if (indiceProximoEvento !== -1 && indiceProximoEvento < elementosNextEvent.length) {
            // Encontre o elemento do próximo evento
            const proximoEventoElement = elementosNextEvent[indiceProximoEvento];

            // Calcule a posição do próximo evento em relação ao topo do eventosContainer
            let scrollTopValue = proximoEventoElement.offsetTop;

            // Ajuste a posição de rolagem para considerar a altura do cabeçalho fixo
            const headerHeight = document.querySelector('header').offsetHeight;
            scrollTopValue -= headerHeight;

            // Obtenha o contêiner de eventos
            const eventosContainer = document.querySelector('#main-aniversariantes');

            // Rola até o topo do próximo evento, levando em consideração a altura do cabeçalho
            eventosContainer.scrollTop = scrollTopValue - 20;
        }
    }
}
