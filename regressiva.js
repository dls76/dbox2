const eventosContainer = document.getElementById('nextEventsConteiner');

proximosEventos.forEach((evento) => {
  const a = document.createElement('a');
  a.href = ''; // Add the appropriate link
  a.target = '_blank';
  a.classList.add('nextevent');

  const dataDiv = document.createElement('div');
  dataDiv.classList.add('datadoevento');

  const diaEvento = document.createElement('div');
  diaEvento.classList.add('diadoevento');
  diaEvento.textContent = evento.data.getDate();

  const mesEvento = document.createElement('div');
  mesEvento.classList.add('mesdoevento');
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  mesEvento.textContent = meses[evento.data.getMonth()];

  dataDiv.appendChild(diaEvento);
  dataDiv.appendChild(mesEvento);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('infodoevento');

  const tituloEvento = document.createElement('div');
  tituloEvento.classList.add('titulodoevento');
  tituloEvento.textContent = evento.nome;

  const regressivaEvento = document.createElement('div');
  regressivaEvento.classList.add('regressivaevento');

  infoDiv.appendChild(tituloEvento);
  infoDiv.appendChild(regressivaEvento);

  a.appendChild(dataDiv);
  a.appendChild(infoDiv);

  eventosContainer.appendChild(a);
});