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
function oracaopelasescolas() {

    if (datahoje.getDay() == 0) { 
        document.querySelector('#escolasparaorar').innerHTML = 'Hoje é domingão!'
    }
    if (datahoje.getDay() == 1) { 
        document.querySelector('#escolasparaorar').innerHTML = 'CAFRG e CAAP'
    }
    if (datahoje.getDay() == 2) {
        document.querySelector('#escolasparaorar').innerHTML = 'CAAB e CCABR'
    }
    if (datahoje.getDay() == 3) { 
        document.querySelector('#escolasparaorar').innerHTML = 'CAPI e CAPGUÁ'
    }
    if (datahoje.getDay() == 4) { 
        document.querySelector('#escolasparaorar').innerHTML = 'CASJP e EAUV'
    }
    if (datahoje.getDay() == 5) { 
        document.querySelector('#escolasparaorar').innerHTML = 'CAC e Departamento'
    }
    if (datahoje.getDay() == 6) { 
        document.querySelector('#escolasparaorar').innerHTML = 'Feliz Sábado!'
    }

}