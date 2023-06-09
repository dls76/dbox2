// window.addEventListener('load', scrolling)
// window.addEventListener('load', getElementPosition)

// function showeventos() { 
    
//     let todoseventos = [...document.querySelectorAll('.evento')]

//     todoseventos.forEach((x)=>{

//         x.addEventListener('click', (y)=>{
//             let eventoclicado = y.target 
//             let clicado = eventos.indexOf(eventoclicado)
            
//         })
//     })

// }

// function getCurrentEvent() {

//     for ( let i = 0; i <= eventos.length; i++ ) { 

//     if ( eventos[i].data1.getTime() >= new Date().getTime() || eventos[i].data1.getTime() <= (new Date().getTime() + 86400000) ) {
//         console.log(eventos[i].data1.getDate() + '/' + eventos[i].data1.getMonth() + ' - ' + eventos[i].descritivo)
//         break
//     } else {
//         console.log('don´t match')
//     }

//     return eventos[i].getBoundingClientRect()

// }
// }

// function scrolling() {
//     const calendariodescritivo = document.querySelector('#body-eventos')
//     calendariodescritivo.scrollTo(0, 2500)
// }


// const b = document.querySelector('#btn-obs')

// b.addEventListener('click', ()=>{
//     getCurrentEvent()
// })



const turma61 = [
    {
        seg: ['Matemática', 'Ciências', 'Religião', 'Inglês', 'Ed. Física'],
        prof: ['Denise', 'Alessandra', 'Luis', 'Denis', 'Gui/Paty']},
    {
        ter: ['Ciências', 'Matemática', 'Português', 'Religião', 'Ed. Física'],
        prof: ['Denise', 'Alessandra', 'Luis', 'Denis', 'Gui/Paty']},         
    {
        qua: ['Arte', 'Ciências', 'Religião', 'Inglês', 'Cultura Geral'],
        prof: ['Denise', 'Alessandra', 'Luis', 'Denis', 'Gui/Paty']},         
    {
        qui: ['Projeto Vida', 'Ciências', 'História', 'Geografia', 'Ed. Física'],
        prof: ['Denise', 'Alessandra', 'Luis', 'Denis', 'Gui/Paty']},         
    {
        sex: ['Portugês', 'Ciências', 'Literatura', 'Inglês', 'Redação'],
        prof: ['Denise', 'Alessandra', 'Luis', 'Denis', 'Gui/Paty']},         
]

// alert('Turma 61 - 1º período: ' + turma61[0].seg[0] + ' - ' + turma61[0].prof[0])