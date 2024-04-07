    const ramaiscac = [
        {pessoa: 'Alexandro', ramal: '7003'},
        {pessoa: 'Cacilda', ramal: '7029'},
        {pessoa: 'Camila', ramal: '7013'},
        {pessoa: 'Carin', ramal: '7006'},
        {pessoa: 'Carol', ramal: '7016'},
        {pessoa: 'Daisy', ramal: '7042'},
        {pessoa: 'Diretor', ramal: '7002'},
        {pessoa: 'Eloiza', ramal: '7023'},
        {pessoa: 'Eula', ramal: '7011'},
        {pessoa: 'Jaque', ramal: '7014'},
        {pessoa: 'Josiane', ramal: '7004'},
        {pessoa: 'Júlia', ramal: '7007'},
        {pessoa: 'Malú', ramal: '7010'},
        {pessoa: 'Marcio', ramal: '7025'},
        {pessoa: 'Mônica/Thayse', ramal: '7028'},
        {pessoa: 'Nailson', ramal: '7019'},
        {pessoa: 'Pedrina', ramal: '7035'},
        {pessoa: 'Professores', ramal: '7021'},
        {pessoa: 'Sandriny', ramal: '7031'},
        {pessoa: 'Sarita', ramal: '7012'},
        {pessoa: 'Stephany', ramal: '7022'},
        {pessoa: 'Valéria', ramal: '7009'},
        {pessoa: 'Vinícius', ramal: '7024'},
    ]

    for ( let i = 0; i < ramaiscac.length; i++ ) {

        let ui = document.querySelector('#ulramais')

        const li = document.createElement('li')

        li.classList.add('liramais')

        li.innerHTML = ramaiscac[i].pessoa + ' - ' + ramaiscac[i].ramal

        const listaramais = [...document.querySelectorAll('.liramais')]

        // ui.appendChild(li)

    }             

    
const btRamaisMenu = document.querySelector('#ramais-do-menu')
    btRamaisMenu.addEventListener('click', ()=>{
        window.open('ramais.html')
})
    