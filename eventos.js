window.addEventListener("load", mostrarEventos)

const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

let eventos = [

    // agosto
    {data1: new Date(2023, 7, 1), data2: new Date(2023, 8, 8), descritivo: "Orçamento das escolas 2023", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 1), data2: new Date(2023, 7, 4), descritivo: "Semana Hábitos de Estudos 2º ao 5º ano", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 4), data2: new Date(2023, 7, 4), descritivo: "Reunião Líderes Route", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 4), data2: new Date(2023, 7, 5), descritivo: "Data para a atualização dos PEIs", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 6), data2: new Date(2023, 7, 6), descritivo: "Projeto Dia dos Pais (Dia Letivo – dia permutado com recesso do dia 03/11)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 7), data2: new Date(2023, 7, 31), descritivo: "Questionário Contextuais PAEEB (EM, docentes e equipes gestoras)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 7), data2: new Date(2023, 7, 11), descritivo: "Lançamento do PMDE – 2º Semestre", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 8), data2: new Date(2023, 7, 8), descritivo: "Liderança Vice-diretores (remoto)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 11), data2: new Date(2023, 7, 11), descritivo: "Dia do Estudante", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 13), data2: new Date(2023, 7, 13), descritivo: "Dia dos Pais", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 14), data2: new Date(2023, 7, 18), descritivo: "AV1 - colocar nos primeiros dias as provas com mais complicação de correção.", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 15), data2: new Date(2023, 7, 17), descritivo: "Lançamento de matrículas equipe administrativa – diretrizes e macros da campanha 2024 – ASP", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 19), data2: new Date(2023, 7, 25), descritivo: "Viagem de Formatura Terceirão", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 15), data2: new Date(2023, 7, 15), descritivo: "Treinamento de promotores e atendimento de matrículas 2024 – manhã", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 21), data2: new Date(2023, 7, 21), descritivo: "2ª Chamada", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 7, 22), data2: new Date(2023, 7, 22), descritivo: "Dia da Coordenadora Pedagógica", cal: "cac", resp: "", foto: "", detalhes: ""},
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
    {data1: new Date(2023, 7, 29), data2: new Date(2023, 8, 16), descritivo: "Processo de rematrícula", cal: "cac", resp: "", foto: "", detalhes: ""},
        
    // setembro
    {data1: new Date(2023, 8, 1), data2: new Date(2023, 8, 29), descritivo: "Aplicação das Provas Diagnósticas da Alfabetização – 3ª testagem", cal: "cac", resp: "", foto: "", detalhes: "Será enviado pela ASP no início do mês"},
    {data1: new Date(2023, 8, 2), data2: new Date(2023, 8, 6), descritivo: "Semana de Oração – 6º ao EM", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 1), data2: new Date(2023, 8, 30), descritivo: "Pesquisa de Qualidade – pais e responsáveis", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 4), data2: new Date(2023, 8, 6), descritivo: "Semana da Pátria", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 4), data2: new Date(2023, 8, 4), descritivo: "Comissão de Redação/PQD (tarde)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 5), data2: new Date(2023, 8, 5), descritivo: "Comissão de Educação/Diretiva", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 5), data2: new Date(2023, 8, 5), descritivo: "Encontro de Professores de Projeto de Vida (remoto)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 7), data2: new Date(2023, 8, 7), descritivo: "Feriado Independência do Brasil", cal: "out", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 8), data2: new Date(2023, 8, 8), descritivo: "Feriado Municipal (Curitiba)", cal: "out", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 11), data2: new Date(2023, 8, 11), descritivo: "Início Campanha de Matrículas 2024 – digital", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 11), data2: new Date(2023, 8, 11), descritivo: "Reunião de alinhamento SOE e SOP - On Line - 8h30", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 11), data2: new Date(2023, 8, 15), descritivo: "Período de aplicação da AV2", cal: "cac", resp: "", foto: "", detalhes: "Colocar nos primeiros dias as provas com mais complicação de correção."},
    {data1: new Date(2023, 8, 11), data2: new Date(2023, 8, 15), descritivo: "Semana do Lenço", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 13), data2: new Date(2023, 8, 13), descritivo: "Projeto Quebrando o Silêncio nas salas de aula", cal: "cac", resp: "", foto: "", detalhes: "Palestras com psicólogos na sala de aula."},
    {data1: new Date(2023, 8, 16), data2: new Date(2023, 8, 16), descritivo: "Dia Mundial do Desbravador", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 16), data2: new Date(2023, 8, 16), descritivo: "Batismo da Primavera", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 17), data2: new Date(2023, 8, 17), descritivo: "Super Dia D - Plantão de Matrículas – Mostra cultural Ed.Infantil, 1º e contraturno", cal: "cac", resp: "", foto: "", detalhes: "Possível troca de data para a mostra cultural."},
    {data1: new Date(2023, 8, 17), data2: new Date(2023, 8, 19), descritivo: "Projeto Fair Play - Módulo Jogos da Amizade", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 20), data2: new Date(2023, 8, 20), descritivo: "Data limite para a entrega ao SOP dos conteúdos e métodos avaliativos do 4º bimestre   ", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 21), data2: new Date(2023, 8, 21), descritivo: "2ª Chamada", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 21), data2: new Date(2023, 8, 22), descritivo: "Organização das convocações para a Recuperação Bimestral", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 21), data2: new Date(2023, 8, 21), descritivo: "Conselho de Classe", cal: "cac", resp: "", foto: "", detalhes: "Novo formato de acordo com o regimento - SOE e SOP definirão as datas para cada segmento."},
    {data1: new Date(2023, 8, 22), data2: new Date(2023, 8, 22), descritivo: "Entrega das convocações para a Recuperação Bimestral aos alunos", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 22), data2: new Date(2023, 8, 22), descritivo: "Dia do Contador e Tesoureiro(a) escolar", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 25), data2: new Date(2023, 8, 25), descritivo: "Encerramento das classes bíblicas com o 5º ano", cal: "cac", resp: "", foto: "", detalhes: "Caso necessário, pode ser feita a cerimônia na semana de oração."},
    {data1: new Date(2023, 8, 25), data2: new Date(2023, 8, 29), descritivo: "Recuperação Bimestral – 3º bimestre", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 26), data2: new Date(2023, 8, 26), descritivo: "Data limite para o registro de todas as Atividades Avaliativas de Aprendizagem do 3º bimestre no SAD (prof)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 29), data2: new Date(2023, 8, 29), descritivo: "Final do 3º bimestre", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 30), data2: new Date(2023, 8, 30), descritivo: "Dia do(a) Secretário(a)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 30), data2: new Date(2023, 8, 30), descritivo: "Data limite para o envio dos Cronogramas Avaliativos aos alunos", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 30), data2: new Date(2023, 8, 30), descritivo: "Data limite para a regularização dos registros dos conteúdos do mês, no SAD", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 8, 31), data2: new Date(2023, 8, 31), descritivo: "Verificar Ensaio fotográfico formaturas", cal: "out", resp: "", foto: "", detalhes: ""},

    //Outubro
    {data1: new Date(2023, 9, 2), data2: new Date(2023, 9, 3), descritivo: "Enem Interativo – aplicação", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 2), data2: new Date(2023, 9, 2), descritivo: "Início do 4º bimestre", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 2), data2: new Date(2023, 9, 6), descritivo: "Semana de Oração Fund II-EM", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 3), data2: new Date(2023, 9, 6), descritivo: "Dia do Amigo – Visita Escolas Parceiras", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 4), data2: new Date(2023, 9, 4), descritivo: "Encerramento de aplicação do Enem Interativo", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 4), data2: new Date(2023, 9, 4), descritivo: "Matrículas abertas para alunos novos – vaga garantida para o aluno veterano até esse dia", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 5), data2: new Date(2023, 9, 5), descritivo: "Liberação dos gabaritos e provas – Enem Interativo", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 6), data2: new Date(2023, 9, 6), descritivo: "Início da divulgação dos resultados do Enem Interativo", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 6), data2: new Date(2023, 9, 6), descritivo: "Data limite para entrega das avaliações 4º Bimestre - Para Análise do SOP", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 7), data2: new Date(2023, 9, 7), descritivo: "Sábado de Educação – batismo CAC", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 8), data2: new Date(2023, 9, 8), descritivo: "Domingo Letivo - Dia D – Mostra Cultural - 2º ao 5º", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 9), data2: new Date(2023, 9, 9), descritivo: "Liberação para a visualização dos Pareceres e Boletins – 3º Bimestre / Entrega de boletins", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 9), data2: new Date(2023, 9, 9), descritivo: "Impressão dos diários do 3º Bimestre (Conteúdos e Frequência)", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 9), data2: new Date(2023, 9, 11), descritivo: "Semana da Criança", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 11), data2: new Date(2023, 9, 15), descritivo: "Campori da USB", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 12), data2: new Date(2023, 9, 12), descritivo: "Feriado N. S. Aparecida", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 13), data2: new Date(2023, 9, 13), descritivo: "Recesso – Dia do Professor (Dia permutado com 15/10", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 16), data2: new Date(2023, 9, 20), descritivo: "Semana Criacionista", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 16), data2: new Date(2023, 9, 20), descritivo: "AV1", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 17), data2: new Date(2023, 9, 17), descritivo: "Comemoração do Dia do Professor", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 18), data2: new Date(2023, 9, 19), descritivo: "Concilio Ministerial", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 19), data2: new Date(2023, 9, 19), descritivo: "Dia do Técnico em Informática", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 20), data2: new Date(2023, 9, 20), descritivo: "Dia do Pastor Escolar", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 21), data2: new Date(2023, 9, 21), descritivo: "Dia do Pastor / Sábado da Criação", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 23), data2: new Date(2023, 9, 23), descritivo: "Enem TEEN e TREINEIRO", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 23), data2: new Date(2023, 9, 3), descritivo: "Avaliação PAAEB – 5º ano, 9º ano e 2ª EM - Sugestão ASP (26 a", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 24), data2: new Date(2023, 9, 24), descritivo: "Rumo ao EM - PAIS", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 26), data2: new Date(2023, 9, 26), descritivo: "Aulão Unificado - Terceirão - Depende da data do Enem", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 28), data2: new Date(2023, 9, 28), descritivo: "Noite Esportiva - Clube Aventureiros Arautos Kids", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 31), data2: new Date(2023, 9, 31), descritivo: "Rumo ao 6º TMA", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 30), data2: new Date(2023, 9, 31), descritivo: "ECO - Encontro de Coordes e Orients - Presencial", cal: "cac", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 9, 31), data2: new Date(2023, 9, 31), descritivo: "Data limite para a regularização dos registros dos conteúdos do mês, no SAD", cal: "cac", resp: "", foto: "", detalhes: ""},

]
/*
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
            } else if ( cal == 'cac' ) {
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
}*/