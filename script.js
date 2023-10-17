// window.addEventListener('load', scrollAlvo)

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')

}

// btnMobile.addEventListener('click', toggleMenu)


// function scrollAlvo() { 
//     let myElement = document.getElementById('alvo');
//     let topPos = myElement.offsetTop;
//     document.getElementById('nextEventConteiner').scrollTop = topPos;
// }

const proximoseventos = [
    {dataInicio: new Date(2023, 9, 20), dataFim: new Date(2023, 9, 20), nome: 'Teste 1', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {dataInicio: new Date(2023, 9, 21), dataFim: new Date(2023, 9, 21), nome: 'Teste 2', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {dataInicio: new Date(2023, 9, 22), dataFim: new Date(2023, 9, 22), nome: 'Teste 3', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {dataInicio: new Date(2023, 9, 23), dataFim: new Date(2023, 9, 23), nome: 'Teste 4', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {dataInicio: new Date(2023, 9, 24), dataFim: new Date(2023, 9, 24), nome: 'Teste 5', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {dataInicio: new Date(2023, 9, 25), dataFim: new Date(2023, 9, 25), nome: 'Teste 6', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {dataInicio: new Date(2023, 9, 26), dataFim: new Date(2023, 9, 29), nome: 'Teste 7', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
]


for ( let i=0; i<proximoseventos.length; i++ ) {

    let conteinerNextEvents = document.querySelector('#nextEventConteiner')

    // Append to parents
    // chamar a função de scrollar o alvo para o topo 
    
    // Cria as divs
    let dataBox = document.createElement('div')
    let beginningDay = document.createElement('div')
    let closeDay = document.createElement('div')
    let mes = document.createElement('div')
    // let info = document.createElement('div')
    let eventName = document.createElement('div')
    // let orcamento = document.createElement('a')
    // let programa = document.createElement('a')
    let assignee = document.createElement('div')
    
    // Adiciona as classes e IDs nas divs
    dataBox.classList.add('dataBox')
    beginningDay.classList.add('beginningDay')
    closeDay.classList.add('closeDay')
    mes.classList.add('mes')
    // info.classList.add('info')
    eventName.classList.add('eventName')
    // orcamento.classList.add('orcamento')
    // programa.classList.add('programa')
    assignee.classList.add('assignee')   
    
    // Insere conteúdo nas divs
    beginningDay.innerHTML = proximoseventos[i].dataInicio.getDate()
    closeDay.innerHTML = proximoseventos[i].dataFim.getDate()
    mes.innerHTML = proximoseventos[i].dataFim.getMonth() + 1
    eventName.innerHTML = proximoseventos[i].nome
    assignee.innerHTML = proximoseventos[i].assignee
    
    // Append todos os elementos em seus parents
    dataBox.appendChild(beginningDay)
    dataBox.appendChild(closeDay)
    dataBox.appendChild(mes)
    dataBox.appendChild(eventName)
    dataBox.appendChild(assignee)
    // conteinerNextEvents.appendChild(dataBox)
}

//funcao que identifica o alvo, determina seu offsettop e scrolla o conteiner do alvo até o offsettop do alvo:
// Verificar quais datas do array proximosevetnos sao iguais ou superiores a data atual
// usar para isso a funcao map (novo array)
// escolher o primeiro elemento do array e setar ele como alvo
// determinar seu offsettop
// chamar o scrolltop do nexteventconteiner usando o offsettop do alvo como valor
// colocar tudo na funcao init para executar ao carregar a página 

// window.addEventListener('load', scrollAlvo)



// Copiar link para página de cadastro de currículos do RH

let btcurr = document.querySelector('#btcurriculos')
btcurr.addEventListener('click', copiarlinkcurriculos)

function copiarlinkcurriculos() {
    let textoCopiado = document.getElementById("inputcurriculos");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
