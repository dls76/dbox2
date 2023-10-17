let datahoje = new Date()
window.addEventListener('load', cultos)
window.addEventListener('load', oracaopelasescolas)
window.addEventListener('load', plantaoentrevistas)
window.addEventListener('load', plantaoDiarioCompensacao)

// Cultos
function cultos() {

    if (datahoje.getDay() == 0) {
        document.querySelector('#cultos').innerHTML = "Hoje é domingão!"
    }
    if (datahoje.getDay() == 1) {
        document.querySelector('#cultos').innerHTML = 'Diretor'
    }
    if (datahoje.getDay() == 2) {
        document.querySelector('#cultos').innerHTML = 'Pr. Vinícius'
    }
    if (datahoje.getDay() == 3) {
        document.querySelector('#cultos').innerHTML = 'Vice-diretor'
    }
    if (datahoje.getDay() == 4) {
        if ( datahoje.getDate() == 12) {
            document.querySelector('#cultos').innerHTML = 'Feriado' 
        }
        if ( datahoje.getDate() == 19) {
            document.querySelector('#cultos').innerHTML = '7h-Carol' + ' &raquo; ' + '10h10-Valéria' + ' &raquo; ' + '13h-Malú' 
        }
        if ( datahoje.getDate() == 26) {
            document.querySelector('#cultos').innerHTML = '7h-Filipi ' + ' &raquo; ' + ' 10h10-Jaqueline ' + ' &raquo; ' + ' 13h-Joice' 
        }
        if ( datahoje.getDate() == 28) {
            document.querySelector('#cultos').innerHTML = '7h-Pr Leo ' + ' &raquo; ' + '10h10-Sarita ' + ' &raquo; ' + '13h-Pr Leo' 
        }
        
    }
    if (datahoje.getDay() == 5) {
        if (datahoje.getDate() == 8) {
            document.querySelector('#cultos').innerHTML = 'Recesso'
        }
            document.querySelector('#cultos').innerHTML = 'Sexta do Poder - Jejum'
    }
    if (datahoje.getDay() == 6) {
        document.querySelector('#cultos').innerHTML = 'Feliz Sábado!'
    }
}

// Oração
function oracaopelasescolas() {

    if (datahoje.getDay() == 0) { 
        document.querySelector('#oracao').innerHTML = 'Hoje é domingão!'
    }
    if (datahoje.getDay() == 1) { 
        document.querySelector('#oracao').innerHTML = 'CAFRG & CAAP'
    }
    if (datahoje.getDay() == 2) {
        document.querySelector('#oracao').innerHTML = 'CAAB & CCABR'
    }
    if (datahoje.getDay() == 3) { 
        document.querySelector('#oracao').innerHTML = 'CAPI & CAPGUÁ'
    }
    if (datahoje.getDay() == 4) { 
        document.querySelector('#oracao').innerHTML = 'CASJP & EAUV'
    }
    if (datahoje.getDay() == 5) { 
        document.querySelector('#oracao').innerHTML = 'CAC & DEPTO'
    }
    if (datahoje.getDay() == 6) { 
        document.querySelector('#oracao').innerHTML = 'Feliz Sábado!'
    }

}

// Entrevistas
function plantaoentrevistas() {

    if (datahoje.getDay() == 0) { 
        document.querySelector('#plantaoentrevistascontent').innerHTML = 'Hoje é domingão!'
    }
    if (datahoje.getDay() == 1) { 
        document.querySelector('#plantaoentrevistascontent').innerHTML = 'Douglas | Daisy'
    }
    if (datahoje.getDay() == 2) {
        document.querySelector('#plantaoentrevistascontent').innerHTML = 'Jaque | Alexandro'
    }
    if (datahoje.getDay() == 3) { 
        document.querySelector('#plantaoentrevistascontent').innerHTML = 'Valéria | Carol'
    }
    if (datahoje.getDay() == 4) { 
        document.querySelector('#plantaoentrevistascontent').innerHTML = 'Camila | Sarita'
    }
    if (datahoje.getDay() == 5) { 
        document.querySelector('#plantaoentrevistascontent').innerHTML = 'Eula | Malú'
    }
    if (datahoje.getDay() == 6) { 
        document.querySelector('#plantaoentrevistascontent').innerHTML = 'Feliz Sábado!'
    }
    
}

// Compensação e Plantão Diário
function plantaoDiarioCompensacao() {

    if (datahoje.getDay() == 0) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje é domingão!'
        document.querySelector('#nomescomp').innerHTML = 'Hoje é domingão!'
    }    
    if (datahoje.getDay() == 1) { 
        document.querySelector('#plantaodiario').innerHTML = 'Alexandro'
        document.querySelector('#nomescomp').innerHTML = 'Pr. Vinícius'
    }
    if (datahoje.getDay() == 2) {
        document.querySelector('#plantaodiario').innerHTML = 'Nailson'
        document.querySelector('#nomescomp').innerHTML = ''
    }
    if (datahoje.getDay() == 3) { 
        document.querySelector('#plantaodiario').innerHTML = 'Josiane'
        document.querySelector('#nomescomp').innerHTML = 'Jaqueline/Camila | Carin/Nailson'
    }
    if (datahoje.getDay() == 4) { 
        document.querySelector('#plantaodiario').innerHTML = 'Douglas'
        document.querySelector('#nomescomp').innerHTML = 'Valéria | Eula'
    }
    if (datahoje.getDay() == 5) { 
        document.querySelector('#plantaodiario').innerHTML = 'Ver plantão de sexta.'
        document.querySelector('#nomescomp').innerHTML = 'Malú/Douglas | Josi/Ale/Carol/Sarita'
    }
    if (datahoje.getDay() == 6) { 
        document.querySelector('#plantaodiario').innerHTML = 'Feliz Sábado!'
        document.querySelector('#nomescomp').innerHTML = 'Feliz Sábado!'
    }
}

// Plantão sexta
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
    const currentDate = new Date(2023, 9, 6);

    // Filtrar as datas que são iguais ou após a data atual
    const futureDates = array.filter((item)=>
        item.data >= currentDate
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

// Classes Bíblicas
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
    {data: new Date(2023, 10, 7), tema: 'Esportiva'},

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
    const myFutureDates = array.filter( (e) => e.data >= currentDate )
  
    // Ordenar as datas por ordem crescente
    myFutureDates.sort((a, b) => a.data - b.data);
  
    // Se houver datas após a data atual, retorna a primeira delas
    if (myFutureDates.length > 0) {
        document.querySelector('#classesbiblicascontent').innerHTML = myFutureDates[0].data.getDate() + '/' + (myFutureDates[0].data.getMonth()+1) + ' - ' + myFutureDates[0].tema;
    }
    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
}

// Route77
let route = [
    {data: new Date(2023, 7, 12), tema: 'Quebrando o Silêncio', convidado: ''},
    {data: new Date(2023, 7, 26), tema: 'Route no Way On Fire', convidado: ''},
    {data: new Date(2023, 8, 2), tema: 'Celebração Route', convidado: ''},
    {data: new Date(2023, 8, 16), tema: 'Campeonato All Star', convidado: ''},
    {data: new Date(2023, 8, 30), tema: 'Route Adventure - Trilha', convidado: ''},
    {data: new Date(2023, 9, 7), tema: 'Batismo da Primavera', convidado: 'Instituto Hiker'},
    {data: new Date(2023, 9, 21), tema: 'Futuro e Carreira - De repente 30', convidado: 'Prof. Filipe'},
    {data: new Date(2023, 10, 11), tema: 'Show de Talentos | Leilão Champions', convidado: 'Prof. Paulo'},
    {data: new Date(2023, 10, 25), tema: 'Celebração final | Champions League', convidado: 'Pr. Vinícius'},
    {data: new Date(2023, 11, 2), tema: 'Route no Impacto Curitiba', convidado: 'ASP|ACP'},
]
window.addEventListener('load', findNextRoute(route))
function findNextRoute(array) {
    // Obter a data atual
    const currentDate = new Date();
  
    // Filtrar as datas que são iguais ou após a data atual
    const futureDates = array.filter((item) => item.data >= currentDate);
  
    // Ordenar as datas por ordem crescente
    futureDates.sort((a, b) => a.data - b.data);
  
    // Se houver datas após a data atual, retorna a primeira delas
    if (futureDates.length > 0) {
        document.querySelector('#routescala').innerHTML = futureDates[0].data.getDate() + '/' + (futureDates[0].data.getMonth()+1) + ' - ' + futureDates[0].tema;
    }
    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
}

// Última escala
window.addEventListener('load', arredondarBordasInferiores)
function arredondarBordasInferiores() {
    const divescalas = document.querySelectorAll('.escala')
    const escalas = Array.from(divescalas)
    const ultimaescala = escalas.length - 1
    const uesc = escalas[ultimaescala]
    uesc.style.borderRadius = "0 0 12px 12px"
}

// AMA
const btnama = document.querySelector('#bt-ama')
btnama.addEventListener('click', ()=>{
    window.open('https://sistemas.usb.org.br/ama/index.php')
})

// Modal urgências
let modalurgencias = document.querySelector('#fonesurgencias')

modalurgencias.addEventListener('click', ()=>{ 

let bgmodal = document.querySelector('#bgmodal')
bgmodal.classList.add('modalOn')

})

let fecharmodal = document.querySelector('#fecharmodal')
fecharmodal.addEventListener('click', ()=>{

let bgmodal = document.querySelector('#bgmodal')
bgmodal.classList.remove('modalOn')
})

// Novo atendimento
const btnovoatendimento = document.querySelector('#botaonovoatendimento')
btnovoatendimento.addEventListener('click', ()=>{
    window.open("https://dls76.github.io/matriculasDbox/")
})


// Celebras
/*let celebras = [

    {data: new Date(2023, 4, 3), tema: 'Organização Acadêmica', convidado: 'SOE, Direção e Disciplinar', responsavel: 'SOE, Direção e Disciplinar'},
    {data: new Date(2023, 4, 10), tema: 'Organização Acadêmica', convidado: 'Rotina de estudos segundo Daniel', responsavel: 'Pastoral e SOP'},
    {data: new Date(2023, 4, 17), tema: 'Organização Acadêmica', convidado: 'Vídeos produzidos pelos alunos', responsavel: 'Pastoral e SOP'},
    {data: new Date(2023, 4, 24), tema: 'Organização Pessoal - Relacionamentos', convidado: 'Pr Luiz Felipe – Capelania CASJP', responsavel: 'Pastoral'},
    {data: new Date(2023, 4, 31), tema: 'Organização Financeira', convidado: 'Pr Leonardo Pombo – Tesouraria ASP', responsavel: 'Projeto de Vida e Pastoral'},
    
    {data: new Date(2023, 5, 7), tema: 'Educação Ambiental', convidado: 'Secretaria Municipal do Meio Ambiente', responsavel: 'Projeto de Vida e SOP'},
    {data: new Date(2023, 5, 14), tema: 'Jornalismo e Produção Audiovisual', convidado: 'Damáris Gonçalves – Produtora USB', responsavel: 'Projeto de Vida e Pastoral'},
    {data: new Date(2023, 5, 21), tema: 'Áreas do Direito', convidado: 'Isabella Franchetto – Formanda Direito FAE', responsavel: 'Projeto de Vida e Pastoral'},
]
for( i=0; i<celebras.length; i++ ) {

    let d = celebras[i].data.getTime()
    let h = new Date().getTime()
    let r = h - d

if ( r < 86400000 ) {
    
    document.querySelector('#titulocelebra').innerHTML = 'Celebra ' + celebras[i].data.getDate() + '/' + (celebras[i].data.getMonth() + 1)
    document.querySelector('#celebra').innerHTML = celebras[i].tema + ' (' + celebras[i].convidado + ')'

    break
}
}*/


// Ramais telefonicos
let ramais = document.querySelector('#ramais')
ramais.addEventListener('click', ramaisList)

function ramaisList() {
    alert('Alexandro - 7003\nCacilda - 7029\nCamila - 7013\nCarin - 7006\nCarol - 7016\nDaisy - 7042\nDiretor - 7002\nDouglas TI - 7020\nEloiza - 7023\nEula - 7011\nJaque - 7014\nJosiane - 7004\nJúlia - 7007\nMalú - 7010\nMarcio - 7025\nMônica/Thayse - 7028\nNailson - 7019\nPedrina - 7035\nProfessores - 7021\nSandriny - 7031\nSarita - 7012\nStephany - 7022\nValéria - 7009\nVinícius - 7024')
}