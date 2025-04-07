export const nomes = {
    1: "Vice",        // Segunda
    2: "Pr.Vini", // Terça
    3: "Dire",      // Quarta
    4: "Arisson",  // Quinta
    5: "Pr.Leo"  // Sexta
  };
  
  export const substituicoes = {
    "2025-04-10": "Pr.Aris",
    // "2025-04-17": "Convidado",
    // "2025-04-24": "Convidado"
  };
  
  export function getDataAtual() {
    return new Date(2025, 3, 10);
  }
  
  export const horarios = ["7", "10", "13"];
  export const diasUteis = [1, 2, 3, 4, 5];
  export const diasSemanaAbrev = ["Seg", "Ter", "Qua", "Qui", "Sex"];
  
  export function montarCalendario(dataAtual) {
    const calendario = document.getElementById("calendario");
    const mesAno = document.getElementById("mesAno");
    calendario.innerHTML = "";
  
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
  
    mesAno.textContent = `${primeiroDia.toLocaleString("pt-BR", { month: "long" })} de ${ano}`;
  
    diasSemanaAbrev.forEach(dia => {
      const div = document.createElement("div");
      div.className = "day-name";
      div.textContent = dia;
      calendario.appendChild(div);
    });
  
    const diaSemanaPrimeiro = primeiroDia.getDay();
    let offset = 0;
    if (diaSemanaPrimeiro === 0) offset = 1;
    else if (diaSemanaPrimeiro > 1) offset = diaSemanaPrimeiro - 1;
  
    for (let i = 0; i < offset; i++) {
      const div = document.createElement("div");
      div.className = "day";
      div.style.visibility = "hidden";
      calendario.appendChild(div);
    }
  
    let diaCorrente = new Date(primeiroDia);
    while (diaCorrente <= ultimoDia) {
      const diaSemana = diaCorrente.getDay();
  
      if (diasUteis.includes(diaSemana)) {
        const div = document.createElement("div");
        div.className = "day";
  
        const hoje = getDataAtual()
        if (
          diaCorrente.getDate() === hoje.getDate() &&
          diaCorrente.getMonth() === hoje.getMonth() &&
          diaCorrente.getFullYear() === hoje.getFullYear()
        ) {
          div.classList.add("today");
        }
  
        const chave = diaCorrente.toISOString().split("T")[0];
        let responsavel = substituicoes[chave] || nomes[diaSemana];
  
        div.innerHTML = `<strong>${diaCorrente.getDate()}</strong>`;
  
        horarios.forEach(hora => {
          div.innerHTML += `<div class="culto" data-nome="${responsavel}">${hora} - ${responsavel}</div>`;
        });
  
        calendario.appendChild(div);
      }
  
      diaCorrente.setDate(diaCorrente.getDate() + 1);
    }
  }
  
  export function mudarMes(dataAtual, direcao) {
    dataAtual.setMonth(dataAtual.getMonth() + direcao);
    montarCalendario(dataAtual);
  }
  