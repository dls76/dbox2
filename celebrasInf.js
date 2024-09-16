window.addEventListener('load', carregarCelebras)

function carregarCelebras() {

    const celebras = [
        // {data: new Date(2024, 4, 9), responsavel: 'Pastoral', tema: 'Família - Dia das Mães | Fantoche com a temática: Família Buscapé.'},
        // {data: new Date(2024, 4, 16), responsavel: 'SOE e SOP', tema: 'Mérito Acadêmico | Projeto de Vida.'},
        // {data: new Date(2024, 4, 23), responsavel: 'Pastoral', tema: 'Tipos de saúde | Abordar a saúde física, mental e espiritual: diferenças e no que interferem.'},
        // {data: new Date(2024, 4, 30), responsavel: 'FERIADO', tema: 'Corpus Christi.'},

        // {data: new Date(2024, 5, 6), responsavel: 'Pastoral', tema: 'Lançamento Campanhas Solidárias: Inverno Amigo e Mutirão de Natal.'},
        // {data: new Date(2024, 5, 13), responsavel: 'Coord. Disciplinar', tema: 'Orientações Disciplinares: O Código de Ética.'},
        // {data: new Date(2024, 5, 20), responsavel: 'Vice-direção', tema: 'Cultura Oriental/Japonesa | Imigrantes japoneses: Influência em nossa vida, alimentação e costumes. Por que são tão longevos?'},
        // {data: new Date(2024, 5, 27), responsavel: 'Pastoral', tema: 'Encerramento de ciclos | Animação RED: a vida é uma fera.'},
        // {data: new Date(2024, 6, 25), responsavel: 'SOE e SOP', tema: 'Mérito Acadêmico | Premiação.'},
        // {data: new Date(2024, 7, 1), responsavel: 'SOE e SOP', tema: 'Hábitos de Estudo | DIGA: Habilidade social anti-bullying.'},

        //Agosto
        {data: new Date(2024, 7, 1), responsavel: 'SOE e SOP', tema: 'Hábitos de Estudo | Motivação Intrínseca e Extrínseca.'},
        {data: new Date(2024, 7, 8), responsavel: 'Pastoral', tema: 'Valor do pai terrestre e do Pai Celestial.'},
        {data: new Date(2024, 7, 15), responsavel: 'SOE e SOP', tema: 'Estante Mágica | Apresentação do projeto de escrita do livro.'},
        {data: new Date(2024, 7, 22), responsavel: 'SOE e SOP', tema: 'Lançamento projeto caixa de atividades | Enriquecimento curricular'},
        {data: new Date(2024, 7, 29), responsavel: 'Direção', tema: 'Motivação | Lançamento de Matrículas.'},

        //Setembro
        {data: new Date(2024, 8, 5), responsavel: 'Pastoral', tema: 'Semana de Oração | Convidado especial: Pr Samuel Marcon.'},
        {data: new Date(2024, 8, 17), responsavel: 'SOE e SOP', tema: 'Quebrando o Silêncio | Convidada especial: Psicóloga Stephany.'},
        {data: new Date(2024, 8, 19), responsavel: 'SOE e SOP', tema: 'Alimentação saudável | Entrega dos presentes dos aniversariantes - Turmas do 3ºEF.'},
        {data: new Date(2024, 8, 26), responsavel: 'SOE e SOP', tema: 'Semana de provas - não haverá Cultura Geral.'},

        //Outubro
        {data: new Date(2024, 9, 1), responsavel: 'SOE/SOP', tema: 'Dia mundial do sorriso | Convidado especial: Dentista Matheus Tosta (entrevistado pelo Pastor).'},
        {data: new Date(2024, 9, 10), responsavel: 'SOE/SOP', tema: 'Semana da Criança | alunos apresentam para os colegas.'},
        {data: new Date(2024, 9, 17), responsavel: 'Pastoral', tema: 'Dia do Pastor | Entrevista de alunos com o Pr Vinicius.'},
        {data: new Date(2024, 9, 24), responsavel: 'Pastoral', tema: 'Semana Criacionista | Carreta Hussein: exposição de animais da Savana Africana.'},
        {data: new Date(2024, 9, 31), responsavel: 'SOE e SOP', tema: 'Comemoração dos Aniversariantes | Motivacional.'},
        
        //Novembro
        {data: new Date(2024, 10, 7), responsavel: 'Pastoral', tema: 'Cordêro Show | Conhecendo seu Diretor: entrevista com o Diretor.'},
        {data: new Date(2024, 10, 14), responsavel: 'SOE/SOP', tema: 'Reunião Participativa de Pais | não haverá Cultura Geral.'},
        {data: new Date(2024, 10, 21), responsavel: 'Pastoral e SOE', tema: 'Fechamentos e Mérito Acadêmico | Red PIXAR.'},
        {data: new Date(2024, 10, 28), responsavel: 'Pastoral', tema: 'Thanksgiving e Dia do Monitor | Ação de graças e homenagem aos Monitores.'},

        //Dezembro
        {data: new Date(2024, 11, 5), responsavel: 'Pastoral/SOE', tema: 'Fechamentos e Mérito Acadêmico | Red PIXAR.'},

    ]
    
    celebras.forEach((e)=>{
        
        const main = document.querySelector('#main')
        main.classList.add('conteinerDatas')

        const celebra = document.createElement('div')
        celebra.classList.add('celebra')

        const dataCelebra = document.createElement('span')
        dataCelebra.classList.add('dataCelebra')

        const temaCelebra = document.createElement('span')
        temaCelebra.classList.add('temaCelebra')

        const respCelebra = document.createElement('span')
        respCelebra.classList.add('respCelebra')

        let dia = e.data.getDate()
        let mes = e.data.getMonth() + 1
        if (dia < 10) { dia = '0' + dia} else {dia}
        if (mes < 10) { mes = '0' + mes} else {mes}
        

        dataCelebra.innerHTML = `${dia}/${mes} - `
        temaCelebra.innerHTML = `${e.tema} `
        respCelebra.innerHTML =  `(${e.responsavel})`

        celebra.appendChild(dataCelebra)
        celebra.appendChild(temaCelebra)
        celebra.appendChild(respCelebra)

        main.appendChild(celebra)
        
    })
}