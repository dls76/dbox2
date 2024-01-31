window.addEventListener("load", function() {

  const proximosEventos = [
    { nome: "Capacitação de professores", data: new Date(2024, 0, 29) },
    { nome: "Reunião de pais EI-FI", data: new Date(2024, 0, 30) },
    { nome: "Reunião de pais novos FII-EM", data: new Date(2024, 1, 1) },
    // { nome: "Entrega de Materiais", data: },
    // { nome: "Primeiro dia de FII-EM", data: },
    // { nome: "Reunião de pais de FII-EM", data: },
    // { nome: "Primeiro dia de EI-FI", data: },
  ];

  const eventosContainer = document.getElementById('eventos-container');

  proximosEventos.forEach(evento => {
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
    // Assuming you have an array of month names
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

  const regressivaEventos = [...document.querySelectorAll('.regressivaevento')];

  function countdown() {
    let now = new Date();

    proximosEventos.forEach((evento, index) => {
      let eventDate = evento.data;
      eventDate.setHours(23, 59, 59, 999);

      let currentTime = now.getTime();
      let eventTime = eventDate.getTime();

      let remTime = eventTime - currentTime;

      let d = Math.floor(remTime / (1000 * 60 * 60 * 24));

      if (d == 0) {
        regressivaEventos[index].innerHTML = `É hoje!`;
      } else if (d === 1) {
        regressivaEventos[index].innerHTML = `Falta ${d} dia`;
      } else if (d > 1) {
        regressivaEventos[index].innerHTML = `Faltam ${d} dias`;
      } else {
        regressivaEventos[index].innerHTML = `Aconteceu há ${d * -1} dia(s)`;
      }
    });

    setTimeout(countdown, 1000);
  }

  // Inicializar a contagem regressiva
  countdown();
});