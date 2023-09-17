window.addEventListener("load", show)

const mss = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const pessoas = [
    
    //JULHO	
    {nome: "Ana Prado Bevilaqua", dia: 4, mes: 6, ano: 1978, funcao: "Professor(a)", foto:"img/avatar.png", nascimento: new Date()},
    {nome: "Daniela Regina Lamarques Isobe", dia: 4, mes: 6, ano: 1975, funcao: "Coordenadora", foto:"img/account.png", nascimento: new Date()},
    {nome: "Noemi Macedo Amorim", dia: 7, mes: 6, ano: 1976, funcao: "Professor(a)", foto:"img/account.png", nascimento: new Date()},
    {nome: "Cacilda Smaha Mannala", dia: 16, mes: 6, ano: 1972, funcao: "Bibliotecaria", foto:"img/account.png", nascimento: new Date()},
    {nome: "Ana Amelia Loureço Simas", dia: 21, mes: 6, ano: 1978, funcao: "Função", foto:"img/account.png", nascimento: new Date()},
    {nome: "Egislaine Regina Gonsaga", dia: 22, mes: 6, ano: 1978, funcao: "Função", foto:"img/account.png", nascimento: new Date()},
    {nome: "Nailson Veras do Nascimento", dia: 24, mes: 6, ano: 1979, funcao: "Coordenador(a) Disciplinar", foto:"img/account.png", nascimento: new Date()},
    {nome: "Thayse Oliveira dos Passos", dia: 25, mes: 6, ano: 1984, funcao: "Auxiliar de Biblioteca", foto:"img/account.png", nascimento: new Date()},
    {nome: "Eloiza Carla dos Santos", dia: 27, mes: 6, ano: 2002, funcao: "Auxiliar de Secretaria", foto:"img/account.png", nascimento: new Date()},
    {nome: "Leidiane Cristina Germano", dia: 27, mes: 6, ano: 1988, funcao: "Função", foto:"img/account.png", nascimento: new Date()},
    {nome: "Monica Cristina Martins de Novais", dia: 31, mes: 6, ano: 1979, funcao: "Função", foto:"img/account.png", nascimento: new Date()},
    
    //AGOSTO
    {nome: "Vanessa Moura de Freitas", dia: 2, mes: 7, ano: 1985, funcao: "Zeladora", foto:"img/anivImg/Vanessa.jpg", nascimento: new Date()},
    {nome: "Caroline Cristina de Brito", dia: 4, mes: 7, ano: 1988, funcao: "Coordenadora Pedagógica", foto:"img/anivImg/Caroline.jpg", nascimento: new Date()},
    {nome: "Elizabeth Alves Braun Soares", dia: 6, mes: 7, ano: 1971, funcao: "Auxiliar de Contraturno", foto:"img/anivImg/Elizabeth.jpg", nascimento: new Date()},
    {nome: "Leonardo Ormianin Torres", dia: 12, mes: 7, ano: 1999, funcao: "Professor(a)", foto:"img/anivImg/Leonardo.jpg", nascimento: new Date()},
    {nome: "Jessica Aparecida Dionisio", dia: 12, mes: 7, ano: 1996, funcao: "Tutora", foto:"img/anivImg/Jessica.jpg", nascimento: new Date()},
    {nome: "Allan Almeida Lima", dia: 26, mes: 7, ano: 1982, funcao: "Professor(a)", foto:"img/anivImg/Allan.jpg", nascimento: new Date()},
    {nome: "Laís Daniele dos Santos", dia: 28, mes: 7, ano: 2001, funcao: "Auxiliar Contraturno", foto:"img/anivImg/Lais.jpg", nascimento: new Date()},
    
    //SETEMBRO
    {nome: "Renata Brasil Lima", dia: 1, mes: 8, ano: 1993, funcao: "Função", foto:"img/anivImg/user.png", nascimento: new Date()},
    {nome: "Ingo Iwankiw", dia: 2, mes: 8, ano: 1980, funcao: "Monitor", foto:"img/anivImg/user.png", nascimento: new Date()},
    {nome: "Felipe Guilherme Lima Bueno da Silva", dia: 11, mes: 8, ano: 1988, funcao: "Função", foto:"img/anivImg/user.png", nascimento: new Date()},
    {nome: "Rafael Guilherme Palma Silva", dia: 13, mes: 8, ano: 1988, funcao: "Função", foto:"img/anivImg/user.png", nascimento: new Date()},
    {nome: "Rafaela Lourenco de Mello", dia: 25, mes: 8, ano: 1990, funcao: "Função", foto:"img/anivImg/user.png", nascimento: new Date()},
    {nome: "Daniel Faria Filho", dia: 26, mes: 8, ano: 1963, funcao: "Função", foto:"img/anivImg/user.png", nascimento: new Date()},
    {nome: "Vinicius Fernando Serain", dia: 27, mes: 8, ano: 1990, funcao: "Pastoral", foto:"img/anivImg/user.png", nascimento: new Date()},

    //OUTUBRO
    {nome: "Daisy Karin Silva Ferreira", dia: 6, mes: 9, ano: 1993, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Larissa Cardoso de Franca Goncalves", dia: 2, mes: 9, ano: 1980, funcao: "Monitor", foto:"", nascimento: new Date()},
    {nome: "Gisele Cordeiro da Silva", dia: 11, mes: 9, ano: 1988, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Rafael Guilherme Palma Silva", dia: 13, mes: 9, ano: 1988, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Rafaela Lourenco de Mello", dia: 25, mes: 9, ano: 1990, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Daniel Faria Filho", dia: 26, mes: 9, ano: 1963, funcao: "Função", foto:"", nascimento: new Date()},
    {nome: "Vinicius Fernando Serain", dia: 27, mes: 9, ano: 1990, funcao: "Pastoral", foto:"", nascimento: new Date()},
    
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
