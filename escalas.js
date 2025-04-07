const reuniaoadm = [
    { data: new Date(2025, 1, 11), link: 'https://docs.google.com/document/d/156fZLY64Ek7Rp1o2TqvozNcY9C5StDO3YjMnDiCrqVs/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 1, 18), link: 'https://docs.google.com/document/d/1U-kMueb17ViNZQ_tDXZfhgcpQmMFruQhFwM4ShrskG8/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 1, 25), link: 'https://docs.google.com/document/d/1wz3gE9hmnWQhB49L_hAB7ue-iR3USJPdsmXiw4wCy5E/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 2, 11), link: 'https://docs.google.com/document/d/1zWy9d7jIYYxMye3dvr_uZNpOGrGrBNQXxMQ3n3tG7Xs/edit?usp=sharing', hora: '14h' },
    { data: new Date(2025, 2, 18), link: 'https://docs.google.com/document/d/1VZ_lhrittOKwXyG1l-4TAGIau4F_ZKL1xaLSlJyc0Vc/edit?usp=sharing', hora: '14h' },
    { data: new Date(2025, 2, 25), link: 'https://docs.google.com/document/d/1jOR4o663EtSDQc2CfZFRH9NldRNHOymZAuFyU1Wr6zk/edit?usp=sharing', hora: '14h' },
    { data: new Date(2025, 3, 1), link: 'https://docs.google.com/document/d/1mj0Yjc5Y24-RDtN6HIFbamM6wvxS-oR9f379403MeBk/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 3, 8), link: 'https://docs.google.com/document/d/1PoJ92xQ3alOjUxmsaD-pTDqmLYyKYxOF8BWvdHSTH08/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 3, 15), link: 'https://docs.google.com/document/d/1Sfy95UJORUr6navCZGJcl-IYul553bI9i9Dp3aSc0jc/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 3, 22), link: 'https://docs.google.com/document/d/1lkiE9-5cC2YbA3grxQZyZMoD92UvoBUAiCzNBIIF79Y/edit?tab=t.0', hora: '14h' },
    { data: new Date(2025, 3, 29), link: 'https://docs.google.com/document/d/1FAvo5T1zLLtX4_NJOJoKJijxx8DVBs3gLgYY70H5Q6I/edit?tab=t.0', hora: '14h' },
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

export let plantaosexta = [
    // { data: new Date(2025, 1, 7), person: "Murilo", monitoria: "Lincon e Carmelis" },
    // { data: new Date(2025, 1, 14), person: "Douglas", monitoria: "Gabriel e Isabele" },
    // { data: new Date(2025, 1, 21), person: "Leonardo", monitoria: "Kadu e Rose" },
    // { data: new Date(2025, 1, 28), person: "Vinícius", monitoria: "Daniel e Eliane" },
    // { data: new Date(2025, 2, 7), person: "Nailson", monitoria: "Christian e Lucia" },
    // { data: new Date(2025, 2, 14), person: "Carol", monitoria: "Lucas e Carmelis" },
    // { data: new Date(2025, 2, 21), person: "Malu", monitoria: "Lincon e Isabele" },
    { data: new Date(2025, 2, 28), person: "Andressa", monitoria: "Douglas e Rose" },
    { data: new Date(2025, 3, 4), person: "Jaque", monitoria: "Kadu e Eliane" },
    { data: new Date(2025, 3, 11), person: "Renata", monitoria: "Daniel e Lucia" },
    { data: new Date(2025, 3, 25), person: "Camila", monitoria: "Wesley e Yasmille" },
    { data: new Date(2025, 4, 9), person: "Valeria", monitoria: "Henrique e Rose" },
    { data: new Date(2025, 4, 16), person: "Carin", monitoria: "Douglas e Eliane" },
    { data: new Date(2025, 4, 23), person: "Josi", monitoria: "Kadu e Lucia" },
    { data: new Date(2025, 4, 30), person: "Alícia", monitoria: "Daniel e Carmelis" },
    { data: new Date(2025, 5, 6), person: "Nailson", monitoria: "Christian e Yasmille" },
    { data: new Date(2025, 5, 13), person: "Diretor", monitoria: "Wesley e Rose" },
    { data: new Date(2025, 5, 20), person: "Feriado", monitoria: "Feriado" },
    { data: new Date(2025, 5, 27), person: "Vinícius", monitoria: "Douglas e Lucia" },
    { data: new Date(2025, 6, 4), person: "Leonardo", monitoria: "Douglas e Lucia" },
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