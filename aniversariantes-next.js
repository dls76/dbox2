import { pessoas, mss } from './aniversariantes-data.js';

function adicionarProximosAniversariantes() {
  const container = document.getElementById('divhomeproxaniversariantes');
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // Zera horas para comparação exata

  // Cria uma nova data para o aniversário ajustando o ano
  const aniversariosFuturos = pessoas.map(pessoa => {
    const aniversario = new Date(hoje.getFullYear(), pessoa.mes, pessoa.dia);
    if (aniversario < hoje) aniversario.setFullYear(aniversario.getFullYear() + 1);
    return { ...pessoa, data: aniversario };
  });

  // Ordena e pega os 3 próximos
  const proximos = aniversariosFuturos.sort((a, b) => a.data - b.data).slice(0, 5);

  // Limpa o container
  container.innerHTML = '';

  // Adiciona título
  const titulo = document.createElement('div');
  titulo.classList.add('tituloproximosanivers');
  titulo.innerHTML = 'Próximos Aniversariantes';
  container.appendChild(titulo);

  if (proximos.length > 0) {
    proximos.forEach(aniversariante => {
      const divAniv = document.createElement('div');
      divAniv.classList.add('proximosaniversariantes');

      const divFoto = document.createElement('div');
      divFoto.classList.add('fotoaniv');
      const img = document.createElement('img');
      img.src = aniversariante.foto;
      img.alt = aniversariante.nome;
      divFoto.appendChild(img);

      const nomeExibido = aniversariante.nome.split(' ')[0];

      const divNome = document.createElement('div');
      divNome.classList.add('nome');
      divNome.innerHTML = `${nomeExibido} <span>(${aniversariante.funcao})</span>`;

      const divData = document.createElement('div');
      divData.classList.add('data');

      const dia = aniversariante.dia.toString().padStart(2, '0');
      const mes = (aniversariante.mes + 1).toString().padStart(2, '0');

      const aniversarioHoje = (aniversariante.dia === hoje.getDate() && aniversariante.mes === hoje.getMonth());

      if (aniversarioHoje) {
        divData.textContent = 'Hoje!';
        divData.style.color = 'white';
        divData.style.backgroundColor = '#B52532';
      } else {
        divData.textContent = `${dia}/${mes}`;
      }

      divAniv.appendChild(divFoto);
      divAniv.appendChild(divNome);
      divAniv.appendChild(divData);

      container.appendChild(divAniv);
    });
  } else {
    const semAniversariantes = document.createElement('div');
    semAniversariantes.classList.add('semAniversariantes');
    semAniversariantes.innerHTML = 'Nenhum aniversariante nos próximos dias.';
    container.appendChild(semAniversariantes);
  }

  // Botão "Mais"
  const maisBox = document.createElement('div');
  maisBox.classList.add('maisBox');

  const maisLink = document.createElement('a');
  maisLink.classList.add('mais');
  maisLink.href = 'aniversariantes-list.html';
  maisLink.target = '_blank';
  maisLink.textContent = 'Lista completa';

  maisBox.appendChild(maisLink);
  container.appendChild(maisBox);
}

window.adicionarProximosAniversariantes = adicionarProximosAniversariantes;
window.onload = adicionarProximosAniversariantes;