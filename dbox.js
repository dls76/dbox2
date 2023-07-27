addEventListener('load', arredondarBordasInferiores)

let datahoje = new Date()


// Compensação
let compensacao = [

    {data: new Date(2023, 2, 22), diaDaSemana: "Quarta", people: "Reunião Equipe Gestora - ASP"},
    {data: new Date(2023, 2, 24), diaDaSemana: "Sexta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},

    {data: new Date(2023, 2, 29), diaDaSemana: "Quarta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},    
    {data: new Date(2023, 2, 31), diaDaSemana: "Sexta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},

    {data: new Date(2023, 3, 5), diaDaSemana: "Quarta", people: "Semana com feriado (7/4)"},
    {data: new Date(2023, 3, 7), diaDaSemana: "Sexta", people: "Feriado sexta-feira santa"},

    {data: new Date(2023, 3, 12), diaDaSemana: "Quarta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 3, 14), diaDaSemana: "Sexta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    
    {data: new Date(2023, 3, 19), diaDaSemana: "Quarta", people: "Semana com feriado (21/4)"},
    {data: new Date(2023, 3, 21), diaDaSemana: "Sexta", people: "Feriado Tiradentes"},

    {data: new Date(2023, 3, 26), diaDaSemana: "Quarta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 3, 28), diaDaSemana: "Sexta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},

    {data: new Date(2023, 4, 3), diaDaSemana: "Quarta", people: "Semana com feriado (1/5)"},
    {data: new Date(2023, 4, 5), diaDaSemana: "Sexta", people: "Semana com feriado (1/5)"},

    {data: new Date(2023, 4, 10), diaDaSemana: "Quarta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 4, 12), diaDaSemana: "Sexta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},

    {data: new Date(2023, 4, 17), diaDaSemana: "Quarta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 4, 19), diaDaSemana: "Sexta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},

    {data: new Date(2023, 4, 24), diaDaSemana: "Quarta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 4, 26), diaDaSemana: "Sexta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},

    {data: new Date(2023, 4, 31), diaDaSemana: "Quarta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 5, 2), diaDaSemana: "Sexta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},

    {data: new Date(2023, 5, 7), diaDaSemana: "Quarta", people: "Semana com feriado (8 e 9/6)"},
    {data: new Date(2023, 5, 9), diaDaSemana: "Sexta", people: "Semana com feriado (8 e 9/6)"},

    {data: new Date(2023, 5, 14), diaDaSemana: "Quarta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 5, 16), diaDaSemana: "Sexta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},

    {data: new Date(2023, 5, 21), diaDaSemana: "Quarta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 5, 23), diaDaSemana: "Sexta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},

    {data: new Date(2023, 5, 28), diaDaSemana: "Quarta", people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 5, 30), diaDaSemana: "Sexta", people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},

    {data: new Date(2023, 6, 5), diaDaSemana: "Quarta", people: "Última semana do semestre"},
    {data: new Date(2023, 6, 7), diaDaSemana: "Sexta", people: "Última semana do semestre"},
]
for( i=0; i<compensacao.length; i++ ) {

    
    // const diffInMs = 

    // const diffDays = diffInMs / (1000 * 60 * 60 * 24)

    // if ( ( diffDays >= -6  && diffDays < 1 ) && ( compensacao[i].diaDaSemana == "Quarta" ) ) { 
    //     document.querySelector('#nomescompquarta').innerHTML = compensacao[i].data.getDate() + '/' + (compensacao[i].data.getMonth()+1) + ' (quarta) - ' + compensacao[i].people
    // }

    // if ( ( diffDays >= -6  && diffDays < 1 ) && ( compensacao[i].diaDaSemana == "Sexta" ) ) { 
    //     document.querySelector('#nomescomp').innerHTML = compensacao[i].data.getDate() + '/' + (compensacao[i].data.getMonth()+1) + ' (sexta) - ' + compensacao[i].people
    // }

    // if ( datahoje.getTime() >= compensacao[i].data.getTime() ) {
        
    //     document.querySelector('#titulocompensacao').innerHTML = 'Compensação ' + compensacao[i].diaDaSemana + ' (' + compensacao[i].data.getDate() + '/' + (compensacao[i].data.getMonth()+1) + ')'

    //     document.querySelector('#nomescomp').innerHTML = compensacao[i].people

    // }
// k

let d = compensacao[i].data.getTime()
let h = new Date().getTime()
let r = h - d

if ( r < 86400000 ) {
    
    document.querySelector('#titulocompensacao').innerHTML = 'Compensação ' + compensacao[i].data.getDate() + '/' + (compensacao[i].data.getMonth() + 1)
    document.querySelector('#nomescomp').innerHTML = compensacao[i].people

    break
}

}


// Plantão sexta
let plantaosexta = [
    {data: new Date(2023, 7, 28), person: "Douglas"},
    
]
for(j=0; j<plantaosexta.length; j++) {

    const diffInMs = datahoje - plantaosexta[j].data
    const diffDays = diffInMs / (1000 * 60 * 60 * 24)

if ( diffDays >= -6 && diffDays < 1 ) {
        document.querySelector('#plantaosexta').innerHTML = plantaosexta[j].data.getDate() + '/' + (plantaosexta[j].data.getMonth()+1) + ' - ' + plantaosexta[j].person
    }

}


// Cultos
window.addEventListener('load', cultos)
function cultos() {

    if (datahoje.getDay() == 0) {
        document.querySelector('#cultos').innerHTML = "Hoje é domingão!"
    }
    if (datahoje.getDay() == 1) {
        document.querySelector('#cultos').innerHTML = '7h Diretor | 10h10-Diretor | 13h-Diretor'
    }
    if (datahoje.getDay() == 2) {
        document.querySelector('#cultos').innerHTML = '7h Pr. Vinícius | 10h10 Pr. Vinícius | 13h Pr. Vinícius'
    }
    if (datahoje.getDay() == 3) {
        document.querySelector('#cultos').innerHTML = '7h Vice-diretor | 10h10 Vice-diretor | 13h Vice-diretor'
    }
    if (datahoje.getDay() == 4) {
        if ( datahoje.getDate() == 3) {
            document.querySelector('#cultos').innerHTML = '7h Prof. Eula | 10h10 Prof. Nailson | 13h Prof. Jaqueline' 
        }
        if ( datahoje.getDate() == 10) {
            document.querySelector('#cultos').innerHTML = '7h Prof. Carol | 10h10 Prof. Malú | 13h Prof. Valéria' 
        }
        if ( datahoje.getDate() == 17) {
            document.querySelector('#cultos').innerHTML = '7h Prof. Filipe | 10h10 Sec. Katleen | 13h Prof. Prof. Allan' 
        }
        if ( datahoje.getDate() == 24) {
            document.querySelector('#cultos').innerHTML = '7h Prof. Noemi | 10h10 Prof. Sarita | 13h Prof. Eliane' 
        }
        if ( datahoje.getDate() == 31) {
            document.querySelector('#cultos').innerHTML = '7h Prof. Fernando | 10h10 Prof. Camila | 13h Prof. Drika' 
        }
        
    }
    if (datahoje.getDay() == 5) {
        document.querySelector('#cultos').innerHTML = ''
    }
    if (datahoje.getDay() == 6) {
        document.querySelector('#cultos').innerHTML = 'Feliz Sábado!'
    }

}

datahoje = new Date(2023, 7, 1)
//Plantão Diário
window.addEventListener('load', plantaoDiarioCompensacao)
function plantaoDiarioCompensacao() {

    if (datahoje.getDay() == 0) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje é domingão!'
        document.querySelector('#nomescomp').innerHTML = 'Hoje é domingão!'
    }    
    if (datahoje.getDay() == 1) { 
        document.querySelector('#plantaodiario').innerHTML = 'Diretor'
        document.querySelector('#nomescomp').innerHTML = 'Manhã: Pr. Vinícius'
    }
    if (datahoje.getDay() == 2) { 
        document.querySelector('#plantaodiario').innerHTML = 'Vice-diretor'
        document.querySelector('#nomescomp').innerHTML = 'Sem escala'
    }
    if (datahoje.getDay() == 3) { 
        document.querySelector('#plantaodiario').innerHTML = 'Tesoureira'
        document.querySelector('#nomescomp').innerHTML = 'Manhã: Jaqueline/Camila - Tarde: Katleen/Nailson'
    }
    if (datahoje.getDay() == 4) { 
        document.querySelector('#plantaodiario').innerHTML = 'Coord. Disciplinar'
        document.querySelector('#nomescomp').innerHTML = 'Tarde: Valéria/Eula'
    }
    if (datahoje.getDay() == 5) { 
        document.querySelector('#plantaodiario').innerHTML = 'Ver plantão de sexta.'
        document.querySelector('#nomescomp').innerHTML = 'Manhã: Malú/Douglas - Tarde: Josi/Ale/Carol/Sarita'
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


// PROFS PARA OS CELEBRAS
// 61 - Carol
// 62 - Denise
// 71 - Wilson
// 81 - Alessandra
// 82 - Jaque

// 91 - Elaine
// 92 - Luis
// 93 - Alessandra
// 111 - Carol
// 112 - Elisa
// 121 - Lia
// 131 - Hermes

// 63 - Denise
// 72 - Wilson
// 73 - Luís
// 83 -

let celebrasMenores = [
    {data: new Date(2023, 5, 22), tema: '8 Remédios Naturais', resp: 'Fernanda B., Vanessa, Pauline'},
    {data: new Date(2023, 5, 29), tema: 'Literatura', resp: 'Janete, Sandra, Joelma'}
]

for( i=0; i<celebrasMenores.length; i++ ) {

    let d = celebrasMenores[i].data.getTime()
    let h = new Date().getTime()
    let r = h - d
    
    if ( r < 86400000 ) {
        
        document.querySelector('#titulocelebra2').innerHTML = 'Celebra ' + celebrasMenores[i].data.getDate() + '/' + (celebrasMenores[i].data.getMonth() + 1)
        document.querySelector('#celebra2').innerHTML = celebrasMenores[i].tema + ' (' + celebrasMenores[i].resp + ')'
    
        break
    }
}

function getCurrentEvent() {

    let dataAtual = new Date()

    let eventoscal = [...document.querySelectorAll('.evento')]

    for ( let i = 0; i <= eventoscal.length; i++ ) { 

        if ( eventoscal[i].data1.getDate() == dataAtual.getDate() && eventoscal[i].data1.getMonth() == dataAtual.getMonth() && eventoscal[i].data1.getFullYear() == dataAtual.getFullYear() ) {
            // console.log(eventoscal[i].data1.getDate() + '/' + (eventoscal[i].data1.getMonth() + 1) + ' - ' + eventoscal[i].descritivo)
            console.log(eventoscal[i].data1)
           
            break
        } else if ( eventoscal[i].data1.getDate() > dataAtual.getDate() && eventoscal[i].data1.getMonth() == dataAtual.getMonth() && eventoscal[i].data1.getFullYear() == dataAtual.getFullYear() ) { 
            // console.log(eventoscal[i].data1.getDate() + '/' + (eventoscal[i].data1.getMonth() + 1) + ' - ' + eventoscal[i].descritivo)   
            console.log(eventoscal[i])

            break 
        }
    }
}

// ESCALAS
const divescalas = document.querySelectorAll('.escala')
const escalas = Array.from(divescalas)
const ultimaescala = escalas.length - 1
function arredondarBordasInferiores() {
    const uesc = escalas[ultimaescala]
    uesc.style.borderRadius = "0 0 12px 12px"
}

// Route77
let route = [
    {data: new Date(2023, 7, 12), tema: 'Quebrando o Silêncio', convidado: ''},
    {data: new Date(2023, 7, 26), tema: 'Celebração Route', convidado: ''},
    {data: new Date(2023, 8, 16), tema: 'Setembro Amarelo', convidado: ''},
    {data: new Date(2023, 8, 30), tema: 'Route Adventure', convidado: ''},
    {data: new Date(2023, 9, 7), tema: 'Batismo da Primavera', convidado: ''},
    {data: new Date(2023, 10, 11), tema: 'Celebração Route', convidado: ''},
    {data: new Date(2023, 10, 25), tema: 'Celebração Route', convidado: ''},
    {data: new Date(2023, 11, 2), tema: 'Celebração final', convidado: ''},
]
window.addEventListener('load', findNearestDate(route))
function findNearestDate(array) {
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