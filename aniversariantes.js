window.addEventListener("load", show)

function show() {

    var data = new Date()
    var dia = data.getDate() 
    var mes = data.getMonth()

    const pessoas = [
        // JANEIRO
        {nome: "Rosilene de Araujo Silva", dia: 19, mes: 0, ano: 1967, funcao: "Professora", foto:""},
        {nome: "Roberta Silva Ribeiro Carvalho", dia: 22, mes: 0, ano: 1979, funcao: "Secretária", foto:""},
        {nome: "Guilherme Dionisio Lendecker", dia: 19, mes: 0, ano: 1981, funcao: "Professor", foto:""},
        {nome: "Paula Gavinski Silvestre", dia: 21, mes: 0, ano: 1986, funcao: "Professora", foto:""},
        {nome: "Jheniffer Beatriz de Oliveira", dia: 2, mes: 0, ano: 2001, funcao: "Aux. de Classe", foto:""},
        {nome: "Tatiane Mourão Garcia de Oliveira", dia: 25, mes: 0, ano: 2001, funcao: "Professora", foto:""},

        // FEVEREIRO
        {nome: "Ione Modesto Andrade", dia: 16, mes: 1, ano: 1967, funcao: "Zeladora", foto:""},
        {nome: "Pauline Ferreira Roefero", dia: 24, mes: 1, ano: 1977, funcao: "Professora", foto:""},
        {nome: "Louise Fernanda Franco de Godiu", dia: 13, mes: 1, ano: 1977, funcao: "Professora", foto:""},
        {nome: "Leonardo de Assis Rosa", dia: 23, mes: 1, ano: 1977, funcao: "Professora", foto:""},
        {nome: "Karoline Brendle Medeiros", dia: 16, mes: 1, ano: 1990, funcao: "Coordenadora", foto:""},
        {nome: "Murilo Klimek", dia: 2, mes: 1, ano: 2001, funcao: "TI", foto:""},

        // MARÇO
        {nome: "Wander Rocha de Oliveira", dia: 15, mes: 2, ano: 1963, funcao: "Professor", foto:""},
        {nome: "Hermes da Silva Jardim", dia: 12, mes: 2, ano: 1965, funcao: "Professor", foto:""},
        {nome: "Ana Lucia Santos das Neves", dia: 22, mes: 2, ano: 1976, funcao: "Aux. de Classe", foto:""},
        {nome: "Sirlei Barbosa da Silva Gomes", dia: 2, mes: 2, ano: 1980, funcao: "Aux. Biblioteca", foto:""},
        {nome: "Priscila Paula de Oliveira Albanez", dia: 21, mes: 2, ano: 1988, funcao: "Professora", foto:""},
        {nome: "Douglas Leal dos Santos", dia: 20, mes: 2, ano: 1976, funcao: "Diretor", foto:""},
        {nome: "Letícia Mitchells Rosa", dia: 21, mes: 2, ano: 1976, funcao: "Tutora", foto:""},
        {nome: "Ana Clécia Ferreira Santos", dia: 22, mes: 2, ano: 1976, funcao: "Zeladora", foto:""},
        
        // ABRIL
        {nome: "Denise Padilha Gomes", dia: 19, mes: 3, ano: 1966, funcao: "Orientadora", foto:""},
        {nome: "Sandra Nascimento", dia: 2, mes: 3, ano: 1963, funcao: "Orientadora", foto:""},
        {nome: "Elaine Borges Rufino Dalla Villa", dia: 16, mes: 3, ano: 1970, funcao: "Professora", foto:""},
        {nome: "Jackelini Muzy Vaz", dia: 30, mes: 3, ano: 1978, funcao: "Professora", foto:""},
        {nome: "Josiele Alves", dia: 19, mes: 3, ano: 1980, funcao: "Professora", foto:""},
        {nome: "Joelma Batista Prestes", dia: 29, mes: 3, ano: 1980, funcao: "Aux. de Classe", foto:""},
        {nome: "Joelma Castro de Santana Abreu", dia: 29, mes: 3, ano: 1988, funcao: "Professora", foto:""},
        {nome: "Ana Claudia Stocco Ramos Candido", dia: 7, mes: 3, ano: 1982, funcao: "Professora", foto:""},
        {nome: "Patricia Helen de Oliveira Sebastiao", dia: 27, mes: 3, ano: 1984, funcao: "Aux. de Classe", foto:""},
        {nome: "Talita Salazar dos Santos", dia: 27, mes: 3, ano: 1992, funcao: "Monitora", foto:""},
        {nome: "Lucas de Lima Galo", dia: 20, mes: 3, ano: 1996, funcao: "Monitor", foto:""},
        {nome: "Dielen Peniche do Nascimento Costa", dia: 10, mes: 3, ano: 1997, funcao: "Zeladora", foto:""},
        {nome: "Andre Felipe Stachak dos Santos", dia: 28, mes: 3, ano: 2000, funcao: "Aux. de TI", foto:""},
        {nome: "Sonia Arlete Szkudlarek Bueno", dia: 7, mes: 3, ano: 2000, funcao: "Zeladora", foto:""},
        {nome: "Raquel Pollyana do Nascimento Santos", dia: 13, mes: 3, ano: 2000, funcao: "Coordenadora", foto:""},

        // MAIO
        {nome: "Caroline do Nascimento Dauzacker", dia: 28, mes: 4, ano: 2002, funcao: "Recepcionista", foto:""},
        {nome: "Rudimar Roberto Nemitz", dia: 9, mes: 4, ano: 1966, funcao: "Coord. Disciplinar", foto:""},
        {nome: "Wilson José Sebastião", dia: 8, mes: 4, ano: 1972, funcao: "Professor", foto:""},
        {nome: "Lucilene Silvestre Barbosa", dia: 28, mes: 4, ano: 1972, funcao: "Monitora", foto:""},
        {nome: "Fernanda de Fatima de Matos Borges", dia: 14, mes: 4, ano: 1985, funcao: "Professora", foto:""},
        {nome: "Jaqueline Alves de Grandi", dia: 29, mes: 4, ano: 1986, funcao: "Professora", foto:""},
        {nome: "Wesley de Sousa Oliveira", dia: 31, mes: 4, ano: 1986, funcao: "Monitor", foto:""},
        {nome: "Fernando da Silva Calsavara", dia: 3, mes: 4, ano: 1989, funcao: "Professor", foto:""},
        {nome: "Patricia Maria Chagas", dia: 31, mes: 4, ano: 1994, funcao: "Professora", foto:""},
        {nome: "Rodrigo Marlon Bueno", dia: 29, mes: 4, ano: 1998, funcao: "Monitor", foto:""},
        {nome: "Tatiane da Silva Martins", dia: 25, mes: 4, ano: 1993, funcao: "Tutora", foto:""},
        {nome: "Elisa de Freitas Montin", dia: 26, mes: 4, ano: 1993, funcao: "Professora", foto:""},

        //JUNHO
        {nome: "Josiane Charnei Gonçalves", dia: 10, mes: 5, ano: 1983, funcao: "Reprografista", foto:""},
        {nome: "Tayna Ribeiro dos Santos ", dia: 25, mes: 5, ano: 1997, funcao: "Professora", foto:""},
        {nome: "Cristian Angelo Bissule", dia: 17, mes: 5, ano: 1997, funcao: "M. Aprendiz", foto:""},

        //JULHO
        {nome: "Cacilda Smaha Mannala", dia: 16, mes: 6, ano: 1972, funcao: "Bibliotecária Rede", foto:""},
        {nome: "Daniela Regina Lamarques Isobe", dia: 4, mes: 6, ano: 1975, funcao: "Coordenadora", foto:""},
        {nome: "Liamara Andrighetto", dia: 8, mes: 6, ano: 1981, funcao: "Professora", foto:""},
        {nome: "Ronaldo Vieira Silva Modesto", dia: 12, mes: 6, ano: 1982, funcao: "Professor", foto:""},
        {nome: "Thiago Andrews Carvalho", dia: 24, mes: 6, ano: 1984, funcao: "Vice-diretor", foto:""},
        {nome: "Vanessa Pereira Farias", dia: 10, mes: 6, ano: 1984, funcao: "Professora", foto:""},
        
        //AGOSTO
        {nome: "Sandra Cristina Labatut Pereira", dia: 19, mes: 7, ano: 1970, funcao: "Professora", foto:""},
        {nome: "Clarice dos Santos da Silva", dia: 15, mes: 7, ano: 1977, funcao: "Professora", foto:""},
        {nome: "Willian Resende Leite", dia: 25, mes: 7, ano: 1977, funcao: "Professor", foto:""},
        {nome: "Lucas Rocha Santos", dia: 28, mes: 7, ano: 1977, funcao: "Monitor", foto:""},
        {nome: "Jessica Vaz dos Santos Cappellesso", dia: 29, mes: 7, ano: 1977, funcao: "Orientadora", foto:""},
        
        //SETEMBRO
        {nome: "Janete Stachak dos Santos", dia: 1, mes: 8, ano: 1976, funcao: "Monitora", foto:""},
        {nome: "Merillyn Kelse Rego Abreu", dia: 6, mes: 8, ano: 1986, funcao: "Recepcionista", foto:""},
        {nome: "Scheyla Luciana Pinto dos Santos de Lima", dia: 11, mes: 8, ano: 1976, funcao: "Professora", foto:""},
        {nome: "Louise Helena Monteiro Vargas", dia: 15, mes: 8, ano: 1995, funcao: "Psicóloga", foto:""},
        {nome: "Eduardo Blaskovi Pereira dos Santos", dia: 20, mes: 8, ano: 1985, funcao: "Promotor Matrícula", foto:""},
        {nome: "Jucicleide Silva Santos", dia: 25, mes: 8, ano: 1974, funcao: "Professora", foto:""},
        {nome: "Endi Thais Santos da Silva", dia: 26, mes: 8, ano: 1993, funcao: "Professora", foto:""},
        {nome: "Hellen Aguilar da Silva Perly", dia: 28, mes: 8, ano: 1983, funcao: "Professora", foto:""},
        
        //OUTUBRO
        {nome: "Ana Paula de Barros Muller", dia: 6, mes: 9, ano: 1982, funcao: "Professora", foto:""},
        {nome: "Luis Felipe Rodrigues Dias", dia: 6, mes: 9, ano: 1997, funcao: "Professor", foto:""},
        {nome: "Alessandra Medeiros Wolff", dia: 7, mes: 9, ano: 1982, funcao: "Professora", foto:""},
        {nome: "Maria Cristina de Matos", dia: 12, mes: 9, ano: 1966, funcao: "Monitora", foto:""},
        {nome: "Eliesio Alencar", dia: 18, mes: 9, ano: 1995, funcao: "Aux. Tesouraria", foto:""},
        {nome: "Lorena Cecilia Fonta Alvares", dia: 19, mes: 9, ano: 1981, funcao: "Zeladora", foto:""},
        
        //NOVEMBRO
        {nome: "Denise Schmidt Vieira", dia: 5, mes: 10, ano: 1971, funcao: "Professora", foto:""},
        {nome: "Maria Aparecida de Barros Almeida", dia: 13, mes: 10, ano: 1963, funcao: "Orientadora", foto:""},
        {nome: "Leticia Caroline dos Santos", dia: 16, mes: 10, ano: 2000, funcao: "Tutora", foto:""},
        {nome: "Sãmella Modesto Ferreira", dia: 27, mes: 10, ano: 2003, funcao: "Aux. de Classe", foto:""},
        {nome: "Gisele Anastacio de Souza", dia: 29, mes: 10, ano: 1983, funcao: "Aux. de CT", foto:""},
        {nome: "Fernanda Moreira da Silva Nakonieczni", dia: 30, mes: 10, ano: 1990, funcao: "Professora", foto:""},
        
        //DEZEMBRO
        {nome: "Danielle Sousa da Silva Ferraz de Matos", dia: 2, mes: 11, ano: 1989, funcao: "Tesoureira", foto:""},
        {nome: "Raquel das Gracas Rodrigues da Anunciacao", dia: 7, mes: 11, ano: 1968, funcao: "Aux. de Classe", foto:""},
        {nome: "Carin Grime de Melo", dia: 13, mes: 11, ano: 1988, funcao: "Aux. Secretaria", foto:""},
        {nome: "Caroline Ramos Joaquim", dia: 17, mes: 11, ano: 1978, funcao: "Professora", foto:""},
        {nome: "Denis de Noronha Gomes", dia: 19, mes: 11, ano: 1977, funcao: "Professor", foto:""},
        {nome: "Janete Alves Tachechem", dia: 27, mes: 11, ano: 1976, funcao: "Professora", foto:""},
        {nome: "Katia Jaqueline Tavares Adriano", dia: 4, mes: 11, ano: 1976, funcao: "Professora", foto:""},
    ]

    //Verifica quem faz aniversário hoje e inclui o objeto no array aniversariantesDoDia
    for ( i=0; i < pessoas.length; i++ ) {
        
        if ( pessoas[i].dia == dia && pessoas[i].mes == mes ) {

            document.querySelector('#parabens').innerHTML = "PARABÉNS!"

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
        }  
    } 
}