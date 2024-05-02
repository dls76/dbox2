window.addEventListener('load', carregarCelebras)

function carregarCelebras() {

    const celebras = [
        {data: new Date(2024, 4, 9), responsavel: 'Pastoral', tema: 'Família - Dia das Mães | Fantoche com a temática: Família Buscapé.'},
        {data: new Date(2024, 4, 16), responsavel: 'SOE e SOP', tema: 'Mérito Acadêmico | Projeto de Vida.'},
        {data: new Date(2024, 4, 23), responsavel: 'Pastoral', tema: 'Tipos de saúde | Abordar a saúde física, mental e espiritual: diferenças e no que interferem.'},
        {data: new Date(2024, 4, 30), responsavel: 'FERIADO', tema: 'Corpus Christi.'},

        {data: new Date(2024, 5, 6), responsavel: 'Pastoral', tema: 'Lançamento Campanhas Solidárias: Inverno Amigo e Mutirão de Natal.'},
        {data: new Date(2024, 5, 13), responsavel: 'Coord. Disciplinar', tema: 'Orientações Disciplinares: O Código de Ética.'},
        {data: new Date(2024, 5, 20), responsavel: 'Vice-direção', tema: 'Cultura Oriental/Japonesa | Imigrantes japoneses: Influência em nossa vida, alimentação e costumes. Por que são tão longevos?'},
        {data: new Date(2024, 5, 27), responsavel: 'Pastoral', tema: 'Encerramento de ciclos | Animação RED: a vida é uma fera.'},
        {data: new Date(2024, 6, 25), responsavel: 'SOE e SOP', tema: 'Mérito Acadêmico | Premiação.'},
        {data: new Date(2024, 7, 1), responsavel: 'SOE e SOP', tema: 'Hábitos de Estudo | DIGA: Habilidade social anti-bullying.'},
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