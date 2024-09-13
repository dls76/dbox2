window.addEventListener("load", mostrarAnimacaoAniversariante)
// window.addEventListener("load", show)


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
    {nome: "Andressa Cristina Schmidt dos Santos", data: new Date (2024, 1, 7), dia: 7, mes: 1, ano: 1985, funcao: "Orientadora", foto:"img/anivImg/user.pngfevereiro/andressa.jpg"},
    {nome: "Stephany Moralles Vinharski", data: new Date (2024, 1, 10), dia: 10, mes: 1, ano: 1995, funcao: "Psicóloga", foto:"img/anivImg/user.pngfevereiro/stephanie.jpg"},
    {nome: "Lucia Milczuk", data: new Date (2024, 1, 16), dia: 16, mes: 1, ano: 1960, funcao: "Monitora", foto:"img/anivImg/user.pngfevereiro/lucia.jpg"},
    {nome: "Pamela Quintino Machado", data: new Date (2024, 1, 17), dia: 17, mes: 1, ano: 1995, funcao: "Professora", foto:"img/anivImg/user.pngfevereiro/pamela.jpg"},
    {nome: "Julia Rocha de Magalhães", data: new Date (2024, 1, 18), dia: 18, mes: 1, ano: 2000, funcao: "Recepcionista", foto:"img/anivImg/user.pngfevereiro/julia.jpg"},
    {nome: "Luciane Silverio Desbessel", data: new Date (2024, 1, 21), dia: 21, mes: 1, ano: 1978, funcao: "Professora", foto:"img/anivImg/user.pngfevereiro/luciane.jpg"},

    //Março
    {nome: "Rosiane Gonzales dos Reis", data: new Date(2024, 2, 2), dia: 2, mes: 2, ano: 1971, funcao: "Professora", foto: 'img/anivImg/marco/rosiane.jpg'},
    {nome: "Fillipe Alves Leite", data: new Date(2024, 2, 8), dia: 8, mes: 2, ano: 1986, funcao: "Professor", foto: 'img/anivImg/marco/fillipeleite.jpg'},
    {nome: "Sarita Vieira Santos", data: new Date(2024, 2, 14), dia: 14, mes: 2, ano: 1981, funcao: "Orientadora", foto: 'img/anivImg/marco/sarita.jpg'},
    {nome: "Paulo Henrique Mandoio Diniz", data: new Date(2024, 2, 18), dia: 18, mes: 2, ano: 1995, funcao: "Professor", foto: 'img/anivImg/marco/paulo.jpg'},
    {nome: "Douglas Leal dos Santos", data: new Date(2024, 2, 20), dia: 20, mes: 2, ano: 1976, funcao: "Diretor", foto: 'img/anivImg/marco/dls.png'},
    {nome: "Alexandro Antonio Procopio Gaspar ", data: new Date(2024, 2, 29), dia: 29, mes: 2, ano: 1981, funcao: "Vice-diretor", foto: 'img/anivImg/marco/alexandro.jpg'},
    
    // Abril
    {nome: "Jane de Souza Inocencio Pinto", data: new Date(2024, 3, 2), dia: 2, mes: 3, ano: 1975, funcao: "Função", foto: 'img/anivImg/marco/jane.jpg'},
    {nome: "Jhéssica Naymara Ramalho de Araújo", data: new Date(2024, 3, 3), dia: 3, mes: 3, ano: 1994, funcao: "Função", foto: 'img/anivImg/marco/jhessica.jpg'},
    {nome: "Elaine Cristina Viana Firmino", data: new Date(2024, 3, 6), dia: 6, mes: 3, ano: 1981, funcao: "Função", foto: 'img/anivImg/marco/elaine.jpg'},
    {nome: "Karen Myrely Marloch ", data: new Date(2024, 3, 7), dia: 7, mes: 3, ano: 1990, funcao: "Função", foto: 'img/anivImg/abril/karen.jpg'},
    {nome: "Marcio dos Santos Gomes", data: new Date(2024, 3, 10), dia: 10, mes: 3, ano: 1979, funcao: "Função", foto: 'img/anivImg/abril/marcio.jpg'},
    {nome: "Sandra de Oliveira Ferreira Mella", data: new Date(2024, 3, 10), dia: 10, mes: 3, ano: 1979, funcao: "Função", foto: 'img/anivImg/abril/sandra.jpg'},
    {nome: "Edmilson José Ribeiro dos Santos", data: new Date(2024, 3, 11), dia: 11, mes: 3, ano: 1972, funcao: "Função", foto: 'img/anivImg/abril/edmilson.jpg'},
    {nome: "Barbara Bastos Goncalves Lopes", data: new Date(2024, 3, 17), dia: 17, mes: 3, ano: 1989, funcao: "Função", foto: 'img/anivImg/abril/barbara.jpg'},
    {nome: "Pamela Fontoura Barbosa", data: new Date(2024, 3, 17), dia: 17, mes: 3, ano: 1988, funcao: "Função", foto: 'img/anivImg/abril/pamela.jpg'},
    {nome: "Rafaella Alana Varela da Silva", data: new Date(2024, 3, 19), dia: 19, mes: 3, ano: 2006, funcao: "Função", foto: 'img/anivImg/abril/rafaela.jpg'},
    {nome: "Fernanda Wiltemburg", data: new Date(2024, 3, 25), dia: 25, mes: 3, ano: 1986, funcao: "Função", foto: 'img/anivImg/abril/fernanda.jpg'},
    {nome: "Joelma Castro de Santana Abreu", data: new Date(2024, 3, 29), dia: 29, mes: 3, ano: 1988, funcao: "Função", foto: 'img/anivImg/abril/joelma.jpg'},
    {nome: "Joice de Oliveira Dias", data: new Date(2024, 4, 3), dia: 3, mes: 4, ano: 1988, funcao: "Função", foto: 'img/anivImg/abril/.jpg'},

    // Maio
    {nome: "Elaine Akie Arima de Campos", data: new Date(2024, 4, 4), dia: 4, mes: 4, ano: 1975, funcao: "Professora", foto: 'img/anivImg/may/elaine.jpg'},
    {nome: "Luciani Vieira Braga Ribeiro", data: new Date(2024, 4, 8), dia: 8, mes: 4, ano: 1976, funcao: "Auxiliar Contraturno", foto: 'img/anivImg/may/luciani.jpg'},
    {nome: "Eliane Lima Corrêa", data: new Date(2024, 4, 9), dia: 9, mes: 4, ano: 1975, funcao: "Professora", foto: 'img/anivImg/may/elianelima.jpg'},
    {nome: "Adriene dos Santos Anacleto", data: new Date(2024, 4, 10), dia: 10, mes: 4, ano: 1992, funcao: "Professora", foto: 'img/anivImg/may/adriene.jpg'},
    {nome: "Carmelis Del Valle Garcia Guilarte", data: new Date(2024, 4, 10), dia: 10, mes: 4, ano: 1980, funcao: "Monitora", foto: 'img/anivImg/may/carmelis.jpg'},
    {nome: "Maria Zelia de Souza Silva Queiroz", data: new Date(2024, 4, 10), dia: 10, mes: 4, ano: 1990, funcao: "Auxiliar de Classe", foto: 'img/anivImg/may/maria.jpg'},
    {nome: "Pablo Silva Pimentel", data: new Date(2024, 4, 14), dia: 14, mes: 4, ano: 1988, funcao: "Professor", foto: 'img/anivImg/may/pablo.jpg'},
    {nome: "Eliane Cristina Manfrini Gualberto", data: new Date(2024, 4, 21), dia: 21, mes: 4, ano: 1978, funcao: "Monitora", foto: 'img/anivImg/may/eliane.jpg'},
    {nome: "Valeria Geraldino Miranda", data: new Date(2024, 4, 25), dia: 25, mes: 4, ano: 1970, funcao: "Orientadora", foto: 'img/anivImg/may/valeria.jpg'},
    {nome: "Beatriz Jimenez Pinon", data: new Date(2024, 4, 27), dia: 27, mes: 4, ano: 1997, funcao: "Zeladora", foto: 'img/anivImg/may/beatriz.jpg'},
    {nome: "Ariannis Pinon Frometa", data: new Date(2024, 4, 28), dia: 28, mes: 4, ano: 1980, funcao: "Zeladora", foto: 'img/anivImg/may/ariannis.jpg'},

    // Junho
    {nome: "Larissa de Lima Cabral Martins", data: new Date(2024, 5, 6), dia: 6, mes: 5, ano: 1995, funcao: "Professora", foto: 'img/anivImg/junho/larissa.jpg'},
    {nome: "Izabel Marques Batista", data: new Date(2024, 5, 6), dia: 6, mes: 5, ano: 1976, funcao: "Zeladora", foto: 'img/anivImg/junho/izabel.png'},
    {nome: "Andrezza Santos", data: new Date(2024, 5, 14), dia: 14, mes: 5, ano: 2024, funcao: "Zeladora", foto: ''},
    {nome: "Rutilea Lopes", data: new Date(2024, 5, 14), dia: 14, mes: 5, ano: 2024, funcao: "Tutora", foto: ''},
    {nome: "Eraldo Soares Silva Junior", data: new Date(2024, 5, 17), dia: 17, mes: 5, ano: 1983, funcao: "Professor", foto: 'img/anivImg/junho/eraldo.jpg'},
    {nome: "Joyce da Silva Ferreira", data: new Date(2024, 5, 28), dia: 28, mes: 5, ano: 1992, funcao: "Professora", foto: 'img/anivImg/junho/joyce.jpg'},
    
    // Julho
    {nome: "Ana Prado Bevilaqua", data: new Date(2024, 6, 4), dia: 4, mes: 6, ano: 1978, funcao: "Função", foto: 'img/anivImg/user.png'},
    {nome: "Daniela Regina Lamarques Isobe", data: new Date(2024, 6, 4), dia: 4, mes: 6, ano: 1975, funcao: "Função", foto: 'img/anivImg/user.png'},
    {nome: "Cacilda Smaha Mannala", data: new Date(2024, 6, 16), dia: 16, mes: 6, ano: 1972, funcao: "Função", foto: 'img/anivImg/user.png'},
    {nome: "Ana Amelia Loureço Simas", data: new Date(2024, 6, 21), dia: 21, mes: 6, ano: 1978, funcao: "Função", foto: 'img/anivImg/user.png'},
    {nome: "Egislaine Regina Gonsaga", data: new Date(2024, 6, 22), dia: 22, mes: 6, ano: 1978, funcao: "Função", foto: 'img/anivImg/user.png'},
    {nome: "Luciana de Moraes Jardim", data: new Date(2024, 6, 22), dia: 22, mes: 6, ano: 1972, funcao: "Função", foto: 'img/anivImg/user.png'},
    {nome: "Nailson Veras do Nascimento", data: new Date(2024, 6, 24), dia: 24, mes: 6, ano: 1979, funcao: "Função", foto: 'img/anivImg/user.png'},
    {nome: "Thayse Oliveira dos Passos", data: new Date(2024, 6, 25), dia: 25, mes: 6, ano: 1984, funcao: "Função", foto: 'img/anivImg/user.png'},
    // {nome: "Leidiane Cristina Germano", data: new Date(2024, 6, 27), dia: 27, mes: 6, ano: 1988, funcao: "Função", foto: 'img/anivImg/user.png'},
    {nome: "Mônica Cristina Martins de Novais", data: new Date(2024, 6, 31), dia: 31, mes: 6, ano: 1979, funcao: "Função", foto: 'img/anivImg/user.png'},
    
    // Agosto
    {nome: "Vanessa Moura de Freitas", data: new Date(2024, 7, 2), dia: 2, mes: 7, ano: 1985, funcao: "Zeladora", foto: 'img/anivImg/agosto/vanessa.png'},
    {nome: "Caroline Cristina de Brito", data: new Date(2024, 7, 4), dia: 4, mes: 7, ano: 1988, funcao: "Coordenadora", foto: 'img/anivImg/agosto/carol.png'},
    {nome: "Leonardo Ormianin Torres", data: new Date(2024, 7, 12), dia: 12, mes: 7, ano: 1999, funcao: "Professor", foto: 'img/anivImg/agosto/leonardo.png'},
    {nome: "Allan Almeida Lima", data: new Date(2024, 7, 26), dia: 26, mes: 7, ano: 1982, funcao: "Professor", foto: 'img/anivImg/agosto/allan.png'},
    {nome: "Laís Daniele dos Santos", data: new Date(2024, 7, 28), dia: 28, mes: 7, ano: 2001, funcao: "Auxiliar", foto: 'img/anivImg/agosto/lais.png'},
    
    // Setembro
    // {nome: "Renata Brasil Lima", data: new Date(2024, 8, 1), dia: 1, mes: 8, ano: 1993, funcao: "Orientadora", foto: 'img/anivImg/setembro/renata.jpg'},
    {nome: "Ingo Iwankiw", data: new Date(2024, 8, 2), dia: 2, mes: 8, ano: 1980, funcao: "Monitor", foto: 'img/anivImg/setembro/ingo.jpg'},
    {nome: "Felipe Guilherme Lima Bueno da Silva", data: new Date(2024, 8, 11), dia: 11, mes: 8, ano: 1988, funcao: "Professor", foto: 'img/anivImg/setembro/felipeguilherme.jpg'},
    {nome: "Margarete do Nascimento Monteiro", data: new Date(2024, 8, 12), dia: 12, mes: 8, ano: 1971, funcao: "SOPI", foto: 'img/anivImg/setembro/marga.png'},
    {nome: "Daniel Faria Filho", data: new Date(2024, 8, 26), dia: 26, mes: 8, ano: 1963, funcao: "Função", foto: 'img/anivImg/setembro/dani.png'},
    {nome: "Vinicius Fernando Serain", data: new Date(2024, 8, 27), dia: 27, mes: 8, ano: 1990, funcao: "Monitor", foto: 'img/anivImg/setembro/vini.png'},
    {nome: "Joniel Mendes de Araujo", data: new Date(2024, 8, 30), dia: 30, mes: 8, ano: 1989, funcao: "Professor", foto: 'img/anivImg/setembro/joniel.png'},
    
    // Outubro
    {nome: "Daisy Karin Silva Ferreira", data: new Date(2024, 9, 6), dia: 6, mes: 9, ano: 1993, funcao: "Call Center", foto: 'img/anivImg/outubro/daisy.jpeg'},
    {nome: "Larissa Cardoso de Franca Goncalves", data: new Date(2024, 9, 6), dia: 6, mes: 9, ano: 1987, funcao: "Professora", foto: 'img/anivImg/outubro/larissa.jpeg'},
    {nome: "Jaqueline Marcia Hoffmeister Senko", data: new Date(2024, 9, 9), dia: 9, mes: 9, ano: 1980, funcao: "Coordenadora", foto: 'img/anivImg/outubro/jaquelinesenko.png'},
    {nome: "Joice Mari da Silva Pereira", data: new Date(2024, 9, 10), dia: 10, mes: 9, ano: 1992, funcao: "Professora", foto: 'img/anivImg/outubro/joice.jpg'},
    {nome: "Christian Felipe Preciliano Santiago", data: new Date(2024, 9, 12), dia: 12, mes: 9, ano: 2004, funcao: "Monitor", foto: 'img/anivImg/outubro/christian.jpg'},
    {nome: "Douglas Frohlich Reded", data: new Date(2024, 9, 19), dia: 19, mes: 9, ano: 1992, funcao: "TI", foto: 'img/anivImg/outubro/douglasfrohlich.jpeg'},
    {nome: "Silmara de Lima Grochka", data: new Date(2024, 9, 19), dia: 19, mes: 9, ano: 1993, funcao: "Tutora", foto: 'img/anivImg/outubro/silmara.jpg'},
    {nome: "Carmem Aparecida Abolis da Silva", data: new Date(2024, 9, 25), dia: 25, mes: 9, ano: 1982, funcao: "Professora", foto: 'img/anivImg/outubro/carmem.jpg'},
    {nome: "Rosineide de Souza Westphal", data: new Date(2024, 9, 25), dia: 25, mes: 9, ano: 1982, funcao: "Monitora", foto: 'img/anivImg/outubro/rosineide.jpg'},
    
    // Novembro
    {nome: "Bruna do Rocio Biscoto dos Santos", data: new Date(2024, 10, 15), dia: 15, mes: 10, ano: 1997, funcao: "Auxiliar", foto: 'img/anivImg/user.png'},
    {nome: "Josiane Vieira Lopes Klimek", data: new Date(2024, 10, 18), dia: 18, mes: 10, ano: 1975, funcao: "Tesoureira", foto: 'img/anivImg/user.png'},
    {nome: "Henry Fidelis Pereira", data: new Date(2024, 10, 19), dia: 19, mes: 10, ano: 1996, funcao: "Professor", foto: 'img/anivImg/user.png'},
    
    // Dezembro
    {nome: "Carin Grime de Melo", data: new Date(2024, 11, 13), dia: 13, mes: 11, ano: 1988, funcao: "Secretária", foto: 'img/anivImg/user.png'},
    {nome: "Glauton Vinicius de Andrade", data: new Date(2024, 11, 27), dia: 27, mes: 11, ano: 1968, funcao: "Professor", foto: 'img/anivImg/user.png'},
]

function mostrarAnimacaoAniversariante() {
    let data = new Date()
    let diaSemana = data.getDay()
    let dia = data.getDate() 
    let mes = data.getMonth()
    let ano = data.getFullYear()

    const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    document.querySelector('#hoje').innerText = `${diasDaSemana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}` 

    const aniversariantesDoDia = [] 

    //Verifica quem faz aniversário hoje e inclui o objeto no array aniversariantesDoDia
    for ( i=0; i < pessoas.length; i++ ) {

        if (pessoas[i].dia == dia && pessoas[i].mes == mes) {
          aniversariantesDoDia.push(pessoas[i]) 
        }
    } 

    var n = aniversariantesDoDia.length

    if ( n > 0 ) {
           
        
        let k = 0
        
        do {
            
            document.querySelector('#conteinerAniv').style.display = "block"
            // declare variables and create elements
            const conteinerAniversariantes = document.querySelector("#boxAniversariantes")

            const cardAniversariantes = document.createElement("div")   
            const fotoAniversariantes = document.createElement("div")
            const nomeAniversariante = document.createElement("div")
            const funcaoAniversariante = document.createElement("div")
            const img = new Image()
            
            // add classes
            cardAniversariantes.classList.add('cardAniversariantes')
            fotoAniversariantes.classList.add('fotoAniversariantes')
            nomeAniversariante.classList.add('nomeAniversariante')
            funcaoAniversariante.classList.add('funcaoAniversariante')
            img.classList.add('foto')
                       
            // insert contents
            img.src = aniversariantesDoDia[k].foto
            nomeAniversariante.innerHTML = aniversariantesDoDia[k].nome
            funcaoAniversariante.innerHTML = aniversariantesDoDia[k].funcao
            
            // append
            fotoAniversariantes.appendChild(img)
            cardAniversariantes.appendChild(fotoAniversariantes)
            cardAniversariantes.appendChild(nomeAniversariante)
            cardAniversariantes.appendChild(funcaoAniversariante)
            conteinerAniversariantes.appendChild(cardAniversariantes)
    
            k++

        } while ( k < n )
    
    } 
    
}


let bt = document.querySelector('#fecharAniversariantes')
bt.addEventListener('click', ()=>{
    document.querySelector('#conteinerAniv').style.display = "none"
    document.body.style.position = '';
    document.body.style.top = '';
}) 