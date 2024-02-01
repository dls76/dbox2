window.addEventListener("load", show)

const mss = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const pessoas = [
    
    //Janeiro
    {nome: "Natalia Martins Schneider", dia: 3, mes: 0, ano: 1998, funcao: "Professora", foto:"img/account.png"},
    {nome: "Solange de Jesus Camargo", dia: 4, mes: 0, ano: 1977, funcao: "Professora", foto:"img/account.png"},
    {nome: "Simone Figueiredo Boso", dia: 13, mes: 0, ano: 1974, funcao: "Professora", foto:"img/account.png"},
    {nome: "Maria de Lourdes Cardoso de Oliveira Dubinski", dia: 14, mes: 0, ano: 1963, funcao: "Orientadora", foto:"img/account.png"},
    {nome: "Camila dos Anjos Moura", dia: 20, mes: 0, ano: 1990, funcao: "Coordenadora", foto:"img/account.png"},
    {nome: "Stephanie Dayanne Barbosa Sant Ana Rudiniki", dia: 21, mes: 0, ano: 1988, funcao: "Professora", foto:"img/account.png"},
    {nome: "Lidia Aparecida Andrades Montes", dia: 28, mes: 0, ano: 1965, funcao: "Professora", foto:"img/account.png"},
    
    // Fevereiro
    {nome: "Andressa Cristina Schmidt dos Santos", dia: 7, mes: 1, ano: 1985, funcao: "Orientadora", foto:"img/account.png"},
    {nome: "Janaina Andrade de Lima", dia: 7, mes: 1, ano: 1980, funcao: "", foto:"img/account.png"},
    {nome: "Stephany Moralles Vinharski", dia: 10, mes: 1, ano: 1995, funcao: "Psicóloga", foto:"img/account.png"},
    {nome: "Lucia Milczuk", dia: 16, mes: 1, ano: 1960, funcao: "Monitora", foto:"img/account.png"},
    {nome: "Pamela Quintino Machado", dia: 17, mes: 1, ano: 1995, funcao: "Professora", foto:"img/account.png"},
    {nome: "Julia Rocha de Magalhães", dia: 18, mes: 1, ano: 2000, funcao: "Recepcionista", foto:"img/account.png"},
    {nome: "Luciane Silverio Desbessel", dia: 21, mes: 1, ano: 1978, funcao: "Professora", foto:"img/account.png"},
]


// Mostra os aniversariantes do dia na home
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