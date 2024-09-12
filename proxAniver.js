export const nomes = [

    {nome: "Ingo Iwankiw", data: new Date(2024, 8, 2), dia: 2, mes: 8, ano: 1980, funcao: "Monitor", foto: 'img/anivImg/setembro/ingo.jpg'},
    {nome: "Felipe Guilherme Lima Bueno da Silva", data: new Date(2024, 8, 11), dia: 11, mes: 8, ano: 1988, funcao: "Professor", foto: 'img/anivImg/setembro/felipeguilherme.jpg'},
    {nome: "Margarete do Nascimento Monteiro", data: new Date(2024, 8, 12), dia: 12, mes: 8, ano: 1971, funcao: "SOPI", foto: 'img/anivImg/setembro/margarete.jpg'},
    {nome: "Daniel Faria Filho", data: new Date(2024, 8, 26), dia: 26, mes: 8, ano: 1963, funcao: "Função", foto: 'img/anivImg/setembro/daniel.jpg'},
    {nome: "Vinicius Fernando Serain", data: new Date(2024, 8, 27), dia: 27, mes: 8, ano: 1990, funcao: "Monitor", foto: 'img/anivImg/setembro/prvinicius.jpg'},
    {nome: "Joniel Mendes de Araujo", data: new Date(2024, 8, 30), dia: 30, mes: 8, ano: 1989, funcao: "Professor", foto: 'img/anivImg/setembro/joniel.jpg'},
    
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
function adicionarProximosAniversariantes() {
    const container = document.getElementById('divhomeproxaniversariantes');
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zera as horas

    const proximos = nomes.filter(pessoa => {
        const aniversario = new Date(pessoa.data);
        aniversario.setHours(0, 0, 0, 0); // Zera as horas para comparar apenas o dia
        return aniversario >= hoje;
    }).slice(0, 3); // Pega os 3 primeiros aniversariantes

    // Limpa o container antes de adicionar os novos aniversariantes
    container.innerHTML = '';

    proximos.forEach(aniversariante => {
        const divAniv = document.createElement('div');
        divAniv.classList.add('proximosaniversariantes');

        const divFoto = document.createElement('div');
        divFoto.classList.add('fotoaniv');
        const img = document.createElement('img');
        img.src = aniversariante.foto;
        img.alt = aniversariante.nome;
        divFoto.appendChild(img);

        const divNome = document.createElement('div');
        divNome.classList.add('nome');
        divNome.innerHTML = `${aniversariante.nome} <span>(${aniversariante.funcao})</span>`;

        const divData = document.createElement('div');
        divData.classList.add('data');
        divData.textContent = `${aniversariante.data.getDate()}/${aniversariante.data.getMonth() + 1}`;

        divAniv.appendChild(divFoto);
        divAniv.appendChild(divNome);
        divAniv.appendChild(divData);

        container.appendChild(divAniv);
    });
}

// Chama a função ao carregar a página
window.onload = adicionarProximosAniversariantes;


