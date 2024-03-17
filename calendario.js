let data = new Date()
let diaSemana = new Date().getDay()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()

let renderCalendar = ()=> { 
    
    data.setDate(1)
    
    const monthDays = document.querySelector('.days')
    
    const lastDay = new Date(data.getFullYear(), data.getMonth()+1, 0).getDate()

    const prevLastDay = new Date(data.getFullYear(), data.getMonth(), 0).getDate()

    const firstDayIndex = data.getDay()

    const lastDayIndex = new Date(data.getFullYear(), data.getMonth(), 0).getDay()
    
    const nextDays = 7 - lastDayIndex - 1

    let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    
    document.querySelector('.mescal').innerHTML = meses[data.getMonth()] + ' ' + data.getFullYear()

    let days = ""

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++ ) {

        /*código sugerido para não marcar o mesmo dia todo ano - no vídeo só especifica dia e mes*/
        if ( i === new Date().getDate() && data.getMonth() === new Date().getMonth() && new Date().getFullYear() === data.getFullYear() ) {
            days += `<div class="today dayMonth">${i}</div>`
        } else {
            days += `<div class="dayMonth">${i}</div>`
        }
    }

    for (let i = 1; i <= nextDays; i++ ) {
        days += `<div class="next-date">${i}</div>`
    }
    monthDays.innerHTML = days
}

document.querySelector('.prev').addEventListener('click', ()=>{
    data.setMonth(data.getMonth() - 1)
    renderCalendar()
})

document.querySelector('.next').addEventListener('click', ()=>{
    data.setMonth(data.getMonth() + 1)
    renderCalendar()
})

document.querySelector("#btn-hoje").addEventListener("click", () => {
    data.setFullYear(ano)
    data.setMonth(mes)
    renderCalendar()
})

document.querySelector("#btn-obs").addEventListener("click", () => {
    alert('Em construção')
})

renderCalendar()

const btup = document.querySelector('#bt-up')
const btdown = document.querySelector('#bt-down')
const btnsCal = document.querySelector('#btnsCal')
const filtros = document.querySelector('#filtros')
const boxeventos = document.querySelector('#body-eventos')

btdown.addEventListener('click', ()=>{
    btup.style.display="block"
    btdown.style.display="none"
    btnsCal.style.display="flex"
    filtros.style.display="grid"
    boxeventos.style.height="229px"

})

btup.addEventListener('click', ()=>{
    btup.style.display="none"
    btdown.style.display="block"
    btnsCal.style.display="none"
    filtros.style.display="none"
    boxeventos.style.height="322px"
})