
let plantaosexta = [
    {data: new Date(2024, 11, 27), person: "Próxima escala em fev"/*, monitoria: "Isa e Lucas"*/},
    {data: new Date(2025, 0, 3), person: "Próxima escala em fev"/*, monitoria: "Isa e Lucas"*/},
    {data: new Date(2025, 0, 10), person: "Próxima escala em fev"/*, monitoria: "Isa e Lucas"*/},
    {data: new Date(2025, 0, 17), person: "Próxima escala em fev"/*, monitoria: "Isa e Lucas"*/},
    
]

window.addEventListener('load', proximoPlantaoDeSexta(plantaosexta))

function proximoPlantaoDeSexta(array) {

    const currentDate = new Date(); 
    const todayAtMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0, 0); // Data atual sem horas

    // Filtrar as datas que são iguais ou após a data atual
    const futureDates = array.filter(item => item.data >= todayAtMidnight);

    // Ordenar as datas por ordem crescente
    futureDates.sort((a, b) => a.data - b.data);

    // Se houver datas após a data atual, retorna a primeira delas
    if (futureDates.length > 0) {
        let dia = futureDates[0].data.getDate();
        let mes = futureDates[0].data.getMonth() + 1;
        dia = dia < 10 ? '0' + dia : dia;
        mes = mes < 10 ? '0' + mes : mes;
        let pessoa = futureDates[0].person;
        let monitoria = futureDates[0].monitoria;

        // document.querySelector('#plantaosexta').innerHTML    = `${dia}/${mes} - ${pessoa}, ${monitoria}`;
        document.querySelector('#plantaosexta').innerHTML = `Férias`;
    } else {
        // Caso contrário, retorna uma mensagem de definição futura
        document.querySelector('#plantaosexta').innerHTML = 'Próxima escala em 2025';
    }
}

function mostrarPlantaoDeSexta() {
    let main = document.querySelector('#main');
    
    plantaosexta.forEach(item => {
        let dia = item.data.getDate();
        let mes = item.data.getMonth() + 1;
        dia = dia < 10 ? '0' + dia : dia;
        mes = mes < 10 ? '0' + mes : mes;

        let div = document.createElement('div');
        div.classList.add('itemplantao');
        div.innerHTML = `${dia}/${mes} - ${item.person} (Monitoria: ${item.monitoria})`;
        main.appendChild(div);
    });
}

const diaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let reuniaoadm = [
    // {data: new Date(2024, 11, 9), link: 'https://docs.google.com/document/d/1tTqxSn2NH6EkcadEhb5RWnngNLDCDhWMO3nri6YP35s/edit', hora: '14:00'},   
    {data: new Date(2025, 0, 16), link: 'https://docs.google.com/document/d/1tTqxSn2NH6EkcadEhb5RWnngNLDCDhWMO3nri6YP35s/edit', hora: 'horário a definir'},   
]
window.addEventListener('load', () => proximaReuniaoAdm(reuniaoadm)); 
// Corrigido para garantir que proximaReuniaoAdm seja passada como uma função

function proximaReuniaoAdm(array) {

    const currentDate = new Date();

    const futureDates = array.filter((item)=>
        item.data >= currentDate || (item.data.getFullYear() === currentDate.getFullYear() && item.data.getMonth() === currentDate.getMonth() && item.data.getDate() === currentDate.getDate())
    );

    futureDates.sort((a, b) => a.data - b.data);

    if (futureDates.length > 0) {
        let mes = futureDates[0].data.getMonth();
        let dia = futureDates[0].data.getDate();
        dia = dia < 10 ? '0' + dia : dia;
        mes = mes < 9 ? '0' + (mes + 1) : (mes + 1); 
        let link = document.querySelector('#ralink')
        let linkrapidora = document.querySelector('#linkrapidora')

        document.querySelector('#reuniaoadm').innerHTML = `${diaDaSemana[futureDates[0].data.getDay()]}, ${dia} de ${mesesDoAno[mes - 1]} - ${futureDates[0].hora}`; 
        link.setAttribute("href", futureDates[0].link)
        linkrapidora.setAttribute("href", futureDates[0].link)
    } else {
        document.querySelector('#reuniaoadm').innerHTML = 'Data e horário a definir'
    }
}