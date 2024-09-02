window.addEventListener('load', carregarCelebras)

function carregarCelebras() {

    const celebras = [
        
        //Agosto
        {data: new Date(2024, 7, 1), responsavel: 'Pastoral e SOE', tema: 'Dia dos pais | Programa dinâmico com blocos de brincadeiras levando os alunos à reflexão sobre aspectos da paternidade. Trabalhar Deuteronômio e Lucas 6.'},
        {data: new Date(2024, 7, 8), responsavel: 'Pastoral', tema: 'Semana de Oração | Pr Gilson.'},
        {data: new Date(2024, 7, 15), responsavel: 'SOE/SOP', tema: 'Olimpíadas | Curiosidades, cultura, entretenimento, quadro de medalhas (Pastor fora).'},
        {data: new Date(2024, 7, 22), responsavel: 'Direção/SOP', tema: 'Olimpíadas do CAC | Não haverá Cultura Geral.'},
        {data: new Date(2024, 7, 29), responsavel: 'Pastoral/SOE', tema: 'Quebrando Silêncio | Psicologa educacional Louise Vargas.'},

        //Setembro
        {data: new Date(2024, 8, 5), responsavel: 'Pastoral', tema: 'Psicologo Christofer, especialista em adolescentes.'},
        {data: new Date(2024, 8, 12), responsavel: 'SOP Camila', tema: 'Palestra com especialista da área pedagógica.'},
        {data: new Date(2024, 8, 19), responsavel: 'Pastoral', tema: 'Celebra de aventura mostrando os valores e atrativos do clube - liderança Route Adventure.'},
        {data: new Date(2024, 8, 26), responsavel: 'SOE/SOP', tema: 'Palestra com Advogado da USB - Estatuto da Criança e do Adolescente.'},

        //Outubro
        {data: new Date(2024, 9, 3), responsavel: 'SOE/SOP', tema: 'Saúde Bucal - Palestra com dentista.' },
        {data: new Date(2024, 9, 10), responsavel: 'SOE/SOP', tema: 'Saúde Mental - Palestra com Psicólogo.' },
        {data: new Date(2024, 9, 17), responsavel: 'SOE/SOP', tema: 'Dia do Pastor - Homenagem aos pastores do colégio, incluindo os pais de alunos.' },
        {data: new Date(2024, 9, 24), responsavel: 'Pastoral', tema: 'Projeto criacionista: Savana Africana | Temática Biologia: Carreta Hussein.'},
        {data: new Date(2024, 9, 31), responsavel: 'SOE/SOP', tema: 'Supere-se! Mérito Acadêmico: Motivacional e premiação.'},
        

        //Novembro
        {data: new Date(2024, 10, 7), responsavel: 'Pastoral/SOE', tema: 'Show de Talentos: The CAC Factor.'},
        {data: new Date(2024, 10, 14), responsavel: 'SOE', tema: 'Não haverá celebra: reunião participativa de pais.'},
        {data: new Date(2024, 10, 21), responsavel: 'Pastoral', tema: 'Champions League: promoção.'},
        {data: new Date(2024, 10, 28), responsavel: 'Pastoral', tema: 'A História do Thanksgiving: ação de graças e homenagem aos monitores.'},

        //Dezembro
        {data: new Date(2024, 11, 5), responsavel: 'Pastoral', tema: 'Fechamento de ciclos: Pré-formatura do Terceirão.'}

    ]
    
    celebras.forEach((e)=>{
        
        const main = document.querySelector('#main')

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
