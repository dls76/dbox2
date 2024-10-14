let datahoje = new Date();

window.addEventListener("load", cultos);
window.addEventListener("load", compensacao);
// window.addEventListener('load', plantaoDiario)
window.addEventListener("load", mostrarEscalaDeOracao);

// Cultos
function cultos() {
  if (datahoje.getDay() == 0) {
    document.querySelector("#cultos").innerHTML = "Hoje é domingo!";
  }
  if (datahoje.getDay() == 1) {
    if (datahoje.getDate() == 14) {
      document.querySelector("#cultos").innerHTML = "Recesso";
    } else {
      document.querySelector("#cultos").innerHTML = "Alexandro";
    }
  }
  if (datahoje.getDay() == 2) {
    if (datahoje.getDate() == 15) {
      document.querySelector("#cultos").innerHTML = "Feriado";
    } else {
      document.querySelector("#cultos").innerHTML = "Pr. Vinícius";
    }
  }
  if (datahoje.getDay() == 3) {
    document.querySelector("#cultos").innerHTML = "Pr. Leonardo";
  }
  if (datahoje.getDay() == 4) {
    if (datahoje.getDate() == 10) {
      document.querySelector("#cultos").innerHTML = "Pr. Vinícius";
    }
    if (datahoje.getDate() == 17) {
      document.querySelector("#cultos").innerHTML =
        "7h Jaque" + " | " + "10h Malu" + " | " + "13h Valéria";
    }
    // if ( datahoje.getDate() == 15) {
    //     document.querySelector('#cultos').innerHTML = '7h Andressa' + ' | ' + '10h Jairo' + ' | ' + '13h Drica'
    // }
    if (datahoje.getDate() == 24) {
      document.querySelector("#cultos").innerHTML =
        "7h Andressa" + " | " + "10h Nailson" + " | " + "13h Drika";
    }
    if (datahoje.getDate() == 31) {
      document.querySelector("#cultos").innerHTML =
        "7h Jhéssica" + " | " + "10h Pr. Vinícius" + " | " + "13h Allan";
    }
  }
  if (datahoje.getDay() == 5) {
    document.querySelector("#cultos").innerHTML = "Douglas";
  }
  if (datahoje.getDay() == 6) {
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

//Plantão Diário
function plantaoDiario() {
  // domingo
  if (datahoje.getDay() == 0) {
    document.querySelector("#plantaodiario").innerHTML = "Hoje é domingo!";
  }
  // segunda
  if (datahoje.getDay() == 1) {
    document.querySelector("#plantaodiario").innerHTML =
      "Hoje: Carol | Nailson*";
  }
  // terça
  if (datahoje.getDay() == 2) {
    document.querySelector("#plantaodiario").innerHTML =
      "Hoje: Alexandro | Jaque";
  }
  // quarta
  if (datahoje.getDay() == 3) {
    document.querySelector("#plantaodiario").innerHTML =
      "Hoje: Renata | Valéria";
  }
  // quinta
  if (datahoje.getDay() == 4) {
    document.querySelector("#plantaodiario").innerHTML = "Hoje: Malú | Douglas";
  }
  // sexta
  if (datahoje.getDay() == 5) {
    document.querySelector("#plantaodiario").innerHTML =
      "Hoje: Andressa | Camila";
  }
  // sábado
  if (datahoje.getDay() == 6) {
    document.querySelector("#plantaodiario").innerHTML = "Feliz Sábado!";
  }
}

function compensacao() {

  const isFeriado = true;
  const dataHoje = new Date();
  const diaSemana = dataHoje.getDay();

  const nomesPorDia = [
    "Hoje é domingo!",
    "Pr. Vinícius (M)",
    "Douglas (T)",
    "Jaqueline e Camila (M), Andressa e Carin (T)",
    "Valéria (M), Renata (T)",
    "Malu (M), Ale, Josi e Carol (T)",
    "Feliz Sábado!",
  ];

  const elementoNome = document.querySelector("#nomescomp");

  if (isFeriado) {
    elementoNome.innerHTML = "Semana com feriado";
  } else {
    elementoNome.innerHTML = nomesPorDia[diaSemana];
  }
}

// Última escala
window.addEventListener("load", arredondarBordasInferiores);
function arredondarBordasInferiores() {
  // const pai = document.querySelector('#conteinerescalas')
  const divescalas = document.querySelectorAll(".escala");
  const escalas = Array.from(divescalas);
  const ultimaescala = escalas.length - 1;
  const uesc = escalas[ultimaescala];
  uesc.style.borderRadius = "0 0 12px 12px";
  uesc.style.flexGrow = "1";
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
