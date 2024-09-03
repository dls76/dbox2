export function plantaoDeEntrevistas() {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const diaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const entrevistas = [
        {data: new Date(2024, 8, 2), nomeM: 'Carol', nomeT: 'Valéria'},
        {data: new Date(2024, 8, 3), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 4), nomeM: 'Malú', nomeT: 'Renata'},
        {data: new Date(2024, 8, 5), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 8, 6), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 8, 9), nomeM: 'Carol', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 10), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 11), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 8, 12), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 8, 13), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 8, 16), nomeM: 'Carol', nomeT: 'Andressa'},
        {data: new Date(2024, 8, 17), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 18), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 8, 19), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 8, 20), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 8, 23), nomeM: 'Carol', nomeT: 'Malú'},
        {data: new Date(2024, 8, 24), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 8, 25), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 8, 26), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 8, 27), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 8, 30), nomeM: 'Carol', nomeT: 'Carol'},
        {data: new Date(2024, 9, 1), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 9, 2), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 9, 3), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 9, 4), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 9, 7), nomeM: 'Carol', nomeT: 'Camila'},
        {data: new Date(2024, 9, 8), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 9, 9), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 9, 10), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 9, 11), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 9, 14), nomeM: 'Carol', nomeT: 'Renata'},
        {data: new Date(2024, 9, 15), nomeM: 'Alexandro', nomeT: 'Jaque'},
        {data: new Date(2024, 9, 16), nomeM: 'Renata', nomeT: 'Malú'},
        {data: new Date(2024, 9, 17), nomeM: 'Valéria', nomeT: 'Douglas'},
        {data: new Date(2024, 9, 18), nomeM: 'Andressa', nomeT: 'Camila'},
        {data: new Date(2024, 9, 19), nomeM: 'Carol', nomeT: 'Valéria'},
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
