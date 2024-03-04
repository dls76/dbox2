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
    {data: new Date(2024, 1, 8), person: "Alexandro"}, 
    {data: new Date(2024, 2, 1), person: "Nailson"}, 
    {data: new Date(2024, 2, 8), person: "Douglas"}, 
    {data: new Date(2024, 2, 15), person: "Pr. Vinícius"}, 
    {data: new Date(2024, 2, 22), person: "Josi"}, 
    {data: new Date(2024, 2, 29), person: "Malu"}, 
    {data: new Date(2024, 3, 5), person: "Sarita"}, 
    {data: new Date(2024, 3, 12), person: "Carol"}, 
    {data: new Date(2024, 3, 19), person: "Valéria"}, 
    {data: new Date(2024, 3, 26), person: "Andressa"}, 
    {data: new Date(2024, 4, 3), person: "Camila"}, 
    {data: new Date(2024, 4, 10), person: "Júlia"},
    {data: new Date(2024, 4, 17), person: "Carin"}, 
    {data: new Date(2024, 4, 24), person: "Recepcionista"}, 
    {data: new Date(2024, 4, 31), person: "Auxiliar Tesouraria"}, 
    {data: new Date(2024, 5, 7), person: "Promotora Matrículas"}, 
    {data: new Date(2024, 5, 14), person: "Biblioteca 1"}, 
    {data: new Date(2024, 5, 21), person: "Biblioteca 2"}, 
    {data: new Date(2024, 5, 28), person: "TI"}, 
    {data: new Date(2024, 6, 5), person: "TI2"}, 
    {data: new Date(2024, 6, 12), person: ""}, 
    {data: new Date(2024, 6, 19), person: ""}, 
    {data: new Date(2024, 6, 26), person: ""}, 
    {data: new Date(2024, 7, 2), person: ""}, 
]

window.addEventListener('load', proximoPlantaoDeSexta(plantaosexta))
function proximoPlantaoDeSexta(array) {
    const currentDate = new Date();

    // Filtrar as datas que são iguais ou após a data atual
    const futureDates = array.filter((item)=>
        item.data >= currentDate || item.data.toDateString() === currentDate.toDateString()
    );

    // Ordenar as datas por ordem crescente
    futureDates.sort((a, b) => a.data - b.data);

    // Se houver datas após a data atual, retorna a primeira delas
    if (futureDates.length > 0) {
        let dia = futureDates[0].data.getDate()
        let mes = futureDates[0].data.getMonth() + 1
        dia = dia < 10 ? '0' + dia : dia;
        mes = mes < 10 ? '0' + mes : mes;
        let pessoa = futureDates[0].person
        document.querySelector('#plantaosexta').innerHTML = dia + '/' + mes + ' - ' +  pessoa
    } else {
    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
   document.querySelector('#plantaosexta').innerHTML = 'Em definição...'
    }
}

//===== Classes Bíblicas
let classesbiblicas = [

    {data: new Date(2023, 6, 31), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 7, 7), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 7, 8), tema: 'Classe Bíblica Esportiva'},
    
    {data: new Date(2023, 7, 14), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 7, 21), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 7, 22), tema: 'Classe Bíblica Esportiva'},

    {data: new Date(2023, 7, 28), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 8, 4), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 8, 5), tema: 'Classe Bíblica Esportiva'},

    {data: new Date(2023, 8, 11), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 8, 12), tema: 'Classe Bíblica Esportiva'},

    {data: new Date(2023, 8, 18), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 8, 25), tema: 'Classe Bíblica de Pais'},
    {data: new Date(2023, 8, 26), tema: 'Classe Bíblica Esportiva'},
    
    {data: new Date(2023, 9, 10), tema: 'Classe Bíblica Esportiva'},
    
    {data: new Date(2023, 9, 16), tema: 'Pais'},
    {data: new Date(2023, 9, 17), tema: 'Esportiva'},

    {data: new Date(2023, 9, 23), tema: 'Pais'},
    {data: new Date(2023, 9, 24), tema: 'Esportiva'},

    {data: new Date(2023, 9, 30), tema: 'Pais'},
    {data: new Date(2023, 9, 31), tema: 'Esportiva'},

    {data: new Date(2023, 10, 6), tema: 'Pais'},
    {data: new Date(2023, 10, 7), tema: 'Classe Bíblica Esportiva'},

    {data: new Date(2023, 10, 13), tema: 'Pais'},

    {data: new Date(2023, 10, 28), tema: 'Pais (casa)'},

    // {data: new Date(2023, 11, 25), tema: 'Feliz Natal e Ano Novo!'},

]
window.addEventListener('load', findNextBibleClass(classesbiblicas))
function findNextBibleClass(array) {
    // Obter a data atual
    const currentDate = new Date();
  
    // Filtrar as datas que são iguais ou após a data atual
    const myFutureDates = array.filter( (e) => e.data >= currentDate || e.data.toDateString() === currentDate.toDateString() )
  
    // Ordenar as datas por ordem crescente
    myFutureDates.sort((a, b) => a.data - b.data);
  
    // Se houver datas após a data atual, retorna a primeira delas
    if (myFutureDates.length > 0) {
        document.querySelector('#classesbiblicascontent').innerHTML = myFutureDates[0].data.getDate() + '/' + (myFutureDates[0].data.getMonth()+1) + ' - ' + myFutureDates[0].tema;
    } else {
        document.querySelector('#classesbiblicascontent').innerHTML = 'Em definição...'
    }

    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
}

const diaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

const mesesDoAno = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

let reuniaoadm = [
    {data: new Date(2024, 1, 19)}, 
    {data: new Date(2024, 1, 26)}, 
    {data: new Date(2024, 2, 4)}, 
    {data: new Date(2024, 2, 11)}, 
    {data: new Date(2024, 2, 18)}, 
    {data: new Date(2024, 2, 25)}, 
]
window.addEventListener('load', proximaReuniaoAdm(reuniaoadm))

function proximaReuniaoAdm(array) {
    const currentDate = new Date();

    // Filtrar as datas que são iguais ou após a data atual
    const futureDates = array.filter((item)=>
        item.data >= currentDate || item.data.toDateString() === currentDate.toDateString()
    );

    // Ordenar as datas por ordem crescente
    futureDates.sort((a, b) => a.data - b.data);

    // Se houver datas após a data atual, retorna a primeira delas
    if (futureDates.length > 0) {
        let dia = futureDates[0].data.getDate()
        let mes = futureDates[0].data.getMonth()
        dia = dia < 10 ? '0' + dia : dia;
        // mes = mes < 10 ? '0' + mes : mes;
        // let pessoa = futureDates[0].person
        document.querySelector('#reuniaoadm').innerHTML = `${diaDaSemana[futureDates[0].data.getDay()]}, ${dia} de ${mesesDoAno[mes]} | 14:00`

    } else {
    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
   document.querySelector('#reuniaoadm').innerHTML = 'Em definição...'
    }
}