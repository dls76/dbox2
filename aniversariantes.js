window.addEventListener("load", show)

const mss = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const pessoas = [
    // JANEIRO
    // {nome: "Rosilene de Araujo Silva", dia: 19, mes: 0, ano: 1967, funcao: "Professora", foto:""},
    // {nome: "Roberta Silva Ribeiro Carvalho", dia: 22, mes: 0, ano: 1979, funcao: "Secretária", foto:""},
    // {nome: "Guilherme Dionisio Lendecker", dia: 19, mes: 0, ano: 1981, funcao: "Professor", foto:""},
    // {nome: "Paula Gavinski Silvestre", dia: 21, mes: 0, ano: 1986, funcao: "Professora", foto:""},
    // {nome: "Jheniffer Beatriz de Oliveira", dia: 2, mes: 0, ano: 2001, funcao: "Aux. de Classe", foto:""},
    // {nome: "Tatiane Mourão Garcia de Oliveira", dia: 25, mes: 0, ano: 2001, funcao: "Professora", foto:""},

    // FEVEREIRO
    // {nome: "Ione Modesto Andrade", dia: 16, mes: 1, ano: 1967, funcao: "Zeladora", foto:""},
    // {nome: "Pauline Ferreira Roefero", dia: 24, mes: 1, ano: 1977, funcao: "Professora", foto:""},
    // {nome: "Louise Fernanda Franco de Godiu", dia: 13, mes: 1, ano: 1977, funcao: "Professora", foto:""},
    // {nome: "Leonardo de Assis Rosa", dia: 23, mes: 1, ano: 1977, funcao: "Professora", foto:""},
    // {nome: "Karoline Brendle Medeiros", dia: 16, mes: 1, ano: 1990, funcao: "Coordenadora", foto:""},
    // {nome: "Murilo Klimek", dia: 2, mes: 1, ano: 2001, funcao: "TI", foto:""},

    // MARÇO
    // {nome: "Wander Rocha de Oliveira", dia: 15, mes: 2, ano: 1963, funcao: "Professor", foto:"img/anivImg/wander.jpeg"},
    // {nome: "Hermes da Silva Jardim", dia: 12, mes: 2, ano: 1965, funcao: "Professor", foto:"img/anivImg/hermes.jpeg"},
    // {nome: "Guilherme Lunardon", dia: 12, mes: 2, ano: 1965, funcao: "Professor", foto:"img/anivImg/user.png"},
    // {nome: "Ana Lucia Santos das Neves", dia: 22, mes: 2, ano: 1976, funcao: "Aux. de Classe", foto:""},
    // {nome: "Sirlei Barbosa da Silva Gomes", dia: 2, mes: 2, ano: 1980, funcao: "Aux. Biblioteca", foto:"img/anivImg/sirlei.jpeg"},
    // {nome: "Priscila Paula de Oliveira Albanez", dia: 21, mes: 2, ano: 1988, funcao: "Professora", foto:"img/anivImg/priscila.jpeg"},
    // {nome: "Douglas Leal dos Santos", dia: 20, mes: 2, ano: 1976, funcao: "Diretor", foto:"img/anivImg/dls.png"},
    // {nome: "Letícia Mitchells Rosa", dia: 21, mes: 2, ano: 1976, funcao: "Tutora", foto:"img/anivImg/leticia-michells.jpeg"},
    // {nome: "Ana Clécia Ferreira Santos", dia: 22, mes: 2, ano: 1976, funcao: "Zeladora", foto:"img/anivImg/ana-clecia.jpeg"},
    
    // ABRIL
    // {nome: "Sandra Nascimento", dia: 2, mes: 3, ano: 1963, funcao: "Orientadora", foto:"img/anivImg/abril/sandranascimento.png"},
    // {nome: "Ana Claudia Stocco Ramos Candido", dia: 7, mes: 3, ano: 1982, funcao: "Professora", foto:"img/anivImg/abril/anaclaudia.png"},
    // {nome: "Sonia Arlete Szkudlarek Bueno", dia: 7, mes: 3, ano: 2000, funcao: "Zeladora", foto:"img/anivImg/abril/sonia.png"},
    // {nome: "Dielen Peniche do Nascimento Costa", dia: 10, mes: 3, ano: 1997, funcao: "Zeladora", foto:"img/anivImg/dielen.jpg"},
    // {nome: "Raquel Pollyana do Nascimento Santos", dia: 13, mes: 3, ano: 2000, funcao: "Coordenadora", foto:"img/anivImg/abril/raquelpoly.png"},
    // {nome: "Elaine Borges Rufino Dalla Villa", dia: 16, mes: 3, ano: 1970, funcao: "Professora", foto:"img/anivImg/abril/elaine.png"},
    // {nome: "Josiele Alves", dia: 19, mes: 3, ano: 1980, funcao: "Professora", foto:"img/anivImg/abril/josiele.png"},
    // {nome: "Denise Padilha Gomes", dia: 19, mes: 3, ano: 1966, funcao: "Orientadora", foto:"img/anivImg/abril/denisepadilha.png"},
    // {nome: "Lucas de Lima", dia: 20, mes: 3, ano: 1996, funcao: "Monitor", foto:"img/anivImg/abril/lucaslima.png"},
    // {nome: "Patricia Helen", dia: 27, mes: 3, ano: 1984, funcao: "Aux. de Classe", foto:"img/anivImg/abril/patriciahelen.png"},
    // {nome: "Talita Salazar", dia: 27, mes: 3, ano: 1992, funcao: "Monitora", foto:"img/anivImg/abril/talita.png"},
    // {nome: "Andre Felipe", dia: 28, mes: 3, ano: 2000, funcao: "Aux. de TI", foto:"img/anivImg/abril/andre.png"},
    // {nome: "Joelma Castro", dia: 29, mes: 3, ano: 1988, funcao: "Professora", foto:"img/anivImg/abril/joelmasantana.png"},
    // {nome: "Joelma Batista", dia: 29, mes: 3, ano: 1980, funcao: "Aux. de Classe", foto:"img/anivImg/abril/joelmabatista.png"},
    // {nome: "Jackelini Muzy", dia: 30, mes: 3, ano: 1978, funcao: "Professora", foto:"img/anivImg/abril/jack.png"},

    // MAIO
    // {nome: "Fernando da Silva Calsavara", dia: 3, mes: 4, ano: 1989, funcao: "Professor", foto:"img/anivImg/maio/fernando.png"},
    // {nome: "Wilson José Sebastião", dia: 8, mes: 4, ano: 1972, funcao: "Professor", foto:"img/anivImg/maio/wilson.jpg"},
    // {nome: "Rudimar Roberto Nemitz", dia: 9, mes: 4, ano: 1966, funcao: "Coord. Disciplinar", foto:"img/anivImg/maio/rudi.png"},
    // {nome: "Fernanda Borges", dia: 14, mes: 4, ano: 1985, funcao: "Professora", foto:"img/anivImg/maio/fernandaborges.png"},
    // {nome: "Tatiane da Silva Martins", dia: 25, mes: 4, ano: 1993, funcao: "Tutora", foto:"img/anivImg/maio/tati.jpg"},
    // {nome: "Elisa de Freitas Montin", dia: 26, mes: 4, ano: 1993, funcao: "Professora", foto:"img/anivImg/maio/elisa.png"},
    // {nome: "Lucilene Silvestre Barbosa", dia: 28, mes: 4, ano: 1972, funcao: "Monitora", foto:"img/anivImg/maio/lucilene.png"},
    // {nome: "Jaqueline Alves de Grandi", dia: 29, mes: 4, ano: 1986, funcao: "Professora", foto:"img/anivImg/maio/jaque.jpg"},
    // {nome: "Rodrigo Marlon Bueno", dia: 29, mes: 4, ano: 1998, funcao: "Monitor", foto:"img/anivImg/maio/rodrigo.png"},
    // {nome: "Wesley de Sousa Oliveira", dia: 31, mes: 4, ano: 1986, funcao: "Monitor", foto:"img/anivImg/maio/wesley.png"},
    // {nome: "Patricia Maria Chagas", dia: 31, mes: 4, ano: 1994, funcao: "Professora", foto:"img/anivImg/maio/patriciamaria.png"},

    //JUNHO
    // {nome: "Josiane Charnei Gonçalves", dia: 10, mes: 5, ano: 1983, funcao: "Reprografista", foto:"img/anivImg/junho/josiane.png"},
    // {nome: "Tayna Ribeiro dos Santos ", dia: 25, mes: 5, ano: 1997, funcao: "Professora", foto:"img/anivImg/junho/tayna.png"},

    //JULHO
    {nome: "Daniela Regina Lamarques Isobe", dia: 4, mes: 6, ano: 1975, funcao: "Coordenadora", foto:"img/anivImg/julho/danilamarques.jpg", nascimento: new Date(1975, 6, 4)},
    {nome: "Liamara Andrighetto", dia: 8, mes: 6, ano: 1981, funcao: "Professora", foto:"img/anivImg/julho/lia.png", nascimento: new Date(1981, 6, 8)},
    {nome: "Vanessa Pereira Farias", dia: 10, mes: 6, ano: 1984, funcao: "Professora", foto:"img/anivImg/julho/vanessa.png", nascimento: new Date(1984, 6, 10)},
    {nome: "Ronaldo Vieira Silva Modesto", dia: 12, mes: 6, ano: 1982, funcao: "Professor", foto:"img/anivImg/julho/ronaldo.png", nascimento: new Date(1982, 6, 12)},
    {nome: "Cacilda Smaha Mannala", dia: 16, mes: 6, ano: 1972, funcao: "Bibliotecária Rede", foto:"img/anivImg/julho/cacilda.jpg", nascimento: new Date(1972, 6, 16)},
    {nome: "Monica Cristina Martins de Novais", dia: 31, mes: 6, ano: 1979, funcao: "Função", foto:"img/user.png", nascimento: new Date(1979, 6, 31)},
    
    //AGOSTO
    {nome: "Vanessa Moura de Freitas", dia: 2, mes: 7, ano: 1985, funcao: "Função", foto:"img/user.png", nascimento: new Date(1985, 7, 2)},
    {nome: "Caroline Cristina de Brito", dia: 4, mes: 7, ano: 1988, funcao: "Coordenadora", foto:"img/user.png", nascimento: new Date(1988, 7,4)},
    {nome: "Willian Resende Leite", dia: 25, mes: 7, ano: 1977, funcao: "Professor", foto:"", nascimento: new Date()},
    {nome: "Lucas Rocha Santos", dia: 28, mes: 7, ano: 1977, funcao: "Monitor", foto:"", nascimento: new Date()},
    {nome: "Jessica Vaz dos Santos Cappellesso", dia: 29, mes: 7, ano: 1977, funcao: "Orientadora", foto:"", nascimento: new Date()},
    
    //SETEMBRO
    {nome: "Janete Stachak dos Santos", dia: 1, mes: 8, ano: 1976, funcao: "Monitora", foto:"", nascimento: new Date()},
    {nome: "Merillyn Kelse Rego Abreu", dia: 6, mes: 8, ano: 1986, funcao: "Recepcionista", foto:"", nascimento: new Date()},
    {nome: "Scheyla Luciana Pinto dos Santos de Lima", dia: 11, mes: 8, ano: 1976, funcao: "Professora", foto:"", nascimento: new Date()},
    {nome: "Louise Helena Monteiro Vargas", dia: 15, mes: 8, ano: 1995, funcao: "Psicóloga", foto:"", nascimento: new Date()},
    {nome: "Eduardo Blaskovi Pereira dos Santos", dia: 20, mes: 8, ano: 1985, funcao: "Promotor Matrícula", foto:"", nascimento: new Date()},
    {nome: "Jucicleide Silva Santos", dia: 25, mes: 8, ano: 1974, funcao: "Professora", foto:"", nascimento: new Date()},
    {nome: "Endi Thais Santos da Silva", dia: 26, mes: 8, ano: 1993, funcao: "Professora", foto:"", nascimento: new Date()},
    {nome: "Hellen Aguilar da Silva Perly", dia: 28, mes: 8, ano: 1983, funcao: "Professora", foto:"", nascimento: new Date()},
    
    //OUTUBRO
    {nome: "Ana Paula de Barros Muller", dia: 6, mes: 9, ano: 1982, funcao: "Professora", foto:"", nascimento: new Date()},
    {nome: "Luis Felipe Rodrigues Dias", dia: 6, mes: 9, ano: 1997, funcao: "Professor", foto:"", nascimento: new Date()},
    {nome: "Alessandra Medeiros Wolff", dia: 7, mes: 9, ano: 1982, funcao: "Professora", foto:"", nascimento: new Date()},
    {nome: "Maria Cristina de Matos", dia: 12, mes: 9, ano: 1966, funcao: "Monitora", foto:"", nascimento: new Date()},
    {nome: "Eliesio Alencar", dia: 18, mes: 9, ano: 1995, funcao: "Aux. Tesouraria", foto:"", nascimento: new Date()},
    {nome: "Lorena Cecilia Fonta Alvares", dia: 19, mes: 9, ano: 1981, funcao: "Zeladora", foto:"", nascimento: new Date()},
    
    //NOVEMBRO
    {nome: "Denise Schmidt Vieira", dia: 5, mes: 10, ano: 1971, funcao: "Professora", foto:"", nascimento: new Date()},
    {nome: "Maria Aparecida de Barros Almeida", dia: 13, mes: 10, ano: 1963, funcao: "Orientadora", foto:"", nascimento: new Date()},
    {nome: "Leticia Caroline dos Santos", dia: 16, mes: 10, ano: 2000, funcao: "Tutora", foto:"", nascimento: new Date()},
    {nome: "Sãmella Modesto Ferreira", dia: 27, mes: 10, ano: 2003, funcao: "Aux. de Classe", foto:"", nascimento: new Date()},
    {nome: "Gisele Anastacio de Souza", dia: 29, mes: 10, ano: 1983, funcao: "Aux. de CT", foto:"", nascimento: new Date()},
    {nome: "Fernanda Moreira da Silva Nakonieczni", dia: 30, mes: 10, ano: 1990, funcao: "Professora", foto:"", nascimento: new Date()},
    
    //DEZEMBRO
    {nome: "Danielle Sousa da Silva Ferraz de Matos", dia: 2, mes: 11, ano: 1989, funcao: "Tesoureira", foto:"", nascimento: new Date()},
    {nome: "Jaqueline Tavares", dia: 4, mes: 11, ano: 1976, funcao: "Professora", foto:"", nascimento: new Date()},
    {nome: "Raquel das Gracas Rodrigues da Anunciacao", dia: 7, mes: 11, ano: 1968, funcao: "Aux. de Classe", foto:"", nascimento: new Date()},
    {nome: "Carin Grime de Melo", dia: 13, mes: 11, ano: 1988, funcao: "Aux. Secretaria", foto:"", nascimento: new Date()},
    {nome: "Caroline Ramos Joaquim", dia: 17, mes: 11, ano: 1978, funcao: "Professora", foto:"", nascimento: new Date()},
    {nome: "Denis de Noronha Gomes", dia: 19, mes: 11, ano: 1977, funcao: "Professor", foto:"", nascimento: new Date()},
    {nome: "Janete Alves Tachechem", dia: 27, mes: 11, ano: 1976, funcao: "Professora", foto:"", nascimento: new Date()},
    
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


// Obtém a data atual
// const dataAtual = new Date();

// Classifica o array de pessoas com base nas datas de nascimento
// pessoas.sort((a, b) => a.nascimento - b.nascimento);

// Define um array para armazenar os aniversariantes do dia ou próximos aniversariantes
// let aniversariantes = [];

// Encontra o aniversariante do dia ou o próximo conjunto de aniversariantes com múltiplas pessoas
// for (let i = 0; i < pessoas.length; i++) {
  // const pessoa = pessoas[i];

  // Verifica se a data de nascimento coincide com a data atual
//   if (
//     pessoa.nascimento.getDate() === dataAtual.getDate() &&
//     pessoa.nascimento.getMonth() === dataAtual.getMonth()
//   ) {
//     aniversariantes.push(pessoa);
//   } else if (aniversariantes.length > 0) {
//     // Já encontrou os aniversariantes do dia, portanto, este será o próximo conjunto de aniversariantes
//     break;
//   }
// }

// Verifica se encontrou aniversariantes do dia ou próximos aniversariantes
// if (aniversariantes.length > 0) {
//   console.log('Aniversariantes:');
//   aniversariantes.forEach(pessoa => {
//     const dia = pessoa.nascimento.getDate();
//     const mes = pessoa.nascimento.getMonth() + 1; // Os meses em JavaScript são baseados em zero (janeiro é 0), então adicionamos 1 para exibir corretamente o mês
//     console.log(`${pessoa.nome} - ${dia}/${mes}`);
//   });
// } else {
//   console.log('Não há aniversariantes do dia ou próximos aniversariantes.');
// }
