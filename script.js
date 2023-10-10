// window.addEventListener('load', scrollAlvo)

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
    

}

btnMobile.addEventListener('click', toggleMenu)


let pessoa = {nome: 'Matheus', idade: 29, cidade: 'Floripa'}

// Transformar o objeto em string e salvar em localStorage
localStorage.setItem('pessoa', JSON.stringify(pessoa));

// Receber a string
let pessoaString = localStorage.getItem('pessoa');

// transformar em objeto novamente
let pessoaObj = JSON.parse(pessoaString);

// console.log(pessoaObj.nome + " " + pessoaObj.idade); 
// Matheus

/*
function scrollAlvo() { 
    let myElement = document.getElementById('alvo');
    let topPos = myElement.offsetTop;
    document.getElementById('nextEventConteiner').scrollTop = topPos;
}

 

const proximoseventos = [
    {data1: new Date(2023, 9, 20), data2: new Date(2023, 9, 20), nome: 'Dia do Professor', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {data1: new Date(2023, 9, 21), data2: new Date(2023, 9, 21), nome: 'FEFI - Feira', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {data1: new Date(2023, 9, 22), data2: new Date(2023, 9, 22), nome: 'Noite de Autógrafos', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {data1: new Date(2023, 9, 23), data2: new Date(2023, 9, 23), nome: 'Formatura Pré', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {data1: new Date(2023, 9, 24), data2: new Date(2023, 9, 24), nome: 'Encerramento Route', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {data1: new Date(2023, 9, 25), data2: new Date(2023, 9, 25), nome: 'Formatura FII', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
    {data1: new Date(2023, 9, 26), data2: new Date(2023, 9, 26), nome: 'Conselho Final', assignee: 'Douglas', pic: 'img/fotos/douglas.jpg'},
]


for ( let i=0; i<proximoseventos.length; i++ ) {


    let conteiner = document.querySelector('#nextEventConteiner')

    Criar as divs
    Setar as classes
    Setar os IDs
    Inserir os conteúdos innerHTMLs
    Append to parents
    chamar a função de scrollar o alvo para o topo 

    let data = document.createElement('div')
    let dia1 = document.createElement('div')
    let dia2 = document.createElement('div')
    let mes = document.createElement('div')
    let info = document.createElement('div')
    let title = document.createElement('div')
    let orcamento = document.createElement('a')
    let programa = document.createElement('a')
    let assignee = document.createElement('div')


    data.classList.add('data')
    dia1.classList.add('dia1')
    dia2.classList.add('dia2')
    mes.classList.add('mes')
    info.classList.add('info')
    title.classList.add('title')
    orcamento.classList.add('orcamento')
    programa.classList.add('programa')
    assignee.classList.add('assignee')   

    
    dia1.innerHTML = proximoseventos[i].dia1
    dia2.innerHTML = proximoseventos[i].dia2
    mes.innerHTML = proximoseventos[i].mes
    title.innerHTML = proximoseventos[i].title
    assignee.innerHTML = proximoseventos[i].assignee



}
*/

//funcao que identifica o alvo, determina seu offsettop e scrolla o conteiner do alvo até o offsettop do alvo:
// Verificar quais datas do array proximosevetnos sao iguais ou superiores a data atual
// usar para isso a funcao map (novo array)
// escolher o primeiro elemento do array e setar ele como alvo
// determinar seu offsettop
// chamar o scrolltop do nexteventconteiner usando o offsettop do alvo como valor
// colocar tudo na funcao init para executar ao carregar a página 