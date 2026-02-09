const reuniaoadm = [
   { data: new Date(2026, 1, 10), link: 'https://docs.google.com/document/d/1j2hKsZVeyi2v0Lznjt1ixWtrVwYBG3wjgXp7PrPHmg4/edit?usp=sharing', hora: '14h' },    
   { data: new Date(2026, 1, 17), link: 'https://docs.google.com/document/d/1m1ES1qzV_FLTgOWZzCS-oH_epCMpb4tI_DSh4q9E_Ns/edit?usp=sharing', hora: '14h' },    
   { data: new Date(2026, 1, 24), link: 'https://docs.google.com/document/d/1hxxc_u8eRhTgJLXnjESXITSv1C2TKaQPC6zYJt25-98/edit?usp=sharing', hora: '14h' },    
   { data: new Date(2026, 2, 10), link: 'https://docs.google.com/document/d/1oqSfDSO1OkDkku4V_jeziort7HRuzj7KdACOxq9SVvk/edit?usp=sharing', hora: '14h' },    
];

const diaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

window.addEventListener('load', function() {
    proximaReuniaoAdm(reuniaoadm);
});

function proximaReuniaoAdm(array) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalizando a data para evitar problemas com horários

    const futureDates = array.filter(item => {
        const itemDate = new Date(item.data);
        itemDate.setHours(0, 0, 0, 0);
        return itemDate >= today;
    });

    futureDates.sort((a, b) => a.data - b.data);

    const reuniaoAdmElement = document.querySelector('#reuniaoadm');
    const linkElement = document.querySelector('#ralink');
    const linkRapidoraElement = document.querySelector('#linkrapidora');

    if (!reuniaoAdmElement || !linkElement || !linkRapidoraElement) {
        console.error('Elemento não encontrado no DOM.');
        return;
    }

    if (futureDates.length > 0) {
        const proxReuniao = futureDates[0];
        let dia = proxReuniao.data.getDate().toString().padStart(2, '0');
        let mes = (proxReuniao.data.getMonth() + 1).toString().padStart(2, '0');

        reuniaoAdmElement.innerHTML = `${diaDaSemana[proxReuniao.data.getDay()]}, ${dia} de ${mesesDoAno[mes - 1]} - ${proxReuniao.hora}`;
        linkElement.setAttribute("href", proxReuniao.link);
        linkRapidoraElement.setAttribute("href", proxReuniao.link);
    } else {
        reuniaoAdmElement.innerHTML = 'Data e horário a definir';
    }
}

export let plantaosexta = [
  { data: new Date(2026, 1, 6), person: "Murilo", monitoria: "" },
  { data: new Date(2026, 1, 13), person: "Douglas", monitoria: "" },
  { data: new Date(2026, 1, 20), person: "Rocha", monitoria: "" },
  { data: new Date(2026, 1, 27), person: "Josi", monitoria: "" },
  { data: new Date(2026, 2, 6), person: "Carol", monitoria: "" },
  { data: new Date(2026, 2, 13), person: "Jaque", monitoria: "" },
  { data: new Date(2026, 2, 20), person: "Camila", monitoria: "" },
  { data: new Date(2026, 2, 27), person: "Renata", monitoria: "" },
  { data: new Date(2026, 3, 3), person: "Feriado", monitoria: "" },
  { data: new Date(2026, 3, 10), person: "Andressa", monitoria: "" },
  { data: new Date(2026, 3, 17), person: "Joyce", monitoria: "" },
  { data: new Date(2026, 3, 24), person: "Valéria", monitoria: "" },
  { data: new Date(2026, 4, 1), person: "Feriado", monitoria: "" },
  { data: new Date(2026, 4, 8), person: "Carin", monitoria: "" },
  { data: new Date(2026, 4, 15), person: "Fabio", monitoria: "" },
  { data: new Date(2026, 4, 22), person: "Alicia", monitoria: "" },
  { data: new Date(2026, 4, 29), person: "Danylo", monitoria: "" },
  { data: new Date(2026, 5, 5), person: "Recesso", monitoria: "" },
  { data: new Date(2026, 5, 12), person: "Murilo", monitoria: "" },
  { data: new Date(2026, 5, 19), person: "Douglas", monitoria: "" },
  { data: new Date(2026, 5, 26), person: "Fabio", monitoria: "" },
  { data: new Date(2026, 6, 3), person: "Rocha", monitoria: "" },
  { data: new Date(2026, 6, 10), person: "Recesso", monitoria: "" },
  { data: new Date(2026, 6, 17), person: "Recesso", monitoria: "" },
  { data: new Date(2026, 6, 24), person: "Josi", monitoria: "" },
  { data: new Date(2026, 6, 31), person: "Carol", monitoria: "" },
];



// export let plantao19h = [
//     { data: new Date(2025, 7, 2), tour: "Priscila", financeiro: "Josi", entrevista: "Andressa", secretaria: "Carin"},
//     { data: new Date(2025, 8, 4), tour: "Priscila", financeiro: "Alícia", entrevista: "Murilo", secretaria: "Isa"},
//     { data: new Date(2025, 8, 11), tour: "Priscila", financeiro: "Josi", entrevista: "Renata", secretaria: "Gabriel"},
//     { data: new Date(2025, 8, 18), tour: "Priscila", financeiro: "Alícia", entrevista: "Jaque", secretaria: "Carin"},
//     { data: new Date(2025, 8, 25), tour: "Priscila", financeiro: "Alícia", entrevista: "Valéria", secretaria: "Gabriel"},
//     { data: new Date(2025, 9, 2), tour: "Priscila", financeiro: "Alícia", entrevista: "Joyce", secretaria: "Carin"},
//     { data: new Date(2025, 9, 9), tour: "Priscila", financeiro: "Alícia", entrevista: "Joyce", secretaria: "Carin"},
//     { data: new Date(2025, 9, 16), tour: "Priscila", financeiro: "Alícia", entrevista: "Diretor", secretaria: "Gabriel"},
//     { data: new Date(2025, 9, 23), tour: "Priscila", financeiro: "Alícia", entrevista: "Carol", secretaria: "Carin"},
//     { data: new Date(2025, 9, 30), tour: "Priscila", financeiro: "Alícia", entrevista: "Andressa", secretaria: "Isa"},
//     { data: new Date(2025, 10, 6), tour: "Priscila", financeiro: "Alícia", entrevista: "Murilo", secretaria: "Gabriel"},
//     { data: new Date(2025, 10, 13), tour: "Priscila", financeiro: "Alícia", entrevista: "Renata", secretaria: "Carin"},
//     { data: new Date(2025, 10, 20), tour: "Priscila", financeiro: "Alícia", entrevista: "Jaque", secretaria: "Isa"},
//     { data: new Date(2025, 10, 27), tour: "Priscila", financeiro: "Alícia", entrevista: "Valéria", secretaria: "Gabriel"},
//     { data: new Date(2025, 11, 4), tour: "Priscila", financeiro: "Alícia", entrevista: "Joyce", secretaria: "Carin"},
//     { data: new Date(2025, 11, 11), tour: "Priscila", financeiro: "Alícia", entrevista: "Camila", secretaria: "Isa"}
// ];

const entrevistas = ["Jaque e Carol", "Valéria e Pr. Vini", "Murilo e Joice", "Diretor e Andressa", "Renata e Camila"]



export const entrevistacontent = document.getElementById("entrevistascontent");

if (entrevistacontent) { 
  const dataDeHoje = new Date().getDay(); 
  // 0 = domingo, 1 = segunda, ..., 6 = sábado

  let mensagem = "";

  if (dataDeHoje >= 1 && dataDeHoje <= 5) {
    // segunda a sexta -> pega o índice do array (segunda=0,... sexta=4)
    mensagem = entrevistas[dataDeHoje - 1];
  } else if (dataDeHoje === 6) {
    mensagem = "Feliz Sábado!";
  } else {
    mensagem = "Hoje é domingo";
  }
  entrevistacontent.textContent = mensagem;
}

// Motivos de Oração
const motivoOracao = document.querySelector('#motivoOracao')

if (motivoOracao) {

const diaAtual = new Date().getDay()

if (diaAtual == 0) {
motivoOracao.innerHTML = 'Hoje é domingo'
} else if (diaAtual == 1) {
motivoOracao.innerHTML = 'Espírito Santo'
} else if (diaAtual == 2) {
motivoOracao.innerHTML = 'Missão'
} else if (diaAtual == 3) {
motivoOracao.innerHTML = 'Sabedoria'
} else if (diaAtual == 4) {
motivoOracao.innerHTML = 'Saúde'
} else if (diaAtual == 5) {
motivoOracao.innerHTML = 'Matrículas'
} else if (diaAtual == 6) {
motivoOracao.innerHTML = 'Feliz Sábado'
}
}
function motivoDeOracao() {
    document.getElementById("motivoDeOracao").addEventListener("click", function(event) {
    event.preventDefault(); // impede o link de recarregar a página
    alert("Você clicou no link!");
  });
}