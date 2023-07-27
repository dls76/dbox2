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
    {data: new Date(2023, 1, 27), person: "Douglas"},
    {data: new Date(2023, 2, 3), person: "Thiago"},
    {data: new Date(2023, 2, 10), person: "Rudi"},
    {data: new Date(2023, 2, 17), person: "Sandra"},
    {data: new Date(2023, 2, 24), person: "Raquel"},
    {data: new Date(2023, 2, 31), person: "Guilherme"},
    {data: new Date(2023, 3, 7), person: "Feriado"},
    {data: new Date(2023, 3, 14), person: "Cida"},
    {data: new Date(2023, 3, 21), person: "Feriado"},
    {data: new Date(2023, 3, 28), person: "Karol"},
    {data: new Date(2023, 4, 5), person: "Jessica"},
    {data: new Date(2023, 4, 12), person: "Eduardo"},
    {data: new Date(2023, 4, 19), person: "Denise"},
    {data: new Date(2023, 4, 26), person: "Eliesio"},
    {data: new Date(2023, 5, 2), person: "Roberta"},
    {data: new Date(2023, 5, 9), person: "Recesso"},
    {data: new Date(2023, 5, 16), person: "Denise"},
    {data: new Date(2023, 5, 23), person: "Guilherme"},
    {data: new Date(2023, 5, 30), person: "Thiago"},
    {data: new Date(2023, 5, 30), person: "Rudi"},
    {data: new Date(2023, 6, 7), person: "Thiago (vice)"},
    {data: new Date(2023, 6, 14), person: "Recesso"},
    {data: new Date(2023, 6, 21), person: "Recesso"},
    {data: new Date(2023, 6, 28), person: "Thiago"},
    {data: new Date(2023, 7, 4), person: "Léo"},
    {data: new Date(2023, 7, 11), person: "Eliesio"},
    {data: new Date(2023, 7, 18), person: "Mirian"},
    {data: new Date(2023, 7, 25), person: ""},
    {data: new Date(2023, 8, 1), person: ""},
    {data: new Date(2023, 8, 8), person: ""},
    {data: new Date(2023, 8, 15), person: ""},
    {data: new Date(2023, 8, 22), person: ""},
    {data: new Date(2023, 8, 29), person: ""},
    {data: new Date(2023, 9, 6), person: ""},
    {data: new Date(2023, 9, 13), person: ""},
    {data: new Date(2023, 9, 20), person: ""},
    {data: new Date(2023, 9, 27), person: ""},
    {data: new Date(2023, 10, 3), person: ""},
    {data: new Date(2023, 10, 10), person: ""},
    {data: new Date(2023, 10, 17), person: ""},
    {data: new Date(2023, 10, 24), person: ""},
    {data: new Date(2023, 11, 1), person: ""},
    {data: new Date(2023, 11, 8), person: ""},
]
for(j=0; j<plantaosexta.length; j++) {

    const diffInMs = datahoje - plantaosexta[j].data
    const diffDays = diffInMs / (1000 * 60 * 60 * 24)

if ( diffDays >= -6 && diffDays < 1 ) {
        document.querySelector('#plantaosexta').innerHTML = plantaosexta[j].data.getDate() + '/' + (plantaosexta[j].data.getMonth()+1) + ' - ' + plantaosexta[j].person
    }

}


// Cultos
let cultos = [
    {data: new Date(2023, 6, 28), pessoaM: '', pessoaT: '', dletivo: true},
    {data: new Date(2023, 6, 29), pessoaM: 'Sábado', pessoaT: 'Sábado', dletivo: false},
    {data: new Date(2023, 6, 30), pessoaM: 'Domingo', pessoaT: 'Domingo', dletivo: false},
    {data: new Date(2023, 6, 31), pessoaM: '', pessoaT: '', dletivo: true},
]
for( k=0; k<cultos.length; k++ ) {

    if (datahoje.getDay() == 0) {
        document.querySelector('#cultos').innerHTML = "HOje é domingo!"
    }

    if (datahoje.getDay() == 1) {
        document.querySelector('#cultos').innerHTML = 'Hoje é domingo.'
    }

    if (datahoje.getDay() == 2) {
        document.querySelector('#cultos').innerHTML = 'Hoje é domingo.'
    }
    if (datahoje.getDay() == 3) {
        document.querySelector('#cultos').innerHTML = 'Hoje é domingo.'
    }
    if (datahoje.getDay() == 4) {
        document.querySelector('#cultos').innerHTML = 'Hoje é domingo.'
    }
    if (datahoje.getDay() == 1) {
        document.querySelector('#cultos').innerHTML = 'Hoje é domingo.'
    }

    // if ( datahoje.getDay() == cultos[k].data.getDay() && cultos[k].dletivo == false ) {
    //     document.querySelector('#cultos').innerHTML = 'Recesso/Feriado'
    // }

    // if ( (datahoje.getDate() === cultos[k].data.getDate()) && (datahoje.getMonth() === cultos[k].data.getMonth()) && (datahoje.getFullYear() === cultos[k].data.getFullYear()) ){
    //     document.querySelector('#titulocultos').innerHTML = "Cultos " + cultos[k].data.getDate() + '/' + (cultos[k].data.getMonth()+1)
    //     document.querySelector('#cultos').innerHTML = cultos[k].pessoaM + ' e ' + cultos[k].pessoaT
    // }
}


//Plantão Diário
let plantaodiario = [

    {data: new Date(2023, 2, 13), pessoa: "Diretor"},
    {data: new Date(2023, 2, 14), pessoa: "Rudi"},
    {data: new Date(2023, 2, 15), pessoa: "Diretor"},
    {data: new Date(2023, 2, 16), pessoa: "Thiago"},

    {data: new Date(2023, 2, 20), pessoa: "Diretor"},
    {data: new Date(2023, 2, 21), pessoa: "Rudi"},
    {data: new Date(2023, 2, 22), pessoa: "Rudi"},
    {data: new Date(2023, 2, 23), pessoa: "Thiago"},

    {data: new Date(2023, 2, 27), pessoa: "Diretor"},
    {data: new Date(2023, 2, 28), pessoa: "Rudi"},
    {data: new Date(2023, 2, 29), pessoa: "Thiago"},
    {data: new Date(2023, 2, 30), pessoa: "Thiago"},

    {data: new Date(2023, 3, 3), pessoa: "Diretor"},
    {data: new Date(2023, 3, 4), pessoa: "Rudi"},
    {data: new Date(2023, 3, 5), pessoa: "Thiago"},
    {data: new Date(2023, 3, 6), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 3, 10), pessoa: "Diretor"},
    {data: new Date(2023, 3, 11), pessoa: "Rudi"},
    {data: new Date(2023, 3, 12), pessoa: "Thiago"},
    {data: new Date(2023, 3, 13), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 3, 17), pessoa: "Diretor"},
    {data: new Date(2023, 3, 18), pessoa: "Rudi"},
    {data: new Date(2023, 3, 19), pessoa: "Thiago"},
    {data: new Date(2023, 3, 20), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 3, 24), pessoa: "Diretor"},
    {data: new Date(2023, 3, 25), pessoa: "Rudi"},
    {data: new Date(2023, 3, 26), pessoa: "Thiago"},
    {data: new Date(2023, 3, 27), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 4, 2), pessoa: "Rudi"},
    {data: new Date(2023, 4, 3), pessoa: "Thiago"},
    {data: new Date(2023, 4, 4), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 4, 8), pessoa: "Diretor"},
    {data: new Date(2023, 4, 9), pessoa: "Rudi"},
    {data: new Date(2023, 4, 10), pessoa: "Thiago"},
    {data: new Date(2023, 4, 11), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 4, 15), pessoa: "Diretor"},
    {data: new Date(2023, 4, 16), pessoa: "Rudi"},
    {data: new Date(2023, 4, 17), pessoa: "Thiago"},
    {data: new Date(2023, 4, 18), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 4, 22), pessoa: "Diretor"},
    {data: new Date(2023, 4, 23), pessoa: "Rudi"},
    {data: new Date(2023, 4, 24), pessoa: "Thiago"},
    {data: new Date(2023, 4, 25), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 4, 29), pessoa: "Diretor"},
    {data: new Date(2023, 4, 30), pessoa: "Rudi"},
    {data: new Date(2023, 4, 31), pessoa: "Thiago"},
    {data: new Date(2023, 5, 1), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 5, 5), pessoa: "Diretor"},
    {data: new Date(2023, 5, 6), pessoa: "Rudi"},
    {data: new Date(2023, 5, 7), pessoa: "Thiago"},
    {data: new Date(2023, 5, 8), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 5, 12), pessoa: "Diretor"},
    {data: new Date(2023, 5, 13), pessoa: "Rudi"},
    {data: new Date(2023, 5, 14), pessoa: "Thiago"},
    {data: new Date(2023, 5, 15), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 5, 19), pessoa: "Diretor"},
    {data: new Date(2023, 5, 20), pessoa: "Rudi"},
    {data: new Date(2023, 5, 21), pessoa: "Thiago"},
    {data: new Date(2023, 5, 22), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 5, 26), pessoa: "Diretor"},
    {data: new Date(2023, 5, 27), pessoa: "Rudi"},
    {data: new Date(2023, 5, 28), pessoa: "Diretor"},
    {data: new Date(2023, 5, 29), pessoa: "Thiago"},

    {data: new Date(2023, 6, 3), pessoa: "Diretor"},
    {data: new Date(2023, 6, 4), pessoa: "Rudi"},
    {data: new Date(2023, 6, 5), pessoa: "Thiago"},
    {data: new Date(2023, 6, 6), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 6, 10), pessoa: "Recesso"},
    {data: new Date(2023, 6, 11), pessoa: "Recesso"},
    {data: new Date(2023, 6, 12), pessoa: "Recesso"},
    {data: new Date(2023, 6, 13), pessoa: "Recesso"},

    {data: new Date(2023, 6, 17), pessoa: "Recesso"},
    {data: new Date(2023, 6, 18), pessoa: "Recesso"},
    {data: new Date(2023, 6, 19), pessoa: "Recesso"},
    {data: new Date(2023, 6, 20), pessoa: "Recesso"},

    {data: new Date(2023, 6, 24), pessoa: "Recesso"},
    {data: new Date(2023, 6, 25), pessoa: "Rudi"},
    {data: new Date(2023, 6, 26), pessoa: "Thiago"},
    {data: new Date(2023, 6, 27), pessoa: "Pr. Guilherme"},

    {data: new Date(2023, 6, 31), pessoa: "Diretor"},
    {data: new Date(2023, 6, 1), pessoa: "Rudi"},
    {data: new Date(2023, 6, 2), pessoa: "Thiago"},
    {data: new Date(2023, 6, 3), pessoa: "Pr. Guilherme"},

]
for (let m = 0; m < plantaodiario.length; m++ ) {

    if ( (datahoje.getDate() === plantaodiario[m].data.getDate() ) && (datahoje.getMonth() === plantaodiario[m].data.getMonth()) && (datahoje.getFullYear() === plantaodiario[m].data.getFullYear()) ) {  
        document.querySelector('#plantaodiario').innerHTML = plantaodiario[m].data.getDate() + '/' + (plantaodiario[m].data.getMonth()+1) + ' - ' + plantaodiario[m].pessoa
    } else if (datahoje.getDay() == 5) {
        document.querySelector('#plantaodiario').innerHTML = 'Ver plantão de sexta'
    } else if (datahoje.getDay() == 6) {
        document.querySelector('#plantaodiario').innerHTML = 'Hoje é sábado!'
    } else if (datahoje.getDay() == 0) {
        document.querySelector('#plantaodiario').innerHTML = 'Hoje é domingo!'
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

// console.log(ultimaescala)

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

window.onload(findNearestDate(route))

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
  
//   const nearestDate = findNearestDate(route);
  // Output será o objeto cuja data é igual ou a mais próxima data posterior ao dia de hoje

// document.querySelector('#routescala').innerHTML =  nearestDate()





        
