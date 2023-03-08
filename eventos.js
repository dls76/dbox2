window.addEventListener("load", mostrarEventos)

const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

let eventos = [
    {data1: new Date(2023, 1, 27), data2: new Date(2023, 2, 3), descritivo: "Semana Hábitos de Estudo – SOE", cal: 'caab', resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 27), data2: new Date(2023, 1, 27), descritivo: "Início do reforço escolar - Ed. Infantil e Fund I", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 27), data2: new Date(2023, 1, 27), descritivo: "Data limite para o envio dos cronogramas avaliativos bimestrais aos alunos – SOP responsável em montar o cronograma - SOE responsável para disponibilizar para alunos, responsáveis e portal.", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 27), data2: new Date(2023, 1, 27), descritivo: "Data final para início dos livros didáticos. Fazer o levantamento dos alunos que não compraram ainda.", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 1, 23), data2: new Date(2023, 2, 4), descritivo: "Dez Dias de Oração (educação ênfase fidelidade)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 1), data2: new Date(2023, 2, 31), descritivo: "Reuniões Pedagógicas Individuais - FII-EM", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 1), data2: new Date(2023, 2, 2), descritivo: "Reunião ECO - SOE e SOP – ASP (presencial)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 1), data2: new Date(2023, 2, 1), descritivo: "1º - Celebra FUND II e EM - Lançamento programa Redação Nota 1000 - Prof Marlus", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 10), descritivo: "Período de aplicação da AV1 FI- colocar nos primeiros dias as provas com mais complicação de correção.", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 10), descritivo: "Período de aplicação da AV1 I BIM – corrigir, lançar notas no SAD e devolver aos estudantes até 5 dias úteis após a data da sua avaliação.", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 10), descritivo: "Lançamento PMDE", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 31), descritivo: "Recuperação e Remediação do 1º ano - (acrescentar alunos que não estão alfabetizados)", cal: "", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 13), descritivo: "Diagnóstica 1º ao 5º ano – (conteúdo anterior)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 10), descritivo: "Lançamento do PMDS/PMDE", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 6), data2: new Date(2023, 2, 6), descritivo: "Comissão de Literatura (dia todo - 8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 7), data2: new Date(2023, 2, 7), descritivo: "Comissão de Educação/Diretiva", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 7), data2: new Date(2023, 2, 7), descritivo: "Início da classe bíblica FI", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 8), data2: new Date(2023, 2, 8), descritivo: "Dia internacional da mulher", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 8), data2: new Date(2023, 2, 8), descritivo: "Comissão de Matemática (dia todo - 8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 9), data2: new Date(2023, 2, 9), descritivo: "Comissão de Educação Física (dia todo - 8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 11), data2: new Date(2023, 2, 11), descritivo: "Retiro Espiritual CAAB - Recanto Céu Azul - SJP", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 12), data2: new Date(2023, 2, 12), descritivo: "Dia do Bibliotecário", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 13), data2: new Date(2023, 2, 17), descritivo: "Pré conselho EI e 1º ano FI", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 13), data2: new Date(2023, 2, 13), descritivo: "Comissão Redação/PQD dia todo (8h30 às 11h30 e 13h30 às 17h)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 13), data2: new Date(2023, 2, 13), descritivo: "Reunião Bibliotecário auxiliar presencial.", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 14), data2: new Date(2023, 2, 14), descritivo: "Formadores de área (tarde)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 14), data2: new Date(2023, 2, 14), descritivo: "2ª Chamada AV1 I BIM - FI-EM", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 14), data2: new Date(2023, 2, 15), descritivo: "Realização do APSE", cal: "", resp: "caab", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 18), data2: new Date(2023, 2, 18), descritivo: "Dia do Jovem Adventista", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 19), data2: new Date(2023, 2, 19), descritivo: "Feriado São José dos Pinhais", cal: "out", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Feriado Pinhais", cal: "out", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Início do Outono", cal: "out", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 20), data2: new Date(2023, 2, 20), descritivo: "Data limite para o lançamento das notas AV1 no SAD (prof)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 21), data2: new Date(2023, 2, 21), descritivo: "Reunião com alunos/pais bolsistas – assinatura documento(s) de comprometimento e ciência", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 21), data2: new Date(2023, 2, 21), descritivo: "Reunião de departamentais e Coordenadoras de Campo (remoto)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 21), data2: new Date(2023, 2, 21), descritivo: "Reunião Participativa de Pais e alunos - 6º ao EM", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 22), data2: new Date(2023, 2, 22), descritivo: "Reunião Grupo Gestor com presença da USB – presencial ASP", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 23), data2: new Date(2023, 2, 23), descritivo: "ECO - Encontro Coordes e Orients - SOE E SOP – presencial ASP", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 26), data2: new Date(2023, 2, 29), descritivo: "Encontro de Pastores Escolares - USB", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "1ª Semana de Oração e Impacto Esperança nas escolas - (projeto cada escola numa cidade) - FII ao Médio", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 28), data2: new Date(2023, 2, 29), descritivo: "Enem TEEN e TREINEIRO 1º BIM", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 27), descritivo: "Feriado Municipal de União da Vitória", cal: "out", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "Impacto Esperança nas escolas - (projeto cada escola numa cidade)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "Pesquisa de satisfação com todos os alunos novos (link pelo departamento)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "Semana de oração", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 27), data2: new Date(2023, 2, 31), descritivo: "Encontro Pedagógico SOP individual - EI e FI", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 28), data2: new Date(2023, 2, 28), descritivo: "Reunião Participativa de Pais e alunos - após AV1 - Horário aula", cal: "caab", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 28), data2: new Date(2023, 2, 29), descritivo: "GEPEA pedagógico – Presencial IAP", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 30), data2: new Date(2023, 2, 30), descritivo: "Devolutiva APSE aos alunos e pais (zoom)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 30), data2: new Date(2023, 2, 30), descritivo: "Impacto Esperança – data única para entrega do livro da esperança", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 31), data2: new Date(2023, 2, 31), descritivo: "Data limite para a regularização dos registros dos conteúdos e notas do mês no SAD (prof)", cal: "asp", resp: "", foto: "", detalhes: ""},
    {data1: new Date(2023, 2, 31), data2: new Date(2023, 2, 31), descritivo: "Relatório mensal de notificações para pais - impresso", cal: "caab", resp: "", foto: "", detalhes: ""},
]

function mostrarEventos(){

    for ( i = 0; i < eventos.length; i++ ) {

        let d1 = eventos[i].data1
        let d2 = eventos[i].data2
        let desc = eventos[i].descritivo
        let res = eventos[i].foto
        let cal = eventos[i].cal
        
        if ( d1 < d2 ) {

            let eventos = document.querySelector('#body-eventos')

            let ev = document.createElement('div') 
            ev.classList.add('evento')

            if ( cal == 'asp' ) { 
                ev.classList.add('verde')
            } else if ( cal == 'out') { 
                ev.classList.add('gray')
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

            if ( cal == 'asp' ) { 
                ev.classList.add('verde')
            } else if ( cal == 'out') { 
                ev.classList.add('gray')
            } else if ( cal == 'pais') {
                ev.classList.add('lilas')
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

    load()
}

// Expande a área de filtros do calendário e muda o botão
// document.querySelector('#eventos-mais').addEventListener('click', ()=>{

//     let filtros = document.querySelector('#filtros')
//     filtros.classList.add('displayToggle')
//     document.querySelector('#eventos-mais').style.display = "none"
//     document.querySelector('#eventos-menos').style.display = "flex"
    

// })

// document.querySelector('#eventos-menos').addEventListener('click', ()=>{

//     let filtros = document.querySelector('#filtros')
//     filtros.classList.remove('displayToggle')
//     document.querySelector('#eventos-mais').style.display = "flex"
//     document.querySelector('#eventos-menos').style.display = "none"


// })


// function scroll() {
//     const d = new Date()
//     eventos.find(e => d.getDate() == e.data1.getDate()).scrollIntoView(true)
// }

    // ("tJan").offsetTop -84;
    // var fev = document.getElementById("tFev").offsetTop -84;
    // var mar = document.getElementById("tMar").offsetTop -84;
    // var abr = document.getElementById("tAbr").offsetTop -84;
    // var mai = document.getElementById("tMai").offsetTop -84;
    // var jun = document.getElementById("tJun").offsetTop -84;
    // var jul = document.getElementById("tJul").offsetTop -84;
    // var ago = document.getElementById("tAgo").offsetTop -84;
    // var set = document.getElementById("tSet").offsetTop -84;
    // var out = document.getElementById("tOut").offsetTop -84;
    // var nov = document.getElementById("tNov").offsetTop -84;
    // var dez = document.getElementById("tDez").offsetTop -84;


    // if (mes === 0) {window.scrollTo(0, jan)} 
    // else if (mes === 1) {window.scrollTo(0, fev)} 
    // else if (mes === 2) {window.scrollTo(0, mar)} 
    // else if (mes === 3) {window.scrollTo(0, abr)} 
    // else if (mes === 4) {window.scrollTo(0, mai)} 
    // else if (mes === 5) {window.scrollTo(0, jun)} 
    // else if (mes === 6) {window.scrollTo(0, jul)} 
    // else if (mes === 7) {window.scrollTo(0, ago)} 
    // else if (mes === 8) {window.scrollTo(0, set)} 
    // else if (mes === 9) {window.scrollTo(0, out)} 
    // else if (mes === 10){window.scrollTo(0, nov)} 
    // else if (mes === 11){window.scrollTo(0, dez)} 

// }

// window.addEventListener('load', scroll())

// window.addEventListener('load', function () {
    //var altura = window.innerHeight;
    // var largura = window.innerWidth;

    // if (largura < 700) {  
    //     scrollMobile()
    // } else {
    //     scroll();
    // }
// });