let datahoje = new Date()

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
    {data: new Date(2023, 9, 6), person: "Jaque"}, 
    {data: new Date(2023, 9, 13), person: "Secretária"}, 
    {data: new Date(2023, 9, 20), person: "Pedrina"}, 
    {data: new Date(2023, 9, 27), person: "Júlia"}, 
    {data: new Date(2023, 10, 3), person: "Eloisa"}, 
    {data: new Date(2023, 10, 10), person: "Camila"}, 
]

window.addEventListener('load', proximoPlantaoDeSexta(plantaosexta))
function proximoPlantaoDeSexta(array) {
    const currentDate = new Date();

    // Filtrar as datas que são iguais ou após a data atual
    const futureDates = array.filter((item) =>
        item.data.getFullYear() >= currentDate.getFullYear() &&
        item.data.getMonth() >= currentDate.getMonth() &&
        item.data.getDate() >= currentDate.getDate()
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
    }
    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
}
  
// Cultos
window.addEventListener('load', cultos)
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
        if ( datahoje.getDate() == 7) {
            document.querySelector('#cultos').innerHTML = 'Feriado' 
        }
        if ( datahoje.getDate() == 14) {
            document.querySelector('#cultos').innerHTML = '7h-Jaque' + ' &raquo; ' + '10h10-Malú' + ' &raquo; ' + '13h-Valéria' 
        }
        if ( datahoje.getDate() == 21) {
            document.querySelector('#cultos').innerHTML = '7h-Eula ' + ' &raquo; ' + ' 10h10-Nailson ' + ' &raquo; ' + ' 13h-Eliane' 
        }
        if ( datahoje.getDate() == 17) {
            document.querySelector('#cultos').innerHTML = '7h-Filipe ' + ' &raquo; ' + '10h10-Katleen ' + ' &raquo; ' + '13h-Allan' 
        }
        if ( datahoje.getDate() == 28) {
            document.querySelector('#cultos').innerHTML = '7h-Pr Leo ' + ' &raquo; ' + '10h10-Sarita ' + ' &raquo; ' + '13h-Pr Leo' 
        }
        if ( datahoje.getDate() == 31) {
            document.querySelector('#cultos').innerHTML = '7h-Fernando ' + ' &raquo; ' + '10h10-Camila ' + ' &raquo; ' + '13h-Drika' 
        }
        
    }
    if (datahoje.getDay() == 5) {
        if (datahoje.getDate() == 8) {
            document.querySelector('#cultos').innerHTML = 'Recesso'
        }
            document.querySelector('#cultos').innerHTML = 'Vigília de jejum e oração'
    }
    if (datahoje.getDay() == 6) {
        document.querySelector('#cultos').innerHTML = 'Feliz Sábado!'
    }

}

//Plantão Diário
window.addEventListener('load', plantaoDiarioCompensacao)
function plantaoDiarioCompensacao() {

    if (datahoje.getDay() == 0) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje é domingão!'
        document.querySelector('#nomescomp').innerHTML = 'Hoje é domingão!'
    }    
    if (datahoje.getDay() == 1) { 
        document.querySelector('#plantaodiario').innerHTML = 'Nailson'
        document.querySelector('#nomescomp').innerHTML = 'Pr. Vinícius | ---'
    }
    if (datahoje.getDay() == 2) {
        document.querySelector('#plantaodiario').innerHTML = 'Douglas'
        document.querySelector('#nomescomp').innerHTML = 'Sem escala'
    }
    if (datahoje.getDay() == 3) { 
        document.querySelector('#plantaodiario').innerHTML = 'Josiane'
        document.querySelector('#nomescomp').innerHTML = 'Jaqueline/Camila | Carin/Nailson'
    }
    if (datahoje.getDay() == 4) { 
        document.querySelector('#plantaodiario').innerHTML = 'Alexandro'
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

// Celebras
let celebras = [

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
    {data: new Date(2023, 9, 24), tema: 'Classe Bíblica Esportiva'},

    {data: new Date(2023, 10, 7), tema: 'Classe Bíblica Esportiva'},
    {data: new Date(2023, 10, 21), tema: 'Classe Bíblica Esportiva'},
    
    {data: new Date(2023, 11, 5), tema: 'Classe Bíblica Esportiva'},
    
]

window.addEventListener('load', () => findNextBibleClass(classesbiblicas))


function findNextBibleClass(array) {
    // Obter a data atual
    const currentDate = new Date();
  
    // Filtrar as datas que são iguais ou após a data atual
    const myFutureDates = array.filter( (e) => e.data.getDate() >= currentDate.getDate() && e.data.getMonth() >= currentDate.getMonth() && e.data.getFullYear() >= currentDate.getFullYear() )
  

    // Ordenar as datas por ordem crescente
    myFutureDates.sort((a, b) => a.data - b.data);
  
    // Se houver datas após a data atual, retorna a primeira delas
    if (myFutureDates.length > 0) {
        document.querySelector('#classesbiblicascontent').innerHTML = myFutureDates[0].data.getDate() + '/' + (myFutureDates[0].data.getMonth()+1) + ' - ' + myFutureDates[0].tema;
    }
    // Caso contrário, retorna a última data no array (mais distante do dia de hoje)
    // return array[array.length - 1];
  }

  const btnama = document.querySelector('#bt-ama')
  btnama.addEventListener('click', ()=>{
    window.open('https://sistemas.usb.org.br/ama/index.php')
  })


const btnovoatendimento = document.querySelector('#botaonovoatendimento')
btnovoatendimento.addEventListener('click', ()=>{
    window.open("https://dls76.github.io/matriculasDbox/")
})

window.addEventListener('load', plantaoentrevistas)
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
        document.querySelector('#oracao').innerHTML = 'Feliz Sábado!'
    }
}

window.addEventListener('load', oracaopelasescolas)
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

// Limitar caracteres em um elemento

// const letters = document.querySelectorAll('.titulodoevento')
// const limit = 28

// for (let l of letters) {
//     const aboveLimit = l.innerText.length > limit
//     const dotsOrEmpty = aboveLimit ? '...' : ''
//     l.innerText = l.innerText.substring(0, limit) + dotsOrEmpty
// }