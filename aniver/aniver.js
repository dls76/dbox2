function show() {

    var data = new Date()
    var diaSemana = data.getDay()
    var dia = data.getDate() 
    var mes = data.getMonth()
    var ano = data.getFullYear()

    dia = 27

    const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    const pessoas = [
                
    {nome: "Tiago Moreira", dia: 1, mes: 0 , ano: 1988, funcao: "Professor", foto: "img/dezembro/glauton.jpg"},
    {nome: "Natalia Martins Schneider", dia: 3, mes: 0 , ano: 1988, funcao: "Professora", foto: "img/dezembro/glauton.jpg"},
    {nome: "Solange de Jesus Camargo Fritsche", dia: 4, mes: 0 , ano: 1977, funcao: "Professora", foto: "img/dezembro/glauton.jpg"},
    {nome: "Simone Figueiredo Boso", dia: 13, mes: 0 , ano: 1974, funcao: "Professora", foto: "img/dezembro/glauton.jpg"},
    {nome: "Maria de Lourdes Cardoso de Oliveira Dubinski", dia: 14, mes: 0 , ano: 1963, funcao: "Orientadora", foto: "img/dezembro/glauton.jpg"},
    {nome: "Camila dos Anjos Moura", dia: 20, mes: 0 , ano: 1990, funcao: "Coordenadora", foto: "img/dezembro/glauton.jpg"},
    {nome: "Stephanie Dayanne Barbosa Sant Ana Rudiniki", dia: 21, mes: 0 , ano: 1988, funcao: "Professora", foto: "img/dezembro/glauton.jpg"},
    {nome: "Lidia Aparecida de Andrades Montes", dia: 28, mes: 0 , ano: 1965, funcao: "Professora", foto: "img/dezembro/glauton.jpg"},



    {nome: "Valdene Neres de Sena Reis", dia: 12, mes: 11, ano: 1967, funcao: "Zeladora", foto:"img/dezembro/valdene.jpg"},
    {nome: "Carin Grime de Melo", dia: 13, mes: 11, ano: 1988, funcao: "Secretária", foto:"img/dezembro/carin.jpg"},
    {nome: "Glauton Vinicius de Andrade", dia: 27, mes: 11, ano: 1968, funcao: "Professor", foto:"img/dezembro/glauton.jpg"},

    ]

    const aniversariantesDoDia = [] 

    // Data atual completa
    // document.getElementById('hoje').innerHTML = `Hoje é ${diasDaSemana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano}.`

    //Verifica quem faz aniversário hoje e inclui o objeto no array aniversariantesDoDia
    for ( i=0; i < pessoas.length; i++ ) {

        if (pessoas[i].dia == dia && pessoas[i].mes == mes) {
          aniversariantesDoDia.push(pessoas[i]) 
        }
    } 

    var n = aniversariantesDoDia.length

    if ( n > 0 ) {
           
        var k = 0
        
        do {
            
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
    
    } else {
        // document.body.style.display = "none"
        window.location="https://dls76.github.io/dbox2/"
    }
}

function fechar() {
    document.getElementById('conteiner').style.display = "none"
    window.location="https://dls76.github.io/dbox2/"
}
