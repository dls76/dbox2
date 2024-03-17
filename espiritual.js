
// Oração
window.addEventListener('load', oracaopelasescolas)

let hoje = new Date().getDay()
let msg = "Hoje estamos orando por "
function oracaopelasescolas() {

    if (hoje == 0) { 
        // document.querySelector('#escaladeoracao').innerHTML = 'Hoje é domingão!'
    }
    if (hoje == 1) {
        document.querySelector('#escaladeoracao').innerHTML = msg 
        document.querySelector('#escolasparaorar').innerHTML = 'CAFRG e CAAP'
    }
    if (hoje == 2) {
        document.querySelector('#escaladeoracao').innerHTML = msg 
        document.querySelector('#escolasparaorar').innerHTML = 'CAAB e CCABR'
    }
    if (hoje == 3) { 
        document.querySelector('#escaladeoracao').innerHTML = msg 
        document.querySelector('#escolasparaorar').innerHTML = 'CAPI e CAPGUÁ'
    }
    if (hoje == 4) { 
        document.querySelector('#escaladeoracao').innerHTML = msg 
        document.querySelector('#escolasparaorar').innerHTML = 'CASJP e EAUV'
    }
    if (hoje == 5) { 
        document.querySelector('#escaladeoracao').innerHTML = msg 
        document.querySelector('#escolasparaorar').innerHTML = 'CAC e Departamento'
    }
    if (hoje == 6) { 
        document.querySelector('#escaladeoracao').innerHTML = 'Feliz Sábado!'
    }

}