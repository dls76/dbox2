let datahoje = new Date()

window.addEventListener('load', cultos)
// window.addEventListener('load', plantaoentrevistas)
window.addEventListener('load', plantaoDiarioCompensacao)

// Cultos
function cultos() {

    // if (datahoje.getDay() == 0) {
    //     document.querySelector('#cultos').innerHTML = "Hoje é domingão!"
    // }

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

        if ( datahoje.getDate() == 7) {
            document.querySelector('#cultos').innerHTML = '7h ???' + ' | ' + '10h15 ???' + ' | ' + '13h ???' 
        }
        if ( datahoje.getDate() == 14) {
            document.querySelector('#cultos').innerHTML = '7h ???' + ' | ' + '10h15 ???' + ' | ' + '13h ???' 
        }
        if ( datahoje.getDate() == 21) {
            document.querySelector('#cultos').innerHTML = '7h ???' + ' | ' + '10h15 ???' + ' | ' + '13h ???' 
        }
        if ( datahoje.getDate() == 28) {
            document.querySelector('#cultos').innerHTML = '7h ???' + ' | ' + '10h15 ???' + ' | ' + '13h ???' 
        }
    }
    if (datahoje.getDay() == 5) {
        document.querySelector('#cultos').innerHTML = 'Douglas'
    }
    if (datahoje.getDay() == 6) {
        document.querySelector('#cultos').innerHTML = 'Feliz Sábado!'
    }
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


//===== Compensação e Plantão Diário
function plantaoDiarioCompensacao() {

    // domingo
    if (datahoje.getDay() == 0) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje é domingo'
        document.querySelector('#nomescomp').innerHTML = 'Curta sua manhã!'
        document.querySelector('#nomescompTarde').innerHTML = 'Curta sua tarde!'
    }    
    // segunda
    if (datahoje.getDay() == 1) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje: Josi'
        document.querySelector('#nomescomp').innerHTML = 'Pr. Vinícius'
    }
    // terça
    if (datahoje.getDay() == 2) {
        document.querySelector('#plantaodiario').innerHTML = 'Hoje: Alexandro'
        document.querySelector('#nomescomp').innerHTML = 'Ninguém'
        document.querySelector('#nomescompTarde').innerHTML = 'Nailson'
    }
    // quarta
    if (datahoje.getDay() == 3) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje: Nailson'
        document.querySelector('#nomescomp').innerHTML = 'Jaque Camila'
        document.querySelector('#nomescompTarde').innerHTML = 'Andressa'
    }
    // quinta
    if (datahoje.getDay() == 4) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje: Douglas'
        document.querySelector('#nomescomp').innerHTML = 'Ninguém'
        document.querySelector('#nomescompTarde').innerHTML = 'Valéria Sarita'
    }
    // sexta
    if (datahoje.getDay() == 5) { 
        document.querySelector('#plantaodiario').innerHTML = 'Hoje: ver plantão de sexta'
        document.querySelector('#nomescomp').innerHTML = 'Malu'
        document.querySelector('#nomescompTarde').innerHTML = 'Alexandro Josi Carol'
    }
    // sábado
    if (datahoje.getDay() == 6) { 
        document.querySelector('#plantaodiario').innerHTML = 'Feliz Sábado!'
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

// Novo atendimento
// const btnovoatendimento = document.querySelector('#botaonovoatendimento')
// btnovoatendimento.addEventListener('click', ()=>{
//     window.open("https://dls76.github.io/matriculasDbox/")
// })

// Ramais telefonicos
// let ramais = document.querySelector('#ramais')
// ramais.addEventListener('click', ramaisList)

function ramaisList() {
        
    const modalramais = document.querySelector('#modalramais')

    modalramais.classList.add('show_ramais')

}
// let fechar_ramais = document.querySelector('#fechar_ramais')
// fechar_ramais.addEventListener('click', fecharRamais)
// function fecharRamais() {
//     const modalramais = document.querySelector('#modalramais')
//     modalramais.classList.remove('show_ramais')
// }