const ramaiscac = [
  {pessoa: 'Douglas', ramal: '7002'},
  {pessoa: 'Murilo', ramal: '7003'},
  {pessoa: 'Josiane', ramal: '7004'},
  {pessoa: 'Alicia', ramal: '7005'},
  {pessoa: 'Carin', ramal: '7006'},
  {pessoa: 'Isabelly', ramal: '7007'},
  {pessoa: 'Gabriel', ramal: '7008'},
  {pessoa: 'Valéria', ramal: '7009'},
  {pessoa: 'Joyce', ramal: '7010'},
  {pessoa: 'Andressa', ramal: '7011'},
  {pessoa: 'Renata', ramal: '7012'},
  {pessoa: 'Camila', ramal: '7013'},
  {pessoa: 'Jaqueline', ramal: '7014'},
  {pessoa: 'Carol', ramal: '7016'},
  {pessoa: 'Lucas', ramal: '7019'},
  {pessoa: 'Douglas', ramal: '7020'},
  {pessoa: 'Mateus', ramal: '7022'},
  {pessoa: 'Julia', ramal: '7023'},
  {pessoa: 'Vinicius', ramal: '7024'},
  {pessoa: 'João Wesley', ramal: '7025'},
  {pessoa: 'Mônica e Ana', ramal: '7028'},
  {pessoa: 'Cacilda', ramal: '7029'},
  {pessoa: 'Lincon', ramal: '7031'},
  {pessoa: 'Priscila', ramal: '7042'}
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
