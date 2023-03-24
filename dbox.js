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

for(i=0; i<compensacao.length; i++) {

    const diffInMs = datahoje - compensacao[i].data
    const diffDays = diffInMs / (1000 * 60 * 60 * 24)
   
    if ( ( diffDays >= -6  && diffDays < 1 ) && ( compensacao[i].diaDaSemana == "Quarta" ) ) { 
        document.querySelector('#nomescompquarta').innerHTML = compensacao[i].data.getDate() + '/' + (compensacao[i].data.getMonth()+1) + ' (quarta) - ' + compensacao[i].people
    }

    if ( ( diffDays >= -6  && diffDays < 1 ) && ( compensacao[i].diaDaSemana == "Sexta" ) ) { 
        document.querySelector('#nomescomp').innerHTML = compensacao[i].data.getDate() + '/' + (compensacao[i].data.getMonth()+1) + ' (sexta) - ' + compensacao[i].people
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
    {data: new Date(2023, 4, 12), person: "Roberta"},
    {data: new Date(2023, 4, 19), person: "Denise"},
    {data: new Date(2023, 4, 26), person: "Eduardo"},
    {data: new Date(2023, 5, 2), person: "Eliesio"},
    {data: new Date(2023, 5, 9), person: "Recesso"},
    {data: new Date(2023, 5, 16), person: "Guilherme"},
    {data: new Date(2023, 5, 23), person: "Rudi"},
    {data: new Date(2023, 5, 30), person: "Thiago"},
]

for(j=0; j<plantaosexta.length; j++) {

    const diffInMs = datahoje - plantaosexta[j].data
    const diffDays = diffInMs / (1000 * 60 * 60 * 24)

if ( diffDays >= -6 && diffDays <= 0 ) {
        document.querySelector('#plantaosexta').innerHTML = plantaosexta[j].data.getDate() + '/' + (plantaosexta[j].data.getMonth()+1) + ' - ' + plantaosexta[j].person
    }

}

// Cultos
let cultos = [
    // {data: new Date(2023, 1, 18), pessoaM: "Sábado"},
    // {data: new Date(2023, 1, 19), pessoaM: "Domingo", pessoaT:""},
    // {data: new Date(2023, 1, 20), pessoaM: "Recesso", pessoaT:""},
    // {data: new Date(2023, 1, 21), pessoaM: "Feriado", pessoaT:""},
    // {data: new Date(2023, 1, 22), pessoaM: "Guilherme", pessoaT:""},
    // {data: new Date(2023, 1, 23), pessoaM: "Pr. Gerson", pessoaT:"Pr. Gerson"},
    // {data: new Date(2023, 1, 24), pessoaM: "Pr. Gerson", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 1, 27), pessoaM: "Isabelle (82)", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 1, 28), pessoaM: "Paulo (111)", pessoaT:"Pr. Augusto"},
    // {data: new Date(2023, 2, 1), pessoaM: "Pr. Luiz Thomaz", pessoaT:"Pr. Augusto"},
    // {data: new Date(2023, 2, 2), pessoaM: "Pr. Luiz Thomaz", pessoaT:"Pr. Augusto"},
    // {data: new Date(2023, 2, 3), pessoaM: "Pr. Luiz Thomaz", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 3), pessoaM: "", pessoaT:""},
    // {data: new Date(2023, 2, 6), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 7), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 8), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 9), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 10), pessoaM: "Thiago", pessoaT:"Thiago"},
    // {data: new Date(2023, 2, 13), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 14), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 15), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 16), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    // {data: new Date(2023, 2, 17), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},

    {data: new Date(2023, 2, 20), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 2, 21), pessoaM: "Pr. Guilherme", pessoaT:"Ana Paula"},
    {data: new Date(2023, 2, 22), pessoaM: "Lia", pessoaT:"Fernanda Nakonieczni"},
    {data: new Date(2023, 2, 23), pessoaM: "Elaine", pessoaT:"Willian"},
    {data: new Date(2023, 2, 24), pessoaM: "Diretor", pessoaT:"Diretor"},
    
    {data: new Date(2023, 2, 27), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 2, 28), pessoaM: "Pr. Luiz Felipe", pessoaT:"Priscila"},
    {data: new Date(2023, 2, 29), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Luiz Felipe"},
    {data: new Date(2023, 2, 30), pessoaM: "Willian", pessoaT:"Cleide"},
    {data: new Date(2023, 2, 31), pessoaM: "Vice-diretor", pessoaT:"Vice-diretor"},

    {data: new Date(2023, 3, 3), pessoaM: "Convidado semana santa", pessoaT:"Convidado semana santa"},
    {data: new Date(2023, 3, 4), pessoaM: "Convidado semana santa", pessoaT:"Convidado semana santa"},
    {data: new Date(2023, 3, 5), pessoaM: "Convidado semana santa", pessoaT:"Convidado semana santa"},
    {data: new Date(2023, 3, 6), pessoaM: "Convidado semana santa", pessoaT:"Convidado semana santa"},

    {data: new Date(2023, 3, 10), pessoaM: "Pr. Guilherme", pessoaT:"Ana Paula"},
    {data: new Date(2023, 3, 11), pessoaM: "Lia", pessoaT:"Willian"},
    {data: new Date(2023, 3, 12), pessoaM: "Denise Schmidt", pessoaT:"Cleide"},
    {data: new Date(2023, 3, 13), pessoaM: "Alessandra", pessoaT:"Fernanda Nakonieczni"},
    {data: new Date(2023, 3, 14), pessoaM: "Diretor", pessoaT:"Diretor"},

    {data: new Date(2023, 3, 17), pessoaM: "Pr. Luiz Felipe", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 3, 18), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 3, 19), pessoaM: "Scheyla", pessoaT:"Pr. Luiz Felipe"},
    {data: new Date(2023, 3, 20), pessoaM: "Jackelini", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 3, 21), pessoaM: "Vice-diretor", pessoaT:"Vice-diretor"},

    {data: new Date(2023, 3, 24), pessoaM: "Pr. Luiz Felipe", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 3, 25), pessoaM: "Hermes", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 3, 26), pessoaM: "Elisa", pessoaT:"Joelma Castro"},
    {data: new Date(2023, 3, 27), pessoaM: "Pr. Luiz Felipe", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 3, 28), pessoaM: "Diretor", pessoaT:"Diretor"},


]

for( k=0; k<cultos.length; k++ ) {

    if ( (datahoje.getDate() === cultos[k].data.getDate()) && (datahoje.getMonth() === cultos[k].data.getMonth()) && (datahoje.getFullYear() === cultos[k].data.getFullYear()) ){
        document.querySelector('#cultos').innerHTML = cultos[k].data.getDate() + '/' + (cultos[k].data.getMonth()+1) + ' - ' + 'Manhã: ' + cultos[k].pessoaM + '; Tarde: ' + cultos[k].pessoaT
    }
}

// Comunicados
let comunicados = [
    {num: "003", ass: " reunião de pais", pub: "FII-EM"},
    {num: "012-27/02", ass: "Oficina de reforço", pub: "1ºEF"},
    {num: "013-02/03", ass: "Bordado no uniforme", pub: "EI-EM"},
    {num: "014-03/03", ass: "Recados e lembretes", pub: "EI-EM"},
    {num: "015-07/03", ass: "Atendimento administrativo", pub: "EI-EM"},
    {num: "016-09/03", ass: "2ª chamada 9º-EM", pub: "9º-EM"},
    {num: "017-09/03", ass: "Materiais de uso pessoal", pub: "FII-EM"},
    {num: "018-10/03", ass: "Segunda chamada AV1", pub: "2º-5º"},
    {num: "019-15/03", ass: "Reunião de Pais, Profs e Alunos", pub: "FII-EM"},
    {num: "020-16/03", ass: "Visita Pedagógica", pub: "1ªEM"},
    {num: "021-16/03", ass: "Reunião de Pais", pub: "EI-FI"},
    {num: "022-16/03", ass: "Convocação Reunião de Pais", pub: "EI-FI"},
    {num: "023-16/03", ass: "Cantata de Páscoa", pub: "EI-FI"},
    {num: "024-20/03", ass: "Ausência prof. Paula", pub: "T.13"},
    {num: "025-21/03", ass: "Reunião com alunos-pais bolsistas", pub: "EF-EM"},
]

let ult = comunicados.pop()
document.querySelector('#comunicados').innerHTML = ult.num + " - " + ult.ass + " (" + ult.pub + ")"

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
    {data: new Date(2023, 3, 5), pessoa: "Diretor"},
    {data: new Date(2023, 3, 6), pessoa: "Thiago"},

    {data: new Date(2023, 3, 10), pessoa: "Diretor"},
    {data: new Date(2023, 3, 11), pessoa: "Rudi"},
    {data: new Date(2023, 3, 12), pessoa: "Rudi"},
    {data: new Date(2023, 3, 13), pessoa: "Thiago"},

    {data: new Date(2023, 3, 17), pessoa: "Diretor"},
    {data: new Date(2023, 3, 18), pessoa: "Rudi"},
    {data: new Date(2023, 3, 19), pessoa: "Thiago"},
    {data: new Date(2023, 3, 20), pessoa: "Thiago"},

    {data: new Date(2023, 3, 24), pessoa: "Diretor"},
    {data: new Date(2023, 3, 25), pessoa: "Rudi"},
    {data: new Date(2023, 3, 26), pessoa: "Diretor"},
    {data: new Date(2023, 3, 27), pessoa: "Thiago"},

    {data: new Date(2023, 4, 2), pessoa: "Rudi"},
    {data: new Date(2023, 4, 3), pessoa: "Rudi"},
    {data: new Date(2023, 4, 4), pessoa: "Thiago"},

    {data: new Date(2023, 4, 8), pessoa: "Diretor"},
    {data: new Date(2023, 4, 9), pessoa: "Rudi"},
    {data: new Date(2023, 4, 10), pessoa: "Thiago"},
    {data: new Date(2023, 4, 11), pessoa: "Thiago"},

    {data: new Date(2023, 4, 15), pessoa: "Diretor"},
    {data: new Date(2023, 4, 16), pessoa: "Rudi"},
    {data: new Date(2023, 4, 17), pessoa: "Diretor"},
    {data: new Date(2023, 4, 18), pessoa: "Thiago"},

    {data: new Date(2023, 4, 22), pessoa: "Diretor"},
    {data: new Date(2023, 4, 23), pessoa: "Rudi"},
    {data: new Date(2023, 4, 24), pessoa: "Rudi"},
    {data: new Date(2023, 4, 25), pessoa: "Thiago"},

    {data: new Date(2023, 4, 29), pessoa: "Diretor"},
    {data: new Date(2023, 4, 30), pessoa: "Rudi"},
    {data: new Date(2023, 4, 31), pessoa: "Thiago"},
    {data: new Date(2023, 5, 1), pessoa: "Thiago"},

    {data: new Date(2023, 5, 5), pessoa: "Diretor"},
    {data: new Date(2023, 5, 6), pessoa: "Rudi"},
    {data: new Date(2023, 5, 7), pessoa: "Diretor"},
    {data: new Date(2023, 5, 8), pessoa: "Thiago"},

    {data: new Date(2023, 5, 12), pessoa: "Diretor"},
    {data: new Date(2023, 5, 13), pessoa: "Rudi"},
    {data: new Date(2023, 5, 14), pessoa: "Rudi"},
    {data: new Date(2023, 5, 15), pessoa: "Thiago"},

    {data: new Date(2023, 5, 19), pessoa: "Diretor"},
    {data: new Date(2023, 5, 20), pessoa: "Rudi"},
    {data: new Date(2023, 5, 21), pessoa: "Thiago"},
    {data: new Date(2023, 5, 22), pessoa: "Thiago"},

    {data: new Date(2023, 5, 26), pessoa: "Diretor"},
    {data: new Date(2023, 5, 27), pessoa: "Rudi"},
    {data: new Date(2023, 5, 28), pessoa: "Diretor"},
    {data: new Date(2023, 5, 29), pessoa: "Thiago"},

    {data: new Date(2023, 6, 3), pessoa: "Diretor"},
    {data: new Date(2023, 6, 4), pessoa: "Rudi"},
    {data: new Date(2023, 6, 5), pessoa: "Rudi"},
    {data: new Date(2023, 6, 6), pessoa: "Thiago"},
]

for (let m = 0; m < plantaodiario.length; m++ ) {

    if ( (datahoje.getDate() === plantaodiario[m].data.getDate() ) && (datahoje.getMonth() === plantaodiario[m].data.getMonth()) && (datahoje.getFullYear() === plantaodiario[m].data.getFullYear()) ) {  
        document.querySelector('#plantaodiario').innerHTML = plantaodiario[m].data.getDate() + '/' + (plantaodiario[m].data.getMonth()+1) + ' - ' + plantaodiario[m].pessoa
    } else if (datahoje.getDay() == 5) {
        document.querySelector('#plantaodiario').innerHTML = 'Ver plantão de sexta'
    }
}

let menuDotted = document.querySelector('.menu-dotted')
menuDotted.addEventListener('click', openDotted)

function openDotted(){
    let subDotted = document.querySelector('.sub-dotted')
    subDotted.classList.add('scale-in-tr')
    subDotted.classList.toggle('showDotted')
}
