window.addEventListener("load", show)

const mss = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const pessoas = [
    
    //JULHO
    {nome: "Thiago Andrews Carvalho", dia: 24, mes: 6, ano: 1984, funcao: "Vice-diretor", foto:"img/anivImg/julho/thiagoandrews.png", nascimento: new Date(1984, 6, 24)},
    
    //AGOSTO
    {nome: "Vanessa Moura de Freitas", dia: 2, mes: 7, ano: 1985, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Caroline Cristina de Brito", dia: 4, mes: 7, ano: 1988, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Elizabeth Alves Braun Soares", dia: 6, mes: 7, ano: 1971, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Leonardo Ormianin Torres", dia: 12, mes: 7, ano: 1999, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Jessica Aparecida Dionisio", dia: 12, mes: 7, ano: 1996, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Allan Almeida Lima", dia: 26, mes: 7, ano: 1982, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Laís Daniele dos Santos", dia: 28, mes: 7, ano: 2001, funcao: "Função", foto:"", nascimento: new Date()},
    
    //SETEMBRO
    {nome: "Renata Brasil Lima", dia: 1, mes: 8, ano: 1993, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Ingo Iwankiw", dia: 2, mes: 8, ano: 1980, funcao: "Monitor", foto:"", nascimento: new Date()},
    {nome: "Felipe Guilherme Lima Bueno da Silva", dia: 11, mes: 8, ano: 1988, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Rafael Guilherme Palma Silva", dia: 13, mes: 8, ano: 1988, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Rafaela Lourenco de Mello", dia: 25, mes: 8, ano: 1990, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Daniel Faria Filho", dia: 26, mes: 8, ano: 1963, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Vinicius Fernando Serain", dia: 27, mes: 8, ano: 1990, funcao: "Pastoral", foto:"", nascimento: new Date()},

    //OUTUBRO

    
    //NOVEMBRO

    
    //DEZEMBRO

    
]

function show() {

    var data = new Date()
    var dia = data.getDate()   
    var mesAno = data.getMonth()

    for ( i=0; i < pessoas.length; i++ ) {

        if ( pessoas[i].dia == dia && pessoas[i].mes == mesAno ) {

            document.querySelector('#bt-aniver').style.display = "none"

            var div = document.createElement('div')
            div.classList.add('aniversariante')
            document.querySelector('#aniver-img').appendChild(div)

            var img = new Image()
            img.src = pessoas[i].foto
            img.classList.add('foto')
            div.appendChild(img)

            const nomeAniver = document.createElement("div")
            nomeAniver.innerHTML = pessoas[i].nome
            nomeAniver.classList.add('aniver-nome')
            div.appendChild(nomeAniver)
            
            const funcaoAniver = document.createElement("div")
            funcaoAniver.innerHTML = pessoas[i].funcao
            funcaoAniver.classList.add('aniver-funcao')
            div.appendChild(funcaoAniver)

            // const proxAniv = document.querySelector('#proxAniv')
            // proxAniv.innerHTML = mss[mesAno]

        } else {    
            
            document.querySelector('#bt-aniver').innerHTML = "ANIVERSARIANTES " + mss[new Date().getMonth()].toUpperCase()
        
        }
    } 
}



    const btNext = document.querySelector('#anivRight')

    btNext.addEventListener('click', ()=>{
        alert('Próximo mês - em breve!')
    })



    const btPrev = document.querySelector('#anivLeft')

    btPrev.addEventListener('click', ()=>{
        alert('Mês anterior - em breve!')
    })
