
let plantaosexta = [
    {data: new Date(2025, 1, 7), person: "Nailson", monitoria: "Lincon e Carmelis"},
    {data: new Date(2025, 1, 14), person: "Douglas", monitoria: "Gabriel e Isabele"},
    {data: new Date(2025, 1, 21), person: "Pr. Vinícius", monitoria: "Kadu e Rose"},
    {data: new Date(2025, 1, 28), person: "Murilo", monitoria: "Daniel e Eliane"},
    {data: new Date(2025, 2, 7), person: "Renata", monitoria: "Christian e Lucia"},
    {data: new Date(2025, 2, 14), person: "Andressa", monitoria: "Lucas e Carmelis"},
    {data: new Date(2025, 2, 21), person: "Jaque", monitoria: "Lincon e Isabele"},
    {data: new Date(2025, 2, 28), person: "Malu", monitoria: "Gabriel e Rose"},
    {data: new Date(2025, 3, 4), person: "Valéria", monitoria: "Kadu e Eliane"},
    {data: new Date(2025, 3, 11), person: "Camila", monitoria: "Daneiel e Lucia"},
    {data: new Date(2025, 3, 18), person: "Josi", monitoria: "Christian e Carmelis"},
    {data: new Date(2025, 3, 25), person: "Carin", monitoria: "Lincon e Isabele"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Gabriel e Rose"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Kadu e Eliane"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Daniel e Lucia"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Christian e Carmelis"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Lucas e Isabele"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Lincon e Rose"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Gabriel e Eliane"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Kadu e Lucia"},
    // {data: new Date(2025, 4, 9), person: "Carol", monitoria: "Daniel e Carmelis"},
    
    


// Carlos Eduardo (Kadu) e Eliane
// 16/05/25
// Daniel e Lucia
// 23/05/25
// Christian e Carmelis
// 30/05/25
// Lucas e Isabele
// 06/06/25
// Lincon e Rose
// 13/06/25
// Gabriel e Eliane
// 20/06/25
// Carlos Eduardo (Kadu) e Lucia
// 27/06/25
// Daniel e Carmelis
// 04/07/25
    
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

        document.querySelector('#plantaosexta').innerHTML    = `${dia}/${mes} - ${pessoa}, ${monitoria}`;
    } 
    // else {
        // Caso contrário, retorna uma mensagem de definição futura
    //     document.querySelector('#plantaosexta').innerHTML = 'Em construção';
    // }
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
    {data: new Date(2025, 1, 11), link: 'https://docs.google.com/document/d/156fZLY64Ek7Rp1o2TqvozNcY9C5StDO3YjMnDiCrqVs/edit?tab=t.0', hora: '14h'},   
    {data: new Date(2025, 1, 18), link: 'https://docs.google.com/document/d/1U-kMueb17ViNZQ_tDXZfhgcpQmMFruQhFwM4ShrskG8/edit?tab=t.0', hora: '14h'},   
    {data: new Date(2025, 1, 25), link: 'https://docs.google.com/document/d/1wz3gE9hmnWQhB49L_hAB7ue-iR3USJPdsmXiw4wCy5E/edit?tab=t.0', hora: '14h'},   
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