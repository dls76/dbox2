// document.addEventListener('DOMContentLoaded', function() {
    
//     let openAllLinks = document.querySelector('#btAbrirLinks')
//     openAllLinks.addEventListener('click', abrirLinks)
    
//     let pedidos = document.querySelector('#pedidosOracao')
//     pedidos.addEventListener('click', pedidosOracao)
    
//     function abrirLinks() {
//         var sites = [
//             'https://mais.cpb.com.br/licao-adultos/',
//             'https://mais.cpb.com.br/meditacoes-diarias/',
//             'https://www.bibliaonline.com.br/',
//             'https://reavivadosporsuapalavra.org/', 
//         ] 
//         for (let i = 0; i < sites.length; i++) {
//             window.open(sites[i])
//         }
//     };
    
//     function pedidosOracao() {
//         alert('Não disponível no momento')
//     } 
// });

// Oração
window.addEventListener('load', oracaopelasescolas)

let hoje = new Date().getDay()
let msg = "Hoje estamos orando por "
function oracaopelasescolas() {

    if (hoje == 0) { 
        document.querySelector('#escaladeoracao').innerHTML = 'Hoje é domingão!'
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