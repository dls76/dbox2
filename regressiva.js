


const proximosEventos = [
  {nome: 'Capacitação de Professores', data: new Date(2024, 0, 29), link: "https://drive.google.com/drive/folders/1efLap5rz5Yxzak_Wr5F-4ODEwFrff1EH?usp=sharing",},
  {nome: 'Reunião de pais EI-5º', data: new Date(2024, 0, 30), link: "https://drive.google.com/drive/folders/1Xv_eNsvJ5HeBKhStzjo0o3q71Odrzmki?usp=sharing",},
  {nome: 'Reunião de pais novos 6º-EM', data: new Date(2024, 1, 1), link: "https://drive.google.com/drive/folders/1FOtTmkrZ4p3xxqme4Miafh8I8iBtyDeO?usp=sharing",},
  {nome: 'Entrega de materiais', data: new Date(2024, 1, 5), link: "https://drive.google.com/drive/folders/1-GlAccEqzgjwnVNqklVswqOQPVrJNeBJ?usp=sharing",},
  {nome: 'Semana de Acolhimento', data: new Date(2024, 1, 5), link: "https://drive.google.com/drive/folders/1g4pwjYw5j61YuviPKtKI_pMsifAaXy7y?usp=drive_link",},
  {nome: 'Reunião de pais 6º-EM', data: new Date(2024, 1, 5), link: "https://drive.google.com/drive/folders/1hrjh7zi_hFuTFZOOEHmfnE_UZW0UCwj3?usp=sharing",},
  {nome: 'Dia da Mulher', data: new Date(2024, 2, 8), link:"https://drive.google.com/drive/folders/1WGcBJR23u6IXfSmC1WXcG0RUcaCNpfE7?usp=sharing",},
  {nome: 'Reunião Participativa Pais - 1º Bimestre', data: new Date(2024, 2, 18), link:"https://docs.google.com/document/d/10XuzU_aT508nZt3NeaQTS8ID2lZxpNxf5h0eRi4hP2I/edit",},
  {nome: 'Cantatas de Páscoa', data: new Date(2024, 2, 24), link:"https://drive.google.com/drive/folders/1saT3-NGt231soOXGcC6_jgCWiiPRbsS6?usp=drive_link",},
  {nome: 'Semana Santa', data: new Date(2024, 2, 25), link:"https://drive.google.com/drive/folders/1aNfoXjhq_cV3mT5QM4cirQbollpRC2WZ",},
  {nome: 'Retiro Espiritual', data: new Date(2024, 3, 13), link:"https://docs.google.com/spreadsheets/d/1kJg9Qv0M2NpcBZmPnvfI4Joa7cCxP3JE0750Axxzcpc/edit#gid=832496255",},
  {nome: 'Acreditação (postagem)', data: new Date(2024, 3, 26), link:"https://drive.google.com/drive/u/1/folders/138CBruFqXcFV02TVsLXgUfTZ4yrlTqh9",},
  {nome: 'Programa Dia das Mães', data: new Date(2024, 4, 5), link:"https://drive.google.com/drive/folders/1vyONKagq4wUlMKRDGutaHqidhr3WFrbC?usp=drive_link",},
  {nome: "Intercâmbio Internacional", data: new Date(2024, 4, 5), link: "https://docs.google.com/spreadsheets/d/1fszaXuiFUTxFFyIlyPBH5JAJCgAijxE1LJXaxdFa80k/edit#gid=0"},
  {nome: 'Fair Play Conhecimento', data: new Date(2024, 4, 14), link:"https://drive.google.com/drive/folders/1_-Hm088-AikWoHf8ETETAJZmTISF1_Qq?usp=drive_link",},
  {nome: 'Acreditação (presencial)', data: new Date(2024, 4, 22), link:"https://docs.google.com/document/d/14UBtmtTUkg5j-DAx2tQH9REMu76OxzcsyaBWvlsyj6w/edit?usp=sharing",},
  {nome: 'Lançamento de Matrículas Equipe Gestora', data: new Date(2024, 7, 4), link:"https://drive.google.com/drive/folders/1fAj27bIfdN-ZQTvadISFZq9J2H79YaTY?usp=sharing",},
  {nome: 'Programa Dia dos Pais', data: new Date(2024, 7, 18), link:"https://drive.google.com/drive/folders/1l_iYVD7GBGqXRdcaHT21lfocT4yC5DJP?usp=drive_link",},
  {nome: 'Semana de Oração - 2º Semestre', data: new Date(2024, 7, 19), link:"https://drive.google.com/drive/folders/1wTuD_Njt9p-qmFbH07cnNBSAAG38z5ZQ?usp=drive_link",},
  {nome: 'Formaturas 9º e 3ºEM', data: new Date(2024, 11, 15), link:"https://drive.google.com/drive/folders/1JFtpr7N_WGLJnh37ETSgS9EJw-Y3nweu?usp=sharing",},
  {nome: 'Formatura Ed. Infantil', data: new Date(2024, 11, 17), link:"https://drive.google.com/drive/folders/1e8EjN1-wI4VhjStq0h0tCPN5GjRFkdvI?usp=sharing",},
];

const eventosContainer = document.getElementById('nextEventsConteiner');

proximosEventos.forEach((evento) => {
  const a = document.createElement('a');
  a.href = evento.link;
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

  // const responsavel = document.createElement('div');
  // responsavel.classList.add('regressivaevento');
  // responsavel.innerText = evento.resp 

  // Calculate days remaining with time part set to midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const timeDiff = evento.data - today;
  const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // Update content based on days remaining
  if (daysRemaining < -1) {
    regressivaEvento.textContent = `Aconteceu há ${Math.abs(daysRemaining)} dias`;
    dataDiv.classList.add('eventoPassado');
    tituloEvento.style.color = "#D3D3D3"
    regressivaEvento.style.color = "#D3D3D3"
  } else if (daysRemaining === -1) {
    regressivaEvento.textContent = 'Aconteceu há 1 dia';
    dataDiv.classList.add('eventoPassado');
    tituloEvento.style.color = "#D3D3D3"
    regressivaEvento.style.color = "#D3D3D3"
  } else if (daysRemaining === 0) {
    regressivaEvento.textContent = 'É hoje!';
  } else if (daysRemaining === 1) {
    regressivaEvento.textContent = 'Falta 1 dia';
  } else {
    regressivaEvento.textContent = `Faltam ${daysRemaining} dias`;
  }

  infoDiv.appendChild(tituloEvento);
  // infoDiv.appendChild(responsavel)
  infoDiv.appendChild(regressivaEvento);

  a.appendChild(dataDiv);
  a.appendChild(infoDiv);

  eventosContainer.appendChild(a);
});

// Função para rolar até o topo do próximo evento com base na data atual
function scrollToNextEvent() {
  // Encontre a data atual
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  // Encontre o próximo evento com base na data atual
  const proximoEvento = proximosEventos.find(evento => evento.data >= hoje);

  // Certifique-se de que há um próximo evento antes de rolar
  if (proximoEvento) {
    // Encontre todos os elementos com a classe 'nextevent'
    const elementosNextEvent = document.querySelectorAll('.nextevent');

    // Encontre o índice do próximo evento
    const indiceProximoEvento = proximosEventos.indexOf(proximoEvento);

    // Certifique-se de que o índice seja válido antes de rolar
    if (indiceProximoEvento !== -1 && indiceProximoEvento < elementosNextEvent.length) {
      // Encontre o elemento do próximo evento
      const proximoEventoElement = elementosNextEvent[indiceProximoEvento];

      // Calcule a posição do próximo evento em relação ao topo do eventosContainer
      const scrollTopValue = proximoEventoElement.offsetTop;

      // Rola até o topo do próximo evento
      eventosContainer.scrollTop = scrollTopValue;
    }
  }
}

// Chame a função ao carregar a página
window.addEventListener('load', scrollToNextEvent);


// function esmaecerEventosPassados() {

//   const pastEvents = []

//   const currentDate = new Date().getTime()

//   proximosEventos.forEach((e)=>{
//     const dateTarget = e.data.getTime()
//     if (dateTarget <= currentDate) {
//       pastEvents.push(e)
//     }
//   })

//   pastEvents
// }

// window.addEventListener('load', esmaecerEventosPassados)