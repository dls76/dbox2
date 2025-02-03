export function plantaoDeEntrevistas() {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const diaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const entrevistas = [
        {data: new Date(2025, 1, 3), nomeM: 'Carol', nomeT: 'Renata'},
        {data: new Date(2025, 1, 4), nomeM: 'Murilo', nomeT: 'Jaque'},
        {data: new Date(2025, 1, 5), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2025, 1, 6), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2025, 1, 7), nomeM: 'Andressa', nomeT: 'Camila'},

        {data: new Date(2025, 1, 10), nomeM: 'Carol', nomeT: 'Renata'},
        {data: new Date(2025, 1, 11), nomeM: 'Murilo', nomeT: 'Jaque'},
        {data: new Date(2025, 1, 12), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2025, 1, 13), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2025, 1, 14), nomeM: 'Andressa', nomeT: 'Camila'},
    ];

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    let indexEntrevistaAtual = -1;
    for (let i = 0; i < entrevistas.length; i++) {
        const dataEntrevista = entrevistas[i].data;
        if (dataEntrevista >= hoje) {
            if (dataEntrevista.getDay() !== 0 && dataEntrevista.getDay() !== 6) {
                indexEntrevistaAtual = i;
                break;
            } else {
                indexEntrevistaAtual = i;
            }
        }
    }

    const conteinerEntrevistas = document.querySelector('#conteinerEntrevistas');
    if (conteinerEntrevistas) {
        let mesAtual = -1;

        for (let i = 0; i < entrevistas.length; i++) {
            const mesEntrevista = entrevistas[i].data.getMonth();
            if (mesEntrevista !== mesAtual) {
                mesAtual = mesEntrevista;

                const tituloMes = document.createElement('h3');
                tituloMes.textContent = meses[mesAtual];
                conteinerEntrevistas.appendChild(tituloMes);
            }

            const entrevistasDoDia = document.createElement('div');
            entrevistasDoDia.classList.add("entrevistasDoDia");

            const dia = entrevistas[i].data.getDate().toString().padStart(2, '0');
            const diaSemanaTexto = diaSemana[entrevistas[i].data.getDay()];

            if (i === indexEntrevistaAtual) {
                entrevistasDoDia.classList.add("destaque");
            }

            entrevistasDoDia.innerHTML = `${dia} - ${diaSemanaTexto} - ${entrevistas[i].nomeM} | ${entrevistas[i].nomeT}`;
            conteinerEntrevistas.appendChild(entrevistasDoDia);
        }
    }

    const plantaoDiario = document.querySelector('#plantaodiario');
    if (plantaoDiario) {
        const diaAtualSemana = hoje.getDay();

        if (diaAtualSemana === 6) {
            plantaoDiario.innerHTML = 'Feliz Sábado';
        } else if (diaAtualSemana === 0) {
            plantaoDiario.innerHTML = 'Hoje é domingo';
        } else if (indexEntrevistaAtual !== -1) {
            const entrevistaAtual = entrevistas[indexEntrevistaAtual];
            plantaoDiario.innerHTML = `${entrevistaAtual.nomeM} | ${entrevistaAtual.nomeT}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', plantaoDeEntrevistas);