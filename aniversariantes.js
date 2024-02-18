window.addEventListener("load", show)

const mss = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

const pessoas = [
    
    //Janeiro
    {nome: "Tiago...", data: new Date(2024, 0, 1), dia: 1, mes: 0, ano: 1998, funcao: "Professor", foto:"img/account.png"},
    {nome: "Natalia Martins Schneider", data: new Date(2024, 0, 3), dia: 3, mes: 0, ano: 1998, funcao: "Professora", foto:"img/account.png"},
    {nome: "Solange de Jesus Camargo", data: new Date(2024, 0, 4), dia: 4, mes: 0, ano: 1977, funcao: "Professora", foto:"img/account.png"},
    {nome: "Simone Figueiredo Boso", data: new Date(2024, 0, 13), dia: 13, mes: 0, ano: 1974, funcao: "Professora", foto:"img/account.png"},
    {nome: "Maria de Lourdes Cardoso de Oliveira Dubinski", data: new Date(2024, 0,  ), dia: 14, mes: 0, ano: 1963, funcao: "Orientadora", foto:"img/account.png"},
    {nome: "Camila dos Anjos Moura", data: new Date(2024, 0, 20), dia: 20, mes: 0, ano: 1990, funcao: "Coordenadora", foto:"img/account.png"},
    {nome: "Stephanie Dayanne Barbosa Sant Ana Rudiniki", data: new Date(2024, 0, 21), dia: 21, mes: 0, ano: 1988, funcao: "Professora", foto:"img/account.png"},
    {nome: "Lidia Aparecida Andrades Montes", data: new Date(2024, 0, 28), dia: 28, mes: 0, ano: 1965, funcao: "Professora", foto:"img/account.png"},
    
    // Fevereiro
    {nome: "Andressa Cristina Schmidt dos Santos", data: new Date (2024, 1, 7), dia: 7, mes: 1, ano: 1985, funcao: "Orientadora", foto:"img/anivImg/fevereiro/andressa.jpg"},
    {nome: "Stephany Moralles Vinharski", data: new Date (2024, 1, 10), dia: 10, mes: 1, ano: 1995, funcao: "Psicóloga", foto:"img/anivImg/fevereiro/stephanie.jpg"},
    {nome: "Lucia Milczuk", data: new Date (2024, 1, 16), dia: 16, mes: 1, ano: 1960, funcao: "Monitora", foto:"img/anivImg/fevereiro/lucia.jpg"},
    {nome: "Pamela Quintino Machado", data: new Date (2024, 1, 17), dia: 17, mes: 1, ano: 1995, funcao: "Professora", foto:"img/anivImg/fevereiro/pamela.jpg"},
    {nome: "Julia Rocha de Magalhães", data: new Date (2024, 1, 18), dia: 18, mes: 1, ano: 2000, funcao: "Recepcionista", foto:"img/anivImg/fevereiro/julia.jpg"},
    {nome: "Luciane Silverio Desbessel", data: new Date (2024, 1, 21), dia: 21, mes: 1, ano: 1978, funcao: "Professora", foto:"img/anivImg/fevereiro/luciane.jpg"},

    //Março
    {nome: "Douglas Leal dos Santos", data: new Date(2024, 2, 20), dia: 20, mes: 2, ano: 1976, funcao: "Diretor", foto:"img/anivImg/marco/dls.png"},
]


// Mostra os aniversariantes do dia na home
function show() {

    var data = new Date()
    var dia = data.getDate()   
    var mesAno = data.getMonth()

    for ( i=0; i < pessoas.length; i++ ) {

        const conteinerAniv = document.querySelector('#conteineraniversariantes')

        
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

            var link = document.createElement('a');
            link.href = 'https://dls76.github.io/dbox2/aniversariantes-list.html';
            link.target = '_blank';
            link.innerText = 'Ver Mais'
            link.classList.add('abrirList')
            
            div.appendChild(link)

        } else {    
            
            document.querySelector('#bt-aniver').innerText = "Ver Aniversariantes "
        
        }

    } 
}