window.addEventListener("load", countdown)

const regressivaEventos = [...document.querySelectorAll('.regressivaevento')]

// regressivaEventos.forEach((number, index)=>{
//     number.innerHTML = `Faltam ${index} dias para o evento`
// })

function countdown() {
    let now = new Date()
    let eventDate = new Date(2024, 0, 29)

    let currentTime = now.getTime()
    let eventTime = eventDate.getTime()

    let remTime = eventTime - currentTime

    let s = Math.floor(remTime/1000)
    let m = Math.floor(s/60) 
    let h = Math.floor(m/60) 
    let d = Math.floor(h/24)
    
    h %= 24
    m %= 60
    s %= 60

    h = (h < 10) ? "0" + h : h 
    m = (m < 10) ? "0" + m : m 
    s = (s < 10) ? "0" + s : s

    regressivaEventos.forEach((e)=>{
        if (d==0) {
            e.innerHTML = "É hoje!"
        } else if (d==1) {
            e.innerHTML = `Faltam ${d} dia`
        } else {
            e.innerHTML = `Faltam ${d} dias`
        }

    })

    setTimeout(countdown, 1000)
    
}