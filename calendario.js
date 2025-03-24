let data = new Date()
let diaSemana = new Date().getDay()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()

// Feriados fixos
const feriadosFixos = {
    "1-1": "Ano Novo",
    "25-12": "Natal",
    "7-9": "Independência do Brasil",
    "15-11": "Proclamação da República",
    "1-5": "Dia do Trabalho",
    "3-3": "Carnaval",
    "4-3": "Carnaval",
    "18-4": "Sexta-feira da Paixão",
    "21-4": "Tiradentes",
    "2-5": "Recesso",
    "19-6": "Corpus Christi",
    "20-6": "Recesso",
    "8-9": "Aniversário de Curitiba"
}

// Feriados por intervalo (mês indexado de 0 a 11)
const feriadosIntervalo = {
    6: [[5, 23]] // Julho (mês 6 no JavaScript) tem feriado de 5 a 12
}

let renderCalendar = () => {
    data.setDate(1)
    const monthDays = document.querySelector('.days')
    const lastDay = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate()
    const prevLastDay = new Date(data.getFullYear(), data.getMonth(), 0).getDate()
    const firstDayIndex = data.getDay()
    const lastDayIndex = new Date(data.getFullYear(), data.getMonth(), 0).getDay()
    const nextDays = 7 - lastDayIndex - 1
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    document.querySelector('.mescal').innerHTML = meses[data.getMonth()] + ' ' + data.getFullYear()
    let days = ""
    
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }
    
    for (let i = 1; i <= lastDay; i++) {
        let dateKey = `${i}-${data.getMonth() + 1}`
        let isFeriado = feriadosFixos[dateKey] !== undefined

        // Verifica se o dia pertence a um intervalo de feriados do mês atual
        if (feriadosIntervalo[data.getMonth()]) {
            feriadosIntervalo[data.getMonth()].forEach(([inicio, fim]) => {
                if (i >= inicio && i <= fim) {
                    isFeriado = true
                }
            })
        }

        if (i === new Date().getDate() && data.getMonth() === new Date().getMonth() && new Date().getFullYear() === data.getFullYear()) {
            days += `<div class="today dayMonth">${i}</div>`
        } else if (isFeriado) {
            days += `<div class="dayMonth" style="font-weight: 700; border: 1px solid #5e7ed3;">${i}</div>`
        } else {
            days += `<div class="dayMonth">${i}</div>`
        }
    }
    
    for (let i = 1; i <= nextDays; i++) {
        days += `<div class="next-date">${i}</div>`
    }
    monthDays.innerHTML = days
}

document.querySelector('.prev').addEventListener('click', () => {
    data.setMonth(data.getMonth() - 1)
    renderCalendar()
})

document.querySelector('.next').addEventListener('click', () => {
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