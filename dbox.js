
let datahoje = new Date()

let compensacao = [
    {data: new Date(2023, 2, 3), people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 2, 10), people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 2, 17), people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 2, 24), people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 2, 31), people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 3, 7), people: "Feriado sexta-feira santa"},
    {data: new Date(2023, 3, 14), people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 3, 21), people: "Feriado Tiradentes"},
    {data: new Date(2023, 3, 28), people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 4, 5), people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 4, 12), people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 4, 19), people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 4, 26), people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 5, 2), people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 5, 9), people: "Feriado Corpus Christi"},
    {data: new Date(2023, 5, 16), people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
    {data: new Date(2023, 5, 23), people: "Thiago, Dani, Roberta, Sandra, Karol, Guilherme"},
    {data: new Date(2023, 5, 30), people: "Douglas, Rudi, Raquel, Cida, Denise, Jessica"},
]

for(i=0; i<compensacao.length; i++) {

    const diffInMs = datahoje - compensacao[i].data
    const diffDays = diffInMs / (1000 * 60 * 60 * 24)
    
    if ( diffDays <= 0 && diffDays > -7 ) { 
        document.querySelector('#nomescomp').innerHTML = compensacao[i].data.getDate() + '/' + (compensacao[i].data.getMonth()+1) + ' - ' + compensacao[i].people
    }
}

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
    
    if ( diffDays <= 0 && diffDays > -7 ) {
        document.querySelector('#plantaosexta').innerHTML = plantaosexta[j].data.getDate() + '/' + (plantaosexta[j].data.getMonth()+1) + ' - ' + plantaosexta[j].person
    }
}

let cultos = [
    {data: new Date(2023, 1, 18), pessoaM: "Sábado"},
    {data: new Date(2023, 1, 19), pessoaM: "Domingo", pessoaT:""},
    {data: new Date(2023, 1, 20), pessoaM: "Recesso", pessoaT:""},
    {data: new Date(2023, 1, 21), pessoaM: "Feriado", pessoaT:""},
    {data: new Date(2023, 1, 22), pessoaM: "Guilherme", pessoaT:""},
    {data: new Date(2023, 1, 23), pessoaM: "Pr. Gerson", pessoaT:"Pr. Gerson"},
    {data: new Date(2023, 1, 24), pessoaM: "Pr. Gerson", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 1, 27), pessoaM: "Isabelle (82)", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 1, 28), pessoaM: "Paulo (111)", pessoaT:"Pr. Augusto"},
    {data: new Date(2023, 2, 1), pessoaM: "Pr. Luiz Thomaz", pessoaT:"Pr. Augusto"},
    {data: new Date(2023, 2, 2), pessoaM: "Pr. Luiz Thomaz", pessoaT:"Pr. Augusto"},
    {data: new Date(2023, 2, 3), pessoaM: "Pr. Luiz Thomaz", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 2, 3), pessoaM: "", pessoaT:""},
    {data: new Date(2023, 2, 6), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 2, 7), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 2, 8), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 2, 9), pessoaM: "Pr. Guilherme", pessoaT:"Pr. Guilherme"},
    {data: new Date(2023, 2, 10), pessoaM: "Thiago", pessoaT:"Thiago"}
]

for( k=0; k<cultos.length; k++ ) {
    if ( (datahoje.getDate() === cultos[k].data.getDate()) && (datahoje.getMonth() === cultos[k].data.getMonth()) && (datahoje.getFullYear() === cultos[k].data.getFullYear()) ){
        document.querySelector('#cultos').innerHTML = cultos[k].data.getDate() + '/' + (cultos[k].data.getMonth()+1) + ' - ' + 'Manhã: ' + cultos[k].pessoaM + '; Tarde: ' + cultos[k].pessoaT
    } else if (datahoje.getDay() == 6) {
        document.querySelector('#cultos').innerHTML = 'Feliz Sábado!'
    } else if (datahoje.getDay() == 0) {
        document.querySelector('#cultos').innerHTML = 'Hoje é domingo.'
    }
}

let comunicados = [
    {num: "001", ass: "", pub: ""},
    {num: "002", ass: "", pub: ""},
    {num: "003", ass: " reunião de pais", pub: "FII-EM"},
    {num: "004", ass: "", pub: "EM"},
    {num: "005", ass: "", pub: "EM"},
    {num: "006", ass: "", pub: "EM"},
    {num: "007", ass: "", pub: "EM"},
    {num: "008", ass: "", pub: "EM"},
    {num: "009", ass: "", pub: "EM"},
    {num: "010", ass: "", pub: "EM"},
    {num: "011", ass: "", pub: "EM"},
    {num: "012-27/02", ass: "Oficina de reforço", pub: "1ºEF"},
    {num: "013-02/03", ass: "Bordado no uniforme", pub: "EI-EM"},
    {num: "014-03/03", ass: "Recados e lembretes", pub: "EI-EM"},
]

let ult = comunicados.pop()
document.querySelector('#comunicados').innerHTML = ult.num + " - " + ult.ass + " (" + ult.pub + ")"

let plantaodiario = [

    {data: new Date(2023, 1, 23), pessoa: "Rudi"},

    {data: new Date(2023, 1, 27), pessoa: "Diretor"},
    {data: new Date(2023, 1, 28), pessoa: "Thiago"},
    {data: new Date(2023, 2, 1), pessoa: "Diretor"},
    {data: new Date(2023, 2, 2), pessoa: "Rudi"},

    {data: new Date(2023, 2, 6), pessoa: "Diretor"},
    {data: new Date(2023, 2, 7), pessoa: "Thiago"},
    {data: new Date(2023, 2, 8), pessoa: "Thiago"},
    {data: new Date(2023, 2, 9), pessoa: "Rudi"},

    {data: new Date(2023, 2, 13), pessoa: "Diretor"},
    {data: new Date(2023, 2, 14), pessoa: "Thiago"},
    {data: new Date(2023, 2, 15), pessoa: "Rudi"},
    {data: new Date(2023, 2, 16), pessoa: "Rudi"},

    {data: new Date(2023, 2, 20), pessoa: "Diretor"},
    {data: new Date(2023, 2, 21), pessoa: "Thiago"},
    {data: new Date(2023, 2, 22), pessoa: "Diretor"},
    {data: new Date(2023, 2, 23), pessoa: "Rudi"},

    {data: new Date(2023, 2, 27), pessoa: "Diretor"},
    {data: new Date(2023, 2, 28), pessoa: "Thiago"},
    {data: new Date(2023, 2, 29), pessoa: "Thiago"},
    {data: new Date(2023, 2, 30), pessoa: "Rudi"},

    {data: new Date(2023, 3, 3), pessoa: "Diretor"},
    {data: new Date(2023, 3, 4), pessoa: "Thiago"},
    {data: new Date(2023, 3, 5), pessoa: "Rudi"},
    {data: new Date(2023, 3, 6), pessoa: "Rudi"},

    {data: new Date(2023, 3, 10), pessoa: "Diretor"},
    {data: new Date(2023, 3, 11), pessoa: "Thiago"},
    {data: new Date(2023, 3, 12), pessoa: "Diretor"},
    {data: new Date(2023, 3, 13), pessoa: "Rudi"},

    {data: new Date(2023, 3, 17), pessoa: "Diretor"},
    {data: new Date(2023, 3, 18), pessoa: "Thiago"},
    {data: new Date(2023, 3, 19), pessoa: "Thiago"},
    {data: new Date(2023, 3, 20), pessoa: "Rudi"},

    {data: new Date(2023, 3, 24), pessoa: "Diretor"},
    {data: new Date(2023, 3, 25), pessoa: "Thiago"},
    {data: new Date(2023, 3, 26), pessoa: "Rudi"},
    {data: new Date(2023, 3, 27), pessoa: "Rudi"},

    {data: new Date(2023, 4, 2), pessoa: "Thiago"},
    {data: new Date(2023, 4, 3), pessoa: "Diretor"},
    {data: new Date(2023, 4, 4), pessoa: "Rudi"},

    {data: new Date(2023, 4, 8), pessoa: "Diretor"},
    {data: new Date(2023, 4, 9), pessoa: "Thiago"},
    {data: new Date(2023, 4, 10), pessoa: "Rudi"},
    {data: new Date(2023, 4, 11), pessoa: "Rudi"},

    {data: new Date(2023, 4, 15), pessoa: "Diretor"},
    {data: new Date(2023, 4, 16), pessoa: "Thiago"},
    {data: new Date(2023, 4, 17), pessoa: "Diretor"},
    {data: new Date(2023, 4, 18), pessoa: "Rudi"},

    {data: new Date(2023, 4, 22), pessoa: "Diretor"},
    {data: new Date(2023, 4, 23), pessoa: "Thiago"},
    {data: new Date(2023, 4, 24), pessoa: "Thiago"},
    {data: new Date(2023, 4, 25), pessoa: "Rudi"},

    {data: new Date(2023, 4, 29), pessoa: "Diretor"},
    {data: new Date(2023, 4, 30), pessoa: "Thiago"},
    {data: new Date(2023, 4, 31), pessoa: "Rudi"},
    {data: new Date(2023, 5, 1), pessoa: "Rudi"},

    {data: new Date(2023, 5, 5), pessoa: "Diretor"},
    {data: new Date(2023, 5, 6), pessoa: "Thiago"},
    {data: new Date(2023, 5, 7), pessoa: "Diretor"},
    {data: new Date(2023, 5, 8), pessoa: "Rudi"},

    {data: new Date(2023, 5, 12), pessoa: "Diretor"},
    {data: new Date(2023, 5, 13), pessoa: "Thiago"},
    {data: new Date(2023, 5, 14), pessoa: "Thiago"},
    {data: new Date(2023, 5, 15), pessoa: "Rudi"},

    {data: new Date(2023, 5, 19), pessoa: "Diretor"},
    {data: new Date(2023, 5, 20), pessoa: "Thiago"},
    {data: new Date(2023, 5, 21), pessoa: "Rudi"},
    {data: new Date(2023, 5, 22), pessoa: "Rudi"},

    {data: new Date(2023, 5, 26), pessoa: "Diretor"},
    {data: new Date(2023, 5, 27), pessoa: "Thiago"},
    {data: new Date(2023, 5, 28), pessoa: "Diretor"},
    {data: new Date(2023, 5, 29), pessoa: "Rudi"},

    {data: new Date(2023, 6, 3), pessoa: "Diretor"},
    {data: new Date(2023, 6, 4), pessoa: "Thiago"},
    {data: new Date(2023, 6, 5), pessoa: "Thiago"},
    {data: new Date(2023, 6, 6), pessoa: "Rudi"},
]

for (let m = 0; m < plantaodiario.length; m++ ) {

    if ( (datahoje.getDate() === plantaodiario[m].data.getDate() ) && (datahoje.getMonth() === plantaodiario[m].data.getMonth()) && (datahoje.getFullYear() === plantaodiario[m].data.getFullYear()) ) {  
        document.querySelector('#plantaodiario').innerHTML = plantaodiario[m].data.getDate() + '/' + (plantaodiario[m].data.getMonth()+1) + ' - ' + plantaodiario[m].pessoa
    } else if (datahoje.getDay() == 5) {
        document.querySelector('#plantaodiario').innerHTML = 'Ver plantão de sexta'
    }  else if (datahoje.getDay() == 6) {
        document.querySelector('#plantaodiario').innerHTML = 'Feliz Sábado!'
    } else if (datahoje.getDay() == 0) {
        document.querySelector('#plantaodiario').innerHTML = 'Hoje é domingo.'
    }
}