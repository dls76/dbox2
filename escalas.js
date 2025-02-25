const reuniaoadm = [
    { data: new Date(2025, 1, 11), link: 'https://docs.google.com/document/d/156fZLY64Ek7Rp1o2TqvozNcY9C5StDO3YjMnDiCrqVs/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 1, 18), link: 'https://docs.google.com/document/d/1U-kMueb17ViNZQ_tDXZfhgcpQmMFruQhFwM4ShrskG8/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 1, 25), link: 'https://docs.google.com/document/d/1wz3gE9hmnWQhB49L_hAB7ue-iR3USJPdsmXiw4wCy5E/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 2, 4), link: 'https://docs.google.com/document/d/1zWy9d7jIYYxMye3dvr_uZNpOGrGrBNQXxMQ3n3tG7Xs/edit?usp=sharing', hora: '14h' },
];

const diaDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

window.addEventListener('load', function() {
    proximaReuniaoAdm(reuniaoadm);
});

function proximaReuniaoAdm(array) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalizando a data para evitar problemas com horários

    const futureDates = array.filter(item => {
        const itemDate = new Date(item.data);
        itemDate.setHours(0, 0, 0, 0);
        return itemDate >= today;
    });

    futureDates.sort((a, b) => a.data - b.data);

    const reuniaoAdmElement = document.querySelector('#reuniaoadm');
    const linkElement = document.querySelector('#ralink');
    const linkRapidoraElement = document.querySelector('#linkrapidora');

    if (!reuniaoAdmElement || !linkElement || !linkRapidoraElement) {
        console.error('Elemento não encontrado no DOM.');
        return;
    }

    if (futureDates.length > 0) {
        const proxReuniao = futureDates[0];
        let dia = proxReuniao.data.getDate().toString().padStart(2, '0');
        let mes = (proxReuniao.data.getMonth() + 1).toString().padStart(2, '0');

        reuniaoAdmElement.innerHTML = `${diaDaSemana[proxReuniao.data.getDay()]}, ${dia} de ${mesesDoAno[mes - 1]} - ${proxReuniao.hora}`;
        linkElement.setAttribute("href", proxReuniao.link);
        linkRapidoraElement.setAttribute("href", proxReuniao.link);
    } else {
        reuniaoAdmElement.innerHTML = 'Data e horário a definir';
    }
}

window.addEventListener('load', () => {
    proximoPlantaoDeSexta(plantaosexta);
});


let plantaosexta = [
    { data: new Date(2025, 1, 7), person: "Murilo", monitoria: "Lincon e Carmelis" },
    { data: new Date(2025, 1, 14), person: "Douglas", monitoria: "Gabriel e Isabele" },
    { data: new Date(2025, 1, 21), person: "Leonardo", monitoria: "Kadu e Rose" },
    { data: new Date(2025, 1, 28), person: "Vinícius", monitoria: "Daniel e Eliane" },
    { data: new Date(2025, 2, 7), person: "Nailson", monitoria: "Christian e Lucia" },
    { data: new Date(2025, 2, 14), person: "Carol", monitoria: "Lucas e Carmelis" },
    { data: new Date(2025, 2, 21), person: "Renata", monitoria: "Lincon e Isabele" },
    { data: new Date(2025, 2, 28), person: "Andressa", monitoria: "Gabriel e Rose" },
    { data: new Date(2025, 3, 4), person: "Jaque", monitoria: "Kadu e Eliane" },
    { data: new Date(2025, 3, 11), person: "Malu", monitoria: "Daniel e Lucia" },
    { data: new Date(2025, 3, 25), person: "Camila", monitoria: "Lincon e Isabele" },
    { data: new Date(2025, 4, 9), person: "Valeria", monitoria: "Gabriel e Rose" },
    { data: new Date(2025, 4, 16), person: "Carin", monitoria: "Kadu e Eliane" },
    { data: new Date(2025, 4, 23), person: "Josi", monitoria: "Daniel e Lucia" },
    { data: new Date(2025, 4, 30), person: "Alícia", monitoria: "Christian e Carmelis" },
    { data: new Date(2025, 5, 6), person: "Nailson", monitoria: "Lucas e Isabele" },
    { data: new Date(2025, 5, 13), person: "Douglas", monitoria: "Lincon e Rose" },
    { data: new Date(2025, 5, 27), person: "Vinícius", monitoria: "Kadu e Lucia" },
    { data: new Date(2025, 6, 4), person: "Leonardo", monitoria: "Daniel e Carmelis" },
    { data: new Date(2025, 6, 25), person: "Murilo", monitoria: "" },
    { data: new Date(2025, 7, 1), person: "Carol", monitoria: "" },
    { data: new Date(2025, 7, 8), person: "Renata", monitoria: "" },
    { data: new Date(2025, 7, 15), person: "Andressa", monitoria: "" },
    { data: new Date(2025, 7, 22), person: "Jaque", monitoria: "" },
    { data: new Date(2025, 7, 29), person: "Malu", monitoria: "" },
    { data: new Date(2025, 8, 5), person: "Camila", monitoria: "" },
    { data: new Date(2025, 8, 12), person: "Valéria", monitoria: "" },
    { data: new Date(2025, 8, 19), person: "Carin", monitoria: "" },
    { data: new Date(2025, 8, 26), person: "Josi", monitoria: "" },
    { data: new Date(2025, 9, 3), person: "Alícia", monitoria: "" },
    { data: new Date(2025, 9, 10), person: "Nailson", monitoria: "" },
    { data: new Date(2025, 9, 17), person: "Douglas", monitoria: "" },
    { data: new Date(2025, 9, 24), person: "Vinícius", monitoria: "" },
    { data: new Date(2025, 9, 31), person: "Leonardo", monitoria: "" },
    { data: new Date(2025, 10, 7), person: "Murilo", monitoria: "" },
    { data: new Date(2025, 10, 14), person: "Nailson", monitoria: "" },
    { data: new Date(2025, 10, 21), person: "Douglas", monitoria: "" },
    { data: new Date(2025, 10, 28), person: "Vinícius", monitoria: "" },
    { data: new Date(2025, 11, 5), person: "Leonardo", monitoria: "" },
    { data: new Date(2025, 12, 12), person: "Murilo", monitoria: "" }
];


function proximoPlantaoDeSexta(array) {
    
    const currentDate = new Date();
    const todayAtMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0, 0);
    const futureDates = array.filter(item => item.data >= todayAtMidnight);
    futureDates.sort((a, b) => a.data - b.data);
    
    if (futureDates.length > 0) {
        let dia = futureDates[0].data.getDate();
        let mes = futureDates[0].data.getMonth() + 1;
        dia = dia < 10 ? '0' + dia : dia;
        mes = mes < 10 ? '0' + mes : mes;
        let pessoa = futureDates[0].person;
        let monitoria = futureDates[0].monitoria;
        document.querySelector('#plantaosexta').innerHTML = `${dia}/${mes} - ${pessoa}, ${monitoria}`;
    }
    
}

function formatarData(data) {
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
    return `${dia}/${mes}`;
}

function mostrarPlantaoDeSexta() {
    let main = document.querySelector('#main');
    let currentMonth = null;

    plantaosexta.forEach(item => {
        let nomeMes = mesesDoAno[item.data.getMonth()];

        if (nomeMes !== currentMonth) {
            let tituloMes = document.createElement('h1');
            tituloMes.textContent = nomeMes;
            main.appendChild(tituloMes);
            currentMonth = nomeMes;
        }

        let dataFormatada = formatarData(item.data);

        let div = document.createElement('div');
        div.classList.add('itemplantao');
        div.innerHTML = `${dataFormatada} - ${item.person} (Monitoria: ${item.monitoria})`;
        main.appendChild(div);
    });
}
