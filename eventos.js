
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

let eventos = [

    // {dataInicial: new Date(2024, 8, 9), dataFinal: new Date(2024, 8, ), nome: "Convenção Jovem Maranata 2024 Brasília/DF , saída na terça (terça 28 e retorno domingo 02)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 2), dataFinal: new Date(2024, 8, 2), nome: "Reunião Administrativa - Departamentais e Coordenadores – Remoto (tarde)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 2), dataFinal: new Date(2024, 8, 30), nome: "30 - Hipótese de Escrita EI 4, 5 anos e 1º ano EF – 3ª Testagem", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 2), dataFinal: new Date(2024, 8, 2), nome: "Início do Ranking matrículas 2024", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 2), dataFinal: new Date(2024, 8, 2), nome: "Início Campanha de Matrículas 2025 – Digital", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 3), dataFinal: new Date(2024, 8, 3), nome: "Projetos Quebrando o Silêncio e de Sexualidade - FI", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 3), dataFinal: new Date(2024, 8, 3), nome: "Comissão de Educação/Diretiva", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 7), dataFinal: new Date(2024, 8, 7), nome: "Feriado Independência do Brasil", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 8), dataFinal: new Date(2024, 8, 8), nome: "Feriado Municipal (Curitiba) ", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 9), dataFinal: new Date(2024, 8, 13), nome: "13 - Período de aplicação da AV2 – datas unificadas USB com fund 2 e EM - 2ª, 3ª E 4ª aula", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 10), dataFinal: new Date(2024, 8, 11), nome: "11 – Planejamento ASP", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 11), dataFinal: new Date(2024, 8, 15), nome: "/09 - I Will Go Teen – Encontro de Comunidades Memi – FAP", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 15), dataFinal: new Date(2024, 8, 18), nome: "18 - Excursão de formandos 9ºEF (a confirmar)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 15), dataFinal: new Date(2024, 8, 15), nome: "Plantão de Matrículas", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 17), dataFinal: new Date(2024, 8, 17), nome: "Formadores de Área – Tarde", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 17), dataFinal: new Date(2024, 8, 17), nome: "Dia D (primeiro)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 17), dataFinal: new Date(2024, 8, 17), nome: "Fórum IATec – Financeiro – 15h", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 18), dataFinal: new Date(2024, 8, 18), nome: "Conselho de Classe (antes da recuperação)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 20), dataFinal: new Date(2024, 8, 20), nome: "Entrega das convocações para a Recuperação Bimestral aos alunos", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 20), dataFinal: new Date(2024, 8, 20), nome: "Data limite para a entrega ao SOP dos conteúdos e métodos avaliativos do 4º bimestre", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 22), dataFinal: new Date(2024, 8, 22), nome: "Dia do Contador e Tesoureiro(a) escolar", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 23), dataFinal: new Date(2024, 8, 27), nome: "27 - Recuperação Bimestral", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 23), dataFinal: new Date(2024, 8, 27), nome: "27 - Aplicação das Provas Diagnósticas de Alfabetização ASP", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 23), dataFinal: new Date(2024, 9, 4),  nome: "4/10 - Enem Interativo – aplicação", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 24), dataFinal: new Date(2024, 8, 24), nome: "Treinamento IATec – Adconnetc – TI’s", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 28), dataFinal: new Date(2024, 9, 4),  nome: "4/10 - Excursão de Formandos 3ºEM (Caldas Novas - GO)", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 28), dataFinal: new Date(2024, 8, 28), nome: "Batismo da Primavera - ASP", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 30), dataFinal: new Date(2024, 8, 30), nome: "Final do 3º bimestre", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 30), dataFinal: new Date(2024, 8, 30), nome: "Dia da Secretária(o) ", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 30), dataFinal: new Date(2024, 8, 30), nome: "Data limite para o envio dos Cronogramas Avaliativos aos alunos", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 30), dataFinal: new Date(2024, 8, 30), nome: "Data limite para a regularização dos registros dos conteúdos do mês, no SAD", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 1), dataFinal: new Date(2024, 8, 30), nome: "Pesquisa de qualidade - Pais e responsáveis  - USB", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 1), dataFinal: new Date(2024, 8, 30), nome: "Análise do Calendário 2025", responsável: "Douglas", foto: 'img/dls.png'},
    {dataInicial: new Date(2024, 8, 1), dataFinal: new Date(2024, 8, 30), nome: "Ensaio fotográfico – Formatura", responsável: "Douglas", foto: 'img/dls.png'},

]

function mostrarnomeentos(){
    
    for ( i = 0; i < eventos.length; i++ ) {
        
        let dt1 = eventos[i].data1
        let dt2 = eventos[i].data2
        let evt = eventos[i].descritivo
        
        
        

        if ( dt1 < dt2 ) {

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
}


eventos.forEach((e)=>{

    let pai = document.querySelector('#calendarioDescritivo')
    
    let linha = document.createElement('div')
    linha.classList.add('descritivoCal')
    
    let spanCal = document.createElement('span')
    spanCal.classList.add('spanCalData')
    
    let spanDescritivo = document.createElement('span')
    spanDescritivo.classList.add('spanDescritivo')

    linha.appendChild(spanCal)
    linha.appendChild(spanDescritivo)
    
    pai.appendChild(linha)    
    
    spanCal.innerHTML = e.data1.getDate() + ' ' + (meses[e.data1.getMonth()])

    spanDescritivo.innerHTML = ' - ' + e.descritivo;

    
})
