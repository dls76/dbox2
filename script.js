// window.addEventListener('load', scrollAlvo)

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)


// function scrollAlvo() { 
//     let myElement = document.getElementById('alvo');
//     let topPos = myElement.offsetTop;
//     document.getElementById('nextEventConteiner').scrollTop = topPos;
// }

// const proximoseventos = [
//     {dataInicio: new Date(2023, 9, 20), dataFim: new Date(2023, 9, 20), nome: 'Teste 1', assignee: 'DLS', pic: 'img/dls.png'},
//     {dataInicio: new Date(2023, 9, 21), dataFim: new Date(2023, 9, 21), nome: 'Teste 2', assignee: 'DLS', pic: 'img/dls.png'},
//     {dataInicio: new Date(2023, 9, 22), dataFim: new Date(2023, 9, 22), nome: 'Teste 3', assignee: 'DLS', pic: 'img/dls.png'},
//     {dataInicio: new Date(2023, 9, 23), dataFim: new Date(2023, 9, 23), nome: 'Teste 4', assignee: 'DLS', pic: 'img/dls.png'},
//     {dataInicio: new Date(2023, 9, 24), dataFim: new Date(2023, 9, 24), nome: 'Teste 5', assignee: 'DLS', pic: 'img/dls.png'},
//     {dataInicio: new Date(2023, 9, 25), dataFim: new Date(2023, 9, 25), nome: 'Teste 6', assignee: 'DLS', pic: 'img/dls.png'},
//     {dataInicio: new Date(2023, 9, 26), dataFim: new Date(2023, 9, 29), nome: 'Teste 7', assignee: 'DLS', pic: 'img/dls.png'},
// ]
/*
for ( let i=0; i<proximoseventos.length; i++ ) {

    let conteinerNextEvents = document.querySelector('#nextEventConteiner')
    
    // Se as datas de início e fim forem diferentes
    if (true) { 

        
        let nextEvBox = document.createElement('div')
        let dataBox = document.createElement('div')
        let diasBox = document.createElement('div')
        let beginningDay = document.createElement('div')
        let closeDay = document.createElement('div')
        let mes = document.createElement('div')
        let eventInfo = document.createElement('div')
        let eventName = document.createElement('div')
        let assignee = document.createElement('div')
        let imgAssignee = new Image()
        imgAssignee.src = proximoseventos[i].pic
         
        nextEvBox.classList.add('nextEvBox')
        dataBox.classList.add('dataBox')
        diasBox.classList.add('diasBox')
        eventInfo.classList.add('eventInfo')
        beginningDay.classList.add('beginningDay')
        closeDay.classList.add('closeDay')
        mes.classList.add('mes')
        eventName.classList.add('eventName')
        assignee.classList.add('assignee')
        imgAssignee.classList.add('imgAssignee')   
        
        beginningDay.innerHTML = proximoseventos[i].dataInicio.getDate()
        closeDay.innerHTML = proximoseventos[i].dataFim.getDate()
        mes.innerHTML = proximoseventos[i].dataFim.getMonth() + 1
        eventName.innerHTML = proximoseventos[i].nome
        
        assignee.appendChild(imgAssignee)
        dataBox.appendChild(diasBox)
        diasBox.appendChild(beginningDay)
        diasBox.appendChild(closeDay)
        dataBox.appendChild(mes)
        eventInfo.appendChild(eventName)
        nextEvBox.appendChild(dataBox)
        nextEvBox.appendChild(eventInfo)
        nextEvBox.appendChild(assignee)
        conteinerNextEvents.appendChild(nextEvBox)

    } else {
        console.log('else')
    }
}*/

//funcao que identifica o alvo, determina seu offsettop e scrolla o conteiner do alvo até o offsettop do alvo:
// Verificar quais datas do array proximosevetnos sao iguais ou superiores a data atual
// usar para isso a funcao map (novo array)
// escolher o primeiro elemento do array e setar ele como alvo
// determinar seu offsettop
// chamar o scrolltop do nexteventconteiner usando o offsettop do alvo como valor
// colocar tudo na funcao init para executar ao carregar a página 

// window.addEventListener('load', scrollAlvo)




// Copia link da página de cadastro de currículos do RH para a clipboard

 
document.getElementById("linkRotinas").addEventListener("click", function(event){
    event.preventDefault();
    window.open("https://calendar.google.com/calendar/u/0/r");
    window.open("https://mail.google.com/mail/u/0/#inbox");
    window.open("https://www.classapp.com.br/");
    window.open("https://acrm.sdasystems.org/login/");
});
