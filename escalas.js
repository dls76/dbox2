//===== Plantão de matrículas
let escalaPlantaoDeMatriculas = [
    {data: new Date(2023, 10, 7), person: "Daisy, Eula, Pedrina, Julia, Alexandro"}, 
    {data: new Date(2023, 10, 14), person: "Daisy, Carol, Josi, Eloiza, Nailson"}, 
    {data: new Date(2023, 10, 21), person: "Daisy, Camila, Pedrina, Carin, Douglas"}, 
    {data: new Date(2023, 10, 28), person: "Daisy, Jaque, Josi, Julia, Alexandro"}, 
    {data: new Date(2023, 11, 5), person: "Daisy, Valéria,	Pedrina, Eloiza, Nailson"},
    {data: new Date(2023, 11, 12), person: "Daisy, Malu, Josi, Carin, Douglas"},
    {data: new Date(2023, 11, 19), person: "Daisy, Sarita, Pedrina, Julia, Alexandro"},
]
window.addEventListener('load', proximoPlantaoDeMatricula(escalaPlantaoDeMatriculas))
function proximoPlantaoDeMatricula(array) {

    //Obter a data atual
    const diaDeHoje = new Date();

    // Filtrar as datas que são iguais ou após a data atual
    const proximasDatas = array.filter((item) => item.data >= diaDeHoje || item.data.toDateString() === diaDeHoje.toDateString());

    // Ordenar as datas por ordem crescente
    proximasDatas.sort((a, b) => a.data - b.data);

    // Se houver datas após a data atual, retorna a primeira delas
    if (proximasDatas.length > 0) {
        let dia = proximasDatas[0].data.getDate()
        let mes = proximasDatas[0].data.getMonth() + 1
        dia = dia < 10 ? '0' + dia : dia;
        mes = mes < 10 ? '0' + mes : mes;
        let pessoa = proximasDatas[0].person
        document.querySelector('#titulo-plantao-matriculas').innerHTML = 'Plantão matrículas' +  ' - ' + dia + '/' + mes   
        document.querySelector('#plantaomatriculas').innerHTML = pessoa
    } 
    else {
        // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
        return array[array.length - 1];
        //document.querySelector('#plantaomatriculas').innerHTML = 'Sem dados'
    }
}


//===== Route77
let route = [
    {data: new Date(2023, 7, 12), tema: 'Quebrando o Silêncio', convidado: ''},
    {data: new Date(2023, 7, 26), tema: 'Route no Way On Fire', convidado: ''},
    {data: new Date(2023, 8, 2), tema: 'Celebração Route', convidado: ''},
    {data: new Date(2023, 8, 16), tema: 'Campeonato All Star', convidado: ''},
    {data: new Date(2023, 8, 30), tema: 'Route Adventure - Trilha', convidado: ''},
    {data: new Date(2023, 9, 7), tema: 'Batismo da Primavera', convidado: 'Instituto Hiker'},
    {data: new Date(2023, 9, 21), tema: 'Futuro e Carreira - De repente 30', convidado: 'Prof. Filipe'},
    {data: new Date(2023, 9, 28), tema: 'Conversas de Garota', convidado: 'Maíra Mafra'},
    {data: new Date(2023, 10, 11), tema: 'Show de Talentos | Leilão Champions', convidado: 'Prof. Paulo'},
    {data: new Date(2023, 10, 25), tema: 'Celebração final | Champions League', convidado: 'Pr. Vinícius'},
    {data: new Date(2023, 11, 2), tema: 'Route no Impacto Curitiba', convidado: 'ASP|ACP'},
]
window.addEventListener('load', findNextRoute(route))
function findNextRoute(array) {
    
    // Obter a data atual
    const currentDate = new Date();
  
    // Filtrar as datas que são iguais ou após a data atual
    const futureDates = array.filter((item) => item.data >= currentDate || item.data.toDateString() === currentDate.toDateString());
  
    // Ordenar as datas por ordem crescente
    futureDates.sort((a, b) => a.data - b.data);
  
    // Se houver datas após a data atual, retorna a primeira delas
    if (futureDates.length > 0) {
        document.querySelector('#routescala').innerHTML = futureDates[0].data.getDate() + '/' + (futureDates[0].data.getMonth()+1) + ' - ' + futureDates[0].tema;
    }
    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
}


//===== Plantão sexta
let plantaosexta = [
    {data: new Date(2023, 6, 28), person: "Douglas"}, 
    {data: new Date(2023, 7, 4), person: "Nailson"}, 
    {data: new Date(2023, 7, 11), person: "Alexandro"}, 
    {data: new Date(2023, 7, 18), person: "Pr. Vinícius"}, 
    {data: new Date(2023, 7, 25), person: "Malu"}, 
    {data: new Date(2023, 8, 1), person: "Sarita"}, 
    {data: new Date(2023, 8, 15), person: "Carol"}, 
    {data: new Date(2023, 8, 22), person: "Valéria"}, 
    {data: new Date(2023, 8, 29), person: "Eula"}, 
    
    {data: new Date(2023, 9, 20), person: "Carin"}, 
    {data: new Date(2023, 9, 27), person: "Júlia"},
    
    {data: new Date(2023, 10, 10), person: "Eloiza"}, 
    {data: new Date(2023, 10, 17), person: "Camila"}, 
    {data: new Date(2023, 10, 24), person: "Douglas"}, 
    {data: new Date(2023, 11, 1), person: "Nailson"}, 
    {data: new Date(2023, 11, 8), person: "Alexandro"}, 
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
   document.querySelector('#plantaosexta').innerHTML = 'Sem dados'
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
    {data: new Date(2023, 10, 14), tema: 'Esportiva'},

    {data: new Date(2023, 10, 20), tema: 'Pais'},
    {data: new Date(2023, 10, 21), tema: 'Esportiva'},

    {data: new Date(2023, 10, 27), tema: 'Pais'},
    {data: new Date(2023, 10, 28), tema: 'Esportiva'},

    {data: new Date(2023, 11, 4), tema: 'Pais'},
    {data: new Date(2023, 11, 5), tema: 'Esportiva'},

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
    }
    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
}