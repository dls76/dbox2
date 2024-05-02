let datahoje = new Date()

window.addEventListener('load', cultos)
window.addEventListener('load', compensacao)
window.addEventListener('load', plantaoDiario)
// window.addEventListener('load', plantaoentrevistas)

// Cultos
function cultos() {

    if (datahoje.getDay() == 0) {
        document.querySelector('#cultos').innerHTML = "Hoje é domingo!"
    }
    if (datahoje.getDay() == 1) {
         document.querySelector('#cultos').innerHTML = 'Alexandro'
    }
    if (datahoje.getDay() == 2) {
        document.querySelector('#cultos').innerHTML = 'Pr. Vinícius'
    }
    if (datahoje.getDay() == 3) {
        document.querySelector('#cultos').innerHTML = 'Pr. Leonardo'
    }
    if (datahoje.getDay() == 4) {

        // if ( datahoje.getDate() == 11) {
        //     document.querySelector('#cultos').innerHTML = '7h ???' + ' | ' + '10h15 ???' + ' | ' + '13h ???' 
        // }
        // if ( datahoje.getDate() == 18) {
        //     document.querySelector('#cultos').innerHTML = '7h ???' + ' | ' + '10h15 ???' + ' | ' + '13h ???' 
        // }
        // if ( datahoje.getDate() == 18) {
        //     document.querySelector('#cultos').innerHTML = '7h Jaque' + ' | ' + '10h15 Nailson' + ' | ' + '13h ???' 
        // }
        if ( datahoje.getDate() == 2) {
            // document.querySelector('#cultos').innerHTML = '7h Fillipi' + ' | ' + '10h15 Malú' + ' | ' + '13h Adriene' 
            document.querySelector('#cultos').innerHTML = 'Pr. Vinícius' 
        }
    }
    if (datahoje.getDay() == 5) {
        document.querySelector('#cultos').innerHTML = 'Douglas'
    }
    if (datahoje.getDay() == 6) {
        document.querySelector('#cultos').innerHTML = 'Feliz Sábado!'
    }
}

//Plantão Diário
function plantaoDiario() {

    // domingo
    if (datahoje.getDay() == 0) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje é domingo!'
    }    
    // segunda
    if (datahoje.getDay() == 1) { 
        document.querySelector('#plantaodiario').innerHTML = 'Josi'
    }
    // terça
    if (datahoje.getDay() == 2) {
        document.querySelector('#plantaodiario').innerHTML = 'Alexandro'
    }
    // quarta
    if (datahoje.getDay() == 3) { 
        document.querySelector('#plantaodiario').innerHTML = 'Nailson'
    }
    // quinta
    if (datahoje.getDay() == 4) { 
        document.querySelector('#plantaodiario').innerHTML = 'Douglas'
    }
    // sexta
    if (datahoje.getDay() == 5) { 
        document.querySelector('#plantaodiario').innerHTML = 'ver plantão de sexta'
    }
    // sábado
    if (datahoje.getDay() == 6) { 
        document.querySelector('#plantaodiario').innerHTML = 'Feliz Sábado!'
    }
}

function compensacao() {

    // domingo
    if (datahoje.getDay() == 0) { 
        document.querySelector('#nomescomp').innerHTML = 'Hoje é domingo!'
    }    
    // segunda
    if (datahoje.getDay() == 1) { 
        document.querySelector('#nomescomp').innerHTML = 'Pr. Vinícius'
    }
    // terça
    if (datahoje.getDay() == 2) {
        document.querySelector('#nomescomp').innerHTML = 'Nailson'
    }
    // quarta
    if (datahoje.getDay() == 3) { 
        document.querySelector('#nomescomp').innerHTML = 'Jaque, Camila (M), Andressa (T)'
    }
    // quinta
    if (datahoje.getDay() == 4) { 
        // document.querySelector('#nomescomp').innerHTML = 'Valéria (M), Sarita (T)'
        document.querySelector('#nomescomp').innerHTML = 'Semana de Feriado'
    }
    // sexta
    if (datahoje.getDay() == 5) { 
        // document.querySelector('#nomescomp').innerHTML = 'Malu (M), Ale, Josi, Carol (T)'
        document.querySelector('#nomescomp').innerHTML = 'Semana de Feriado'
    }
    // sábado
    if (datahoje.getDay() == 6) { 
        document.querySelector('#nomescomp').innerHTML = 'Feliz Sábado!'
    }
}

// Última escala
window.addEventListener('load', arredondarBordasInferiores)
function arredondarBordasInferiores() {
    const divescalas = document.querySelectorAll('.escala')
    const escalas = Array.from(divescalas)
    const ultimaescala = escalas.length - 1
    const uesc = escalas[ultimaescala]
    uesc.style.borderRadius = "0 0 12px 12px"
}

// AMA
const btnama = document.querySelector('#bt-ama')
btnama.addEventListener('click', ()=>{
    window.open('https://sistemas.usb.org.br/ama/index.php')
})

// Modal urgências
let modalurgencias = document.querySelector('#fonesurgencias')

modalurgencias.addEventListener('click', ()=>{ 

let bgmodal = document.querySelector('#bgmodal')
bgmodal.classList.add('modalOn')

})

let fecharmodal = document.querySelector('#fecharmodal')
fecharmodal.addEventListener('click', ()=>{

let bgmodal = document.querySelector('#bgmodal')
bgmodal.classList.remove('modalOn')
})

function ramaisList() {
        
    const modalramais = document.querySelector('#modalramais')

    modalramais.classList.add('show_ramais')

}

// Entrevistas
// function plantaoentrevistas() {

    // if (datahoje.getDay() == 0) { 
    //     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Hoje é domingão!'
    // }
    // if (datahoje.getDay() == 1) { 
    //     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Douglas | Daisy'
    // }
    // if (datahoje.getDay() == 2) {
    //     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Jaque | Alexandro'
    // }
    // if (datahoje.getDay() == 3) { 
    //     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Valéria | Carol'
    // }
    // if (datahoje.getDay() == 4) { 
    //     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Camila | Sarita'
    // }
    // if (datahoje.getDay() == 5) { 
    //     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Eula | Malú'
    // }
    // if (datahoje.getDay() == 6) { 
    //     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Feliz Sábado!'
    // }
        // document.querySelector('#plantaoentrevistascontent').innerHTML = 'Em definição...'
// }
