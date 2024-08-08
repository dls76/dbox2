window.addEventListener('load', carregarCelebras)

function carregarCelebras() {

    const celebras = [
        // {data: new Date(2024, 1, 8), responsavel: 'Todos', tema: 'Boas-vindas e socialização, acolhimento ambientalização/disciplinar e cídigo de ética'},
        // {data: new Date(2024, 1, 15), responsavel: 'SOE', tema: 'Hábitos de estudo', titulo: 'Projeto para criar mecanismos facilitadores para o aluno formar bons hábitos de estudo'},
        // {data: new Date(2024, 1, 22), responsavel: 'Pastoral/SOE',  tema: '10 dias de oração e redação nota mil  Lançamentos de projetos '},
        // {data: new Date(2024, 1, 29), responsavel: 'Pastoral', tema: 'Talk show: Missão Calebe -  PMDE Entrevistas e testemunhos com missionários transculturais do CAC - lançamento PMDE'},
        // {data: new Date(2024, 2, 7), responsavel: 'Pastoral/Direção', tema: 'Dia da Mulher Realizada pelos meninos para as meninas'},
        // {data: new Date(2024, 2, 14), responsavel: 'Direção', tema: 'Dia da escola e homenagem as zeladoras história do colégio local e da educação no Brasil'},
        // {data: new Date(2024, 2, 21), responsavel: 'pastoral', tema: 'Lançamento MEMI e projetos espirituais  Apresentação, convite e inscrição para a comunidade Route77, ministérios e classes bíblicas'},
        // {data: new Date(2024, 2, 28), responsavel: 'Pastoral', tema: 'Semana santa  Convidado: Pr Jairo Souza'},
        // {data: new Date(2024, 3, 11), responsavel: 'SOE/pastoral', tema: 'Dia Nacional de combate ao Bullying e à Violência na Escola (07/04). Saúde emocional e acolhimento para quem sofre ou sofreu bullyng - Convidada psicologa  Aline 2º BIMESTRE  TEMA DESCRIÇÃO'},
        // {data: new Date(2024, 3, 18), responsavel: 'SOE', tema: 'Bullyng e cyberbulling  Convidada advogada da área: Dra. Angela'},
        // {data: new Date(2024, 3, 25), responsavel: 'SOE/SOP/PROFS', tema: 'PROJETO VIDA E SAÚDE - PMDS  Profs de Ed. Físicos 8 remédios - projeto nos recreios'},
        // {data: new Date(2024, 4, 2), responsavel: 'SOE', tema: 'Projeto de Vida  Realizado pela orientação e professores da área'},
        // {data: new Date(2024, 4, 9), responsavel: 'SOE', tema: 'PMDS - Infectologista  Trazer médico da área para aula de como evitar trasnmissões de virus e bactérias'},
        // {data: new Date(2024, 4, 16), responsavel: 'Pastoral/SOE', tema: 'Semana da família  Atividades e desafios para toda família'},
        // {data: new Date(2024, 4, 23), responsavel: 'Pastoral', tema: 'Saúde espiritual  Abordar aspectos da vida espiritual que promovem saúde e bem-estar.'},
        // {data: new Date(2024, 4, 30), responsavel: 'FERIADO', tema: 'Corpus Christi'},
        // {data: new Date(2024, 5, 6), responsavel: 'SOE/SOP/pastoral', tema: 'Lançamento inverno amigo  Dia mundial do meio ambiente palestrante especialista convidado. Como o meio ambiente pode promover saúde ou doença. Como podemos contribuir para a vida e a saúde no planeta em que vivemos? Campanha e gincana dedoação e reaproveitamento de roupas.'},
        // {data: new Date(2024, 5, 13), responsavel: 'SOP', tema: 'AV2'},
        // {data: new Date(2024, 5, 20), responsavel: 'Vice direção', tema: 'Cultura japonesa  Imigração Japonesa – Covidados: Alexandro vice e Francisco Route77. Por que imigrantes japoneses vieram para o Brasil? Como essa cultura influencia nossa vida, nossa alimentação, nossos costumes? Como esse povo se alimenta e por qual razão são tão longevos?'},
        // {data: new Date(2024, 5, 27), responsavel: 'Pastoral', tema: 'Fechamento de ciclos - Animação Red Finalizando o bimestre – fazendo boas escolhas para ter férias saudáveis e felizes.'},
        // {data: new Date(2024, 6, 7), responsavel: 'Todos', tema: 'Encerramento Bimestral'},

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
