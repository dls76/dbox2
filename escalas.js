//===== Plantão de matrículas
// let escalaPlantaoDeMatriculas = [
//     {data: new Date(2023, 10, 7), person: "Daisy, Eula, Pedrina, Julia, Alexandro"}, 
//     {data: new Date(2023, 10, 14), person: "Daisy, Carol, Josi, Eloiza, Nailson"}, 
//     {data: new Date(2023, 10, 21), person: "Daisy, Camila, Pedrina, Carin, Douglas"}, 
//     {data: new Date(2023, 10, 28), person: "Daisy, Jaque, Josi, Julia, Alexandro"}, 
//     {data: new Date(2023, 11, 5), person: "Daisy, Valéria,	Pedrina, Eloiza, Nailson"},
//     {data: new Date(2023, 11, 12), person: "Daisy, Malu, Josi, Carin, Douglas"},
//     {data: new Date(2023, 11, 19), person: "Daisy, Sarita, Pedrina, Julia, Alexandro"},
// ]
// window.addEventListener('load', proximoPlantaoDeMatricula(escalaPlantaoDeMatriculas))
// function proximoPlantaoDeMatricula(array) {

//     //Obter a data atual
//     const diaDeHoje = new Date();

//     // Filtrar as datas que são iguais ou após a data atual
//     const proximasDatas = array.filter((item) => item.data >= diaDeHoje || item.data.toDateString() === diaDeHoje.toDateString());

//     // Ordenar as datas por ordem crescente
//     proximasDatas.sort((a, b) => a.data - b.data);

//     // Se houver datas após a data atual, retorna a primeira delas
//     if (proximasDatas.length > 0) {
//         let dia = proximasDatas[0].data.getDate()
//         let mes = proximasDatas[0].data.getMonth() + 1
//         dia = dia < 10 ? '0' + dia : dia;
//         mes = mes < 10 ? '0' + mes : mes;
//         let pessoa = proximasDatas[0].person
//         document.querySelector('#titulo-plantao-matriculas').innerHTML = 'Plantão matrículas' /*+  ' - ' + dia + '/' + mes*/   
//         document.querySelector('#plantaomatriculas').innerHTML = pessoa
//     } 
//     else {
//         document.querySelector('#plantaomatriculas').innerHTML = 'Em definição...'
//         // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
//         // return array[array.length - 1];
//         //document.querySelector('#plantaomatriculas').innerHTML = 'Sem dados'
//     }
// }

//===== Route77
// let route = [
//     {data: new Date(2023, 7, 12), tema: 'Quebrando o Silêncio', convidado: ''},
//     {data: new Date(2023, 7, 26), tema: 'Route no Way On Fire', convidado: ''},
//     {data: new Date(2023, 8, 2), tema: 'Celebração Route', convidado: ''},
//     {data: new Date(2023, 8, 16), tema: 'Campeonato All Star', convidado: ''},
//     {data: new Date(2023, 8, 30), tema: 'Route Adventure - Trilha', convidado: ''},
//     {data: new Date(2023, 9, 7), tema: 'Batismo da Primavera', convidado: 'Instituto Hiker'},
//     {data: new Date(2023, 9, 21), tema: 'Futuro e Carreira - De repente 30', convidado: 'Prof. Filipe'},
//     {data: new Date(2023, 9, 28), tema: 'Conversas de Garota', convidado: 'Maíra Mafra'},
//     {data: new Date(2023, 10, 11), tema: 'Show de Talentos | Leilão Champions', convidado: 'Prof. Paulo'},
//     {data: new Date(2023, 11, 3), tema: 'Champions League', convidado: ''},
// ]
// window.addEventListener('load', findNextRoute(route))
// function findNextRoute(array) {
    
//     // Obter a data atual
//     const currentDate = new Date();
  
//     // Filtrar as datas que são iguais ou após a data atual
//     const futureDates = array.filter((item) => item.data >= currentDate || item.data.toDateString() === currentDate.toDateString());
  
//     // Ordenar as datas por ordem crescente
//     futureDates.sort((a, b) => a.data - b.data);
  
//     // Se houver datas após a data atual, retorna a primeira delas
//     if (futureDates.length > 0) {
//         document.querySelector('#routescala').innerHTML = futureDates[0].data.getDate() + '/' + (futureDates[0].data.getMonth()+1) + ' - ' + futureDates[0].tema;
//     } else {
//         document.querySelector('#routescala').innerHTML = 'Em definição...'
//     }
//     // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
//     // return array[array.length - 1];
// }


//===== Plantão sexta

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