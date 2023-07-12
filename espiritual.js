function abrirLinks() {
    var sites = [
        'https://mais.cpb.com.br/licao-adultos/',
        'https://mais.cpb.com.br/meditacoes-diarias/',
        'https://www.bibliaonline.com.br/naa/index',
        'https://reavivadosporsuapalavra.org/', 
    ] 
    for (let i = 0; i < sites.length; i++) {
        window.open(sites[i])
    }
};

let openAllLinks = document.querySelector('#btAbrirLinks')
openAllLinks.addEventListener('click', abrirLinks)

function pedidosOracao() {
    alert('Não disponível no momento')
}

let pedidos = document.querySelector('#pedidosOracao')
pedidos.addEventListener('click', pedidosOracao)

