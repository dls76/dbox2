window.addEventListener("load", mostrarEventos)

const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

let eventos = [

    // agosto
    {data1: new Date(2023, 7, 1), data2: new Date(2023, 3, 8), descritivo: "Orçamento das escolas – 2023", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 1), data2: new Date(2023, 7, 4), descritivo: "Semana Hábitos de Estudos – 2º ao 5º ano", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 4), data2: new Date(2023, 7, 4), descritivo: "Reunião Líderes Route", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 4), data2: new Date(2023, 7, 5), descritivo: "Data para a atualização dos PEI’s", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 6), data2: new Date(2023, 7, 6), descritivo: "Projeto Dia dos Pais (Dia Letivo – dia permutado com recesso do dia 03/11)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 7), data2: new Date(2023, 7, 31), descritivo: "Questionário Contextuais PAEEB (EM, docentes e equipes gestoras)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 7), data2: new Date(2023, 7, 11), descritivo: "Lançamento do PMDE – 2º Semestre", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 8), data2: new Date(2023, 7, 8), descritivo: "Liderança Vice-diretores (remoto)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 11), data2: new Date(2023, 7, 11), descritivo: "Dia do Estudante", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 13), data2: new Date(2023, 7, 13), descritivo: "Dia dos Pais", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 14), data2: new Date(2023, 7, 18), descritivo: "AV1 - colocar nos primeiros dias as provas com mais complicação de correção.", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 15), data2: new Date(2023, 7, 17), descritivo: "Lançamento de matrículas equipe administrativa – diretrizes e macros da campanha 2024 – ASP", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 19), data2: new Date(2023, 7, 25), descritivo: "Viagem de Formatura 3º ano do E.M", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 15), data2: new Date(2023, 7, 15), descritivo: "Treinamento de promotores e atendimento de matrículas 2024 – manhã", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 21), data2: new Date(2023, 7, 21), descritivo: "2ª Chamada", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 22), data2: new Date(2023, 7, 22), descritivo: "Reunião com os pais Fund II – Rumo ao 6º", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 23), data2: new Date(2023, 7, 23), descritivo: "Reunião Pedagógica (com funcionários também)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 24), data2: new Date(2023, 7, 24), descritivo: "ECO Encontro Coordes e Orients - Dia do Coordenador Pedagógico – Presencial", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 27), data2: new Date(2023, 7, 27), descritivo: "Dia do Psicólogo", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 27), data2: new Date(2023, 7, 27), descritivo: "Lançamento de Matrículas – ASP para as escolas", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 28), data2: new Date(2023, 7, 28), descritivo: "Início do Ranking matrículas 2024", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 29), data2: new Date(2023, 7, 29), descritivo: "Enem TEEN e TREINEIRO", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 29), data2: new Date(2023, 7, 29), descritivo: "Data limite para o lançamento das notas da AV1 no SAD (prof)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 29), data2: new Date(2023, 7, 29), descritivo: "Enem TEEN e TREINEIRO", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 30), data2: new Date(2023, 7, 30), descritivo: "Excursão Beto Carrero FII e EM - ASP", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 31), data2: new Date(2023, 7, 31), descritivo: "Data limite para a regularização dos registros dos conteúdos do mês, no SAD", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 29), data2: new Date(2023, 7, 16), descritivo: "Processo de rematrícula", cal: "cac", resp: "", foto: "", detalhes: ""},
        
    // setembro
    {data1: new Date(2023, 8, 1), data2: new Date(2023, 8, 29), descritivo: "Aplicação das Provas Diagnósticas da Alfabetização – 3ª testagem         ", cal: "", resp: "", foto: "", detalhes: "Será enviado pela ASP no início do mês"},
    {data1: new Date(2023, 8, 2), data2: new Date(2023, 8, 6), descritivo: "Semana de Oração – 6º ao EM", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 1), data2: new Date(2023, 8, 30), descritivo: "Pesquisa de Qualidade – pais e responsáveis           ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 4), data2: new Date(2023, 8, 6), descritivo: "Semana da Pátria", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 4), data2: new Date(2023, 8, 4), descritivo: "Comissão de Redação/PQD (tarde)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 5), data2: new Date(2023, 8, 5), descritivo: "Comissão de Educação/Diretiva", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 5), data2: new Date(2023, 8, 5), descritivo: "Encontro de Professores de Projeto de Vida (remoto)          ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 7), data2: new Date(2023, 8, 7), descritivo: "Feriado Independência do Brasil", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 8), data2: new Date(2023, 8, 8), descritivo: "Feriado Municipal (Curitiba)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 11), data2: new Date(2023, 8, 11), descritivo: "Início Campanha de Matrículas 2024 – digital           ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 11), data2: new Date(2023, 8, 11), descritivo: "Reunião de alinhamento SOE e SOP - On Line - 8h30       ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 11), data2: new Date(2023, 8, 15), descritivo: "Período de aplicação da AV2 - colocar nos primeiros dias as provas com mais complicação de correção. ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 13), data2: new Date(2023, 8, 13), descritivo: "Projeto Quebrando o Silêncio nas salas de aula          ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 14), data2: new Date(2023, 8, 14), descritivo: "Reunião Pedagógica EI ao EM             ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 16), data2: new Date(2023, 8, 16), descritivo: "Dia Mundial do Desbravador / Batismo da Primavera          ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 17), data2: new Date(2023, 8, 17), descritivo: "Super Dia D - Plantão de Matrículas – Mostra cultural Ed.Infantil, 1º e contraturno    ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 17), data2: new Date(2023, 8, 19), descritivo: "“Projeto Fair Play” - Módulo Jogos da Amizade          ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 20), data2: new Date(2023, 8, 20), descritivo: "Data limite para a entrega ao SOP dos conteúdos e métodos avaliativos do 4º bimestre   ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 21), data2: new Date(2023, 8, 21), descritivo: "2ª Chamada                 ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 21), data2: new Date(2023, 8, 21), descritivo: "Conselho de Classe (novo formato de acordo com o regimento)        ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 22), data2: new Date(2023, 8, 22), descritivo: "Entrega das convocações para a Recuperação Bimestral aos alunos         ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 21), data2: new Date(2023, 8, 22), descritivo: "Organização das convocações para a Recuperação Bimestral           ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 22), data2: new Date(2023, 8, 22), descritivo: "Dia do Contador e Tesoureiro(a) escolar            ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 25), data2: new Date(2023, 8, 29), descritivo: "Recuperação Bimestral – 3º Bim             ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 25), data2: new Date(2023, 8, 29), descritivo: "Semana de oração e encerramento da classe bíblica- Fund I        ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 26), data2: new Date(2023, 8, 26), descritivo: "Data limite para o registro de todas as Atividades Avaliativas de Aprendizagem do 3º bimestre no SAD (prof)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 29), data2: new Date(2023, 8, 29), descritivo: "Final do 3º bimestre              ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 30), data2: new Date(2023, 8, 30), descritivo: "Dia da Secretária(o)               ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 30), data2: new Date(2023, 8, 30), descritivo: "Data limite para o envio dos Cronogramas Avaliativos aos alunos        ", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 30), data2: new Date(2023, 8, 30), descritivo: "Data limite para a regularização dos registros dos conteúdos do mês, no SAD     ", cal: "", resp: "", foto: "", detalhes: ""},
]

function mostrarEventos(){
    
    for ( i = 0; i < eventos.length; i++ ) {
        
        let d1 = eventos[i].data1
        let d2 = eventos[i].data2
        let desc = eventos[i].descritivo
        let res = eventos[i].foto
        let cal = eventos[i].cal
        let pais = eventos[i].pais
        let niv = eventos[i].niv
        
        

        if ( d1 < d2 ) {

            let eventos = document.querySelector('#body-eventos')

            let ev = document.createElement('div') 
            ev.classList.add('evento')

            if ( pais ) {
                ev.classList.add('pais')
            }

            if ( cal == 'asp' ) { 
                ev.classList.add('verde', 'asp')
            } else if ( cal == 'out') { 
                ev.classList.add('gray', 'out')
            } else if ( cal == 'cac' ) {
                if ( niv == 'inf5' ) {
                    ev.classList.add('lilas', 'cac')
                } else if ( niv == 'f2m') {
                    ev.classList.add('ouro', 'cac')
                } else {
                    ev.classList.add('azul-padrao', 'cac')
                }
            }

            let data = document.createElement('div')
            data.classList.add('data')

            let dias = document.createElement('div')
            dias.classList.add('dias')
            
            let dia = document.createElement('div')
            dia.classList.add('dia')

            let a = document.createElement('div')
            a.classList.add('a')

            let dia2 = document.createElement('div')
            dia2.classList.add('dia2')

            let mes = document.createElement('div')
            mes.classList.add('mes')

            let descricao = document.createElement('div')
            descricao.classList.add('descricao')

            let responsavel = document.createElement('div')
            responsavel.classList.add('resp')

            dia.innerHTML = d1.getDate()
            a.innerHTML = 'a'
            dia2.innerHTML = d2.getDate()
            mes.innerHTML = meses[d1.getMonth()]

            descricao.innerHTML = desc
            responsavel.innerHTML = res

            eventos.appendChild(ev)
            ev.appendChild(data)
            data.appendChild(dias)
            data.appendChild(mes)

            dias.appendChild(dia)
            dias.appendChild(a)
            dias.appendChild(dia2)
            ev.appendChild(descricao)
            ev.appendChild(responsavel)
            
        } else {

            let eventos = document.querySelector('#body-eventos')

            let ev = document.createElement('div')
            ev.classList.add('evento')

            if ( pais ) {
                ev.classList.add('pais')
            }

            if ( cal == 'asp' ) { 
                ev.classList.add('verde', 'asp')
            } else if ( cal == 'out') { 
                ev.classList.add('gray', 'out')
            } else if ( cal == 'caab' ) {
                if ( niv == 'inf5' ) {
                    ev.classList.add('lilas', 'caab')
                } else if ( niv == 'f2m') {
                    ev.classList.add('ouro', 'caab')
                } else {
                    ev.classList.add('azul-padrao', 'caab')
                }
            }
            
            let data = document.createElement('div')
            data.classList.add('data')

            let dias = document.createElement('div')
            dias.classList.add('dias')
            
            let diaU = document.createElement('div')
            diaU.classList.add('diaU')

            let mes = document.createElement('div')
            mes.classList.add('mes')

            let descricao = document.createElement('div')
            descricao.classList.add('descricao')

            let responsavel = document.createElement('div')
            responsavel.classList.add('resp')

            diaU.innerHTML = d1.getDate()
            mes.innerHTML = meses[d1.getMonth()]
            descricao.innerHTML = desc

            eventos.appendChild(ev)
            ev.appendChild(data)
            data.appendChild(dias)
            data.appendChild(mes)

            dias.appendChild(diaU)
            ev.appendChild(descricao)

        }

        
    }

    filterSelection("all")
}

let calendarioDescritivo = document.querySelector('#body-eventos')