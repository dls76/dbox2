let datahoje = new Date();

window.addEventListener("load", cultos);
window.addEventListener("load", compensacao);
window.addEventListener('load', escalaDeEntrevistas)
window.addEventListener("load", mostrarEscalaDeOracao);

// Cultos
function cultos() {

  const dataAtual = new Date()

  if (dataAtual.getDay() == 0) {
    document.querySelector("#cultos").innerHTML = "Hoje é domingo!";
  }
  if (dataAtual.getDay() == 1) {
      document.querySelector("#cultos").innerHTML = "Alexandro";
  }
  if (dataAtual.getDay() == 2) {
      document.querySelector("#cultos").innerHTML = "Pr. Vinícius";
  }
  if (dataAtual.getDay() == 3) {
    if (dataAtual.getDate() == 20) {
      document.querySelector("#cultos").innerHTML = "Feriado";
    } else {
      document.querySelector("#cultos").innerHTML = "Pr. Leonardo";
    }
  } 
  if (dataAtual.getDay() == 4) {

    if (dataAtual.getDate() == 7) {
      document.querySelector("#cultos").innerHTML =
        "7h Andressa" + " | " + "10h Nailson" + " | " + "13h Márcio";
    }
    if (dataAtual.getDate() == 14) {
      document.querySelector("#cultos").innerHTML =
        "7h Jaque" + " | " + "10h Valéria" + " | " + "13h Drika";
    }
    if (dataAtual.getDate() == 21) {
      document.querySelector("#cultos").innerHTML =
        "7h Carol" + " | " + "10h Renata" + " | " + "13h Jhéssica";
    }
    if (dataAtual.getDate() == 28) {
      document.querySelector("#cultos").innerHTML =
        "7h Carol" + " | " + "10h Malu" + " | " + "Ana Prado";
    }
  }
  
  if (dataAtual.getDay() == 5) {
    if (dataAtual.getDate() == 15) {
      document.querySelector('#cultos').innerHTML = "Feriado"
    } else { 
    document.querySelector("#cultos").innerHTML = "Douglas";
    }
  }
  if (dataAtual.getDay() == 6) {
    document.querySelector("#cultos").innerHTML = "Feliz Sábado!";
  }
}

//Oração
function mostrarEscalaDeOracao() {
  if (datahoje.getDay() == 0) {
    document.querySelector("#contentoracao").innerHTML = "Hoje é domingo!";
  }
  if (datahoje.getDay() == 1) {
    document.querySelector("#contentoracao").innerHTML =
      "Fazenda e Afonso Pena";
  }
  if (datahoje.getDay() == 2) {
    document.querySelector("#contentoracao").innerHTML =
      "Alto Boqueirão e Bom Retiro";
  }
  if (datahoje.getDay() == 3) {
    document.querySelector("#contentoracao").innerHTML = "Pinhais e Paranaguá";
  }
  if (datahoje.getDay() == 4) {
    document.querySelector("#contentoracao").innerHTML = "São José e União";
  }
  if (datahoje.getDay() == 5) {
    document.querySelector("#contentoracao").innerHTML =
      "Centenário e Departamento";
  }
  if (datahoje.getDay() == 6) {
    document.querySelector("#contentoracao").innerHTML = "Feliz Sábado!";
  }
}

//Entrevistas
function escalaDeEntrevistas() {
  const hoje = new Date()
  const diaDaSemana = hoje.getDay()
  const ferias = false
  const feriadoRecesso = false

  // const plantao = [
  //   "Hoje é domingo!",
  //   "Carol(M) | Nailson(T)",
  //   "Alexandro(M) | Jaque(T)",
  //   "Renata(M) | Malú(T)",
  //   "Valéria(M) | Douglas(T)",
  //   "Andressa(M) | Camila(T)",
  //   "Feliz Sábado!"
  // ];

  const plantao = [
    "Hoje é domingo!",
    "Alexandro",
    "Alexandro",
    "Alexandro",
    "Alexandro",
    "Alexandro",
    "Feliz Sábado!"
  ];

  // Verifica se é feriado ou recesso
  if (ferias) {
    document.querySelector("#plantaodiario").innerHTML = "Férias"
  } else if (feriadoRecesso) {
    document.querySelector('#plantaodiario').innerHTML = "Feriado/recesso"
  } else {
    document.querySelector("#plantaodiario").innerHTML = plantao[diaDaSemana];
  }
}


function compensacao() {

  const isFeriado = false;
  const dataHoje = new Date();
  const diaSemana = dataHoje.getDay();
  const isFirstOrLast = false;
  const isVacation = true;

  const nomesPorDia = [
    "Hoje é domingo!",
    "Pr. Vinícius (M)",
    "Douglas (T)",
    "Jaque, Camila (M), Andressa, Carin (T)",
    "Valéria (M), Renata (T)",
    "Malu (M), Ale, Josi e Carol (T)",
    "Feliz Sábado!",
  ];

  const elementoNome = document.querySelector("#nomescomp");

  if (isFeriado) {
    elementoNome.innerHTML = "Semana com feriado";
  } else if (isFirstOrLast) {
    elementoNome.innerHTML = "Primeira/última semana"
  } else if (isVacation) {
    elementoNome.innerHTML = "Férias"
  } else {
    elementoNome.innerHTML = nomesPorDia[diaSemana];
  }
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
const btnama = document.querySelector("#bt-ama");
btnama.addEventListener("click", () => {
  window.open("https://sistemas.usb.org.br/ama/index.php");
});

// Modal urgências
let modalurgencias = document.querySelector("#fonesurgencias");

modalurgencias.addEventListener("click", () => {
  let bgmodal = document.querySelector("#bgmodal");
  bgmodal.classList.add("modalOn");
});

let fecharmodal = document.querySelector("#fecharmodal");
fecharmodal.addEventListener("click", () => {
  let bgmodal = document.querySelector("#bgmodal");
  bgmodal.classList.remove("modalOn");
});

function ramaisList() {
  const modalramais = document.querySelector("#modalramais");

  modalramais.classList.add("show_ramais");
}

// Entrevistas
// function plantaoentrevistas() {

// if (datahoje.getDay() == 0) {
//     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Hoje é domingão!'
// }
// if (datahoje.getDay() == 1) {
//     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Douglas | Daisy'
// }
// if (datahoje.getDay() == 2) {
//     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Jaque | Alexandro'
// }
// if (datahoje.getDay() == 3) {
//     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Valéria | Carol'
// }
// if (datahoje.getDay() == 4) {
//     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Camila | Sarita'
// }
// if (datahoje.getDay() == 5) {
//     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Eula | Malú'
// }
// if (datahoje.getDay() == 6) {
//     document.querySelector('#plantaoentrevistascontent').innerHTML = 'Feliz Sábado!'
// }
// document.querySelector('#plantaoentrevistascontent').innerHTML = 'Em definição...'
// }
