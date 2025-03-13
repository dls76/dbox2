let datahoje = new Date();

window.addEventListener("load", cultos);
window.addEventListener("load", compensacao);
window.addEventListener("load", escalaDeEntrevistas);

// Cultos
function cultos() {
  const dataAtual = new Date();
  let responsavelCulto = "Sem informação";

  switch (dataAtual.getDay()) {
    case 0:
      responsavelCulto = "Hoje é domingo!";
      break;
    case 1:
      responsavelCulto = "Murilo";
      break;
    case 2:
      responsavelCulto = "Pr. Vinícius";
      break;
    case 3:
      responsavelCulto = "Douglas";
      break;
    case 4:
      const agendaQuinta = {
        6: "7h Andressa | 10h Nailson | 13h Malu",
        13: "7h Jaque | 10h Valéria | 13h Drika",
        20: "7h Carol | 10h Renata | 13h Jhessica",
        27: "7h Marcio | 10h Nailson | Ana Prado",
      };
      responsavelCulto = agendaQuinta[dataAtual.getDate()] || responsavelCulto;
      break;
    case 5:
      responsavelCulto = "Pr. Leonardo";
      break;
    case 6:
      responsavelCulto = "Feliz Sábado!";
      break;
  }

  document.querySelector("#cultos").innerHTML = responsavelCulto;
}

//Entrevistas
function escalaDeEntrevistas() {
  const hoje = new Date();
  const diaDaSemana = hoje.getDay();
  const ferias = false;
  const feriadoRecesso = false;

  const plantao = [
    "Hoje é domingo!",
    "Carol(M) | Jaque(T)",
    "Murilo(M) | Sila(T)",
    "Renata(M) | Malú(T)",
    "Valéria(M) | Douglas(T)",
    "Andressa(M) | Camila(T)",
    "Feliz Sábado!",
  ];

  // Verifica se é feriado ou recesso
  if (ferias) {
    document.querySelector("#plantaodiario").innerHTML = "Férias";
  } else if (feriadoRecesso) {
    document.querySelector("#plantaodiario").innerHTML = "Feriado/recesso";
  } else {
    document.querySelector("#plantaodiario").innerHTML = plantao[diaDaSemana];
  }
}

function compensacao() {
  const dataHoje = new Date();
  const diaSemana = dataHoje.getDay();

  const isFeriado = false;
  const isFirstOrLast = false;
  const isVacation = false;

  const nomesPorDia = [
    "Hoje é domingo!",
    "Pr. Vinícius (M)",
    "Sem compensações hoje",
    "Jaque,Camila/Andressa,Carin,Nailson",
    "Valéria (M), Renata (T)",
    "Malu, Douglas (M), Josi, Carol (T)",
    "Feliz Sábado!",
  ];

  const elementoNome = document.querySelector("#nomescomp");

  if (isFeriado) {
    elementoNome.innerHTML = "Semana com feriado";
  } else if (isFirstOrLast) {
    elementoNome.innerHTML = "Primeira/última semana";
  } else if (isVacation) {
    elementoNome.innerHTML = "Férias";
  } else {
    elementoNome.innerHTML = nomesPorDia[diaSemana];
  }

  // if (diaSemana === 3) {
  //   elementoNome.style.fontSize = "10px";
  // }

}

// Última escala
window.addEventListener("load", arredondarBordasInferiores);
function arredondarBordasInferiores() {
  const divescalas = document.querySelectorAll(".escala");
  const escalas = Array.from(divescalas);
  const ultimaescala = escalas.length - 1;
  const uesc = escalas[ultimaescala];
  // uesc.style.borderRadius = "0 0 12px 12px";
  uesc.style.borderBottom = "none";
  uesc.style.boxShadow = "none";
  // uesc.style.flexGrow = "1";
}

// AMA
// const btnama = document.querySelector("#bt-ama");
// btnama.addEventListener("click", () => {
//   window.open("https://sistemas.usb.org.br/ama/index.php");
// });

function ramaisList() {
  const modalramais = document.querySelector("#modalramais");
  modalramais.classList.add("show_ramais");
}

document.querySelector('#bt-compras').addEventListener('click', function(event) {
  event.preventDefault(); // Impede que o <a> tente seguir o href="#"
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSdC0vb83SeBrHw-uYLmU_bNQaZX50nhl1ewGuRU1OUls96nfw/viewform", "_blank");
});

document.querySelector('#bt-investimentos').addEventListener('click', function(event) {
  event.preventDefault(); // Impede que o <a> tente seguir o href="#"
  window.open("https://docs.google.com/spreadsheets/d/1sIpNNR8-OwM3wvFjYwrROTtSpL2Jxm2eI4hWECsVXWk/edit?gid=0#gid=0", "_blank");
});