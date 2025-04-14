const ramaiscac = [
    {pessoa: 'Cacilda', ramal: '7029'}, 
    {pessoa: 'Camila', ramal: '7013'},
    {pessoa: 'Carin', ramal: '7006'}, 
    {pessoa: 'Carol', ramal: '7016'},
    {pessoa: 'Matrículas', ramal: '7042'}, 
    {pessoa: 'Diretor', ramal: '7002'},
    {pessoa: 'Isa', ramal: '7023'}, 
    {pessoa: 'Renata', ramal: '7011'},
    {pessoa: 'Jaque', ramal: '7014'}, 
    {pessoa: 'Josiane', ramal: '7004'},
    {pessoa: 'Gabriel', ramal: '7007'}, 
    {pessoa: 'Malú', ramal: '7010'},
    {pessoa: 'Marcio', ramal: '7025'}, 
    {pessoa: 'Mônica/Ana Paula', ramal: '7028'},
    {pessoa: 'Murilo', ramal: '7003'}, 
    {pessoa: 'Nailson', ramal: '7019'},
    {pessoa: 'Alícia', ramal: '7035'}, 
    {pessoa: 'Professores', ramal: '7021'},
    {pessoa: 'Lincon', ramal: '7031'}, 
    {pessoa: 'Andressa', ramal: '7012'},
    {pessoa: 'Kaori', ramal: '7022'}, 
    {pessoa: 'Valéria', ramal: '7009'},
    {pessoa: 'Vinícius', ramal: '7024'}
];

// Ordena por nome
ramaiscac.sort((a, b) => a.pessoa.localeCompare(b.pessoa, 'pt-BR'));

const btRamaisMenu = document.querySelector('#ramais-do-menu');
const modal = document.querySelector('#modalRamais');
const modalContent = document.querySelector('#modalContent');
const fechar = document.querySelector('#fecharModal');
const ul = document.querySelector('#ulramais');

// Cria lista
ramaiscac.forEach(({ pessoa, ramal }) => {
const li = document.createElement('li');
li.innerHTML = `<span>${pessoa}</span><strong>${ramal}</strong>`;
ul.appendChild(li);
});

// Abre modal
btRamaisMenu.addEventListener('click', () => {
modal.style.display = 'flex';
});

// Fecha ao clicar no botão
fechar.addEventListener('click', () => {
modal.style.display = 'none';
});

// Fecha ao clicar fora do modal-content
modal.addEventListener('click', (e) => {
if (!modalContent.contains(e.target)) {
modal.style.display = 'none';
}
});
