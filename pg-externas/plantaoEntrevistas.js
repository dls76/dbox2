export function plantaoDeEntrevistas() {

    console.log('A função foi chamada.')
    
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const diaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const entrevistas = [
        {data: new Date(2024, 8, 2), nomeM: 'Carol', nomeT: 'Valéria'},
        {data: new Date(2024, 8, 3), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 4), nomeM: 'Malú', nomeT: 'Renata'},
        {data: new Date(2024, 8, 5), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 8, 6), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 8, 9), nomeM: 'Carol', nomeT: 'Valéria'},
        {data: new Date(2024, 8, 10), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 11), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 8, 12), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 8, 13), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 8, 16), nomeM: 'Carol', nomeT: 'Valéria'},
        {data: new Date(2024, 8, 17), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 18), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 8, 19), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 8, 20), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 8, 23), nomeM: 'Carol', nomeT: 'Valéria'},
        {data: new Date(2024, 8, 24), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 25), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 8, 26), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 8, 27), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 8, 30), nomeM: 'Carol', nomeT: 'Valéria'},
        {data: new Date(2024, 9, 1), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 9, 2), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 9, 3), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 9, 4), nomeM: 'Andressa', nomeT: 'Camila'},
    ];

    // Obter a data atual
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zerando a hora para comparar apenas data

    // Encontrar a entrevista do dia ou a próxima em dia útil
    let indexEntrevistaAtual = -1;
    for (let i = 0; i < entrevistas.length; i++) {
        const dataEntrevista = entrevistas[i].data;
        if (dataEntrevista >= hoje) {
            // Verifica se é um final de semana e se houver entrevista futura
            if (dataEntrevista.getDay() !== 0 && dataEntrevista.getDay() !== 6) {
                indexEntrevistaAtual = i;
                break;
            } else {
                // Procurar próxima data em que há entrevista
                indexEntrevistaAtual = i;
            }
        }
    }

    let mesAtual = -1; // Inicializa uma variável para rastrear o mês atual
    const conteinerEntrevistas = document.querySelector('#conteinerEntrevistas');

    for (let i = 0; i < entrevistas.length; i++) {
        const mesEntrevista = entrevistas[i].data.getMonth();
        
        // Se o mês da entrevista for diferente do mês atual, adicione um título de mês
        if (mesEntrevista !== mesAtual) {
            mesAtual = mesEntrevista;

            const tituloMes = document.createElement('h3');
            tituloMes.textContent = meses[mesAtual];
            conteinerEntrevistas.appendChild(tituloMes);
        }

        const entrevistasDoDia = document.createElement('div');
        entrevistasDoDia.classList.add("entrevistasDoDia");

        // Obter o dia da entrevista e adicionar zero à esquerda se necessário
        const dia = entrevistas[i].data.getDate().toString().padStart(2, '0');
        const diaSemanaTexto = diaSemana[entrevistas[i].data.getDay()];

        // Adicionar destaque para a entrevista do dia atual ou próxima data útil
        if (i === indexEntrevistaAtual) {
            entrevistasDoDia.classList.add("destaque");
        }

        // Exibir a data com zero à esquerda
        entrevistasDoDia.innerHTML = `${dia} - ${diaSemanaTexto} - ${entrevistas[i].nomeM} | ${entrevistas[i].nomeT}`;

        conteinerEntrevistas.appendChild(entrevistasDoDia);
    }

    // Atualizar o conteúdo de #plantaodiario
    const plantaoDiario = document.querySelector('#plantaodiario');
    const diaAtualSemana = hoje.getDay();

    if (diaAtualSemana === 6) { // Sábado
        plantaoDiario.innerHTML = 'Feliz Sábado';
    } else if (diaAtualSemana === 0) { // Domingo
        plantaoDiario.innerHTML = 'Hoje é domingo';
    } else if (indexEntrevistaAtual !== -1) {
        // Adiciona os valores das propriedades nomeM e nomeT
        const entrevistaAtual = entrevistas[indexEntrevistaAtual];
        plantaoDiario.innerHTML = `${entrevistaAtual.nomeM} | ${entrevistaAtual.nomeT}`;
    }
    
    document.addEventListener('DOMContentLoaded', plantaoDeEntrevistas);
}
