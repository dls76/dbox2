export const responsaveisHino = (() => {
  // Configurações de período
  const startDate = new Date(2026, 1, 13);  // 13 de fevereiro de 2026
  const endDate = new Date(2026, 5, 3);  // até fim de julho (ou mais)

  // === DATAS A SEREM PULADAS (recesso, feriados, etc.) ===
  // Formato: YYYY, M-1, D  (mês é 0-indexed como no new Date())
  const datasExcluidas = [
    new Date(2026, 3, 3),    // Sexta santa
    new Date(2026, 4, 1),    // Dia do trabalho
    new Date(2026, 5, 5),    // Corpus Christi
    new Date(2026, 6, 10),   // Recesso de Julho
    new Date(2026, 6, 17),   // Recesso de Julho
    new Date(2025, 10, 20),  //Consciência Negra
  ].map(d => {
    // Normaliza para meia-noite local (evita problemas de fuso)
    d.setHours(0, 0, 0, 0);
    return d;
  });

  function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    return `${dd}/${mm}`;
  }

  // Função auxiliar para verificar se a data está na lista de excluídas
  function isDataExcluida(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return datasExcluidas.some(excluida => excluida.getTime() === d.getTime());
  }

  // Escala fixa de responsáveis (a sequência que você quer manter)
  const responsaveis = [
    ["Diretor", "Rocha"],
    ["Jaque", "Murilo"],
    ["Andressa", "Camila"],
    ["Carol", "Valéria"],
    ["Renata", "Fábio"],
    ["Joyce", "Diretor"],
    ["Fábio",  "Rocha"],
    ["Murilo",  "Camila"],
    ["Diretor", "Murilo"],
    ["Jaque", "Valéria"],
    ["Andressa", "Fábio"],
    ["Carol", "Diretor"],
    ["Renata", "Rocha"],
    ["Joyce", "Murilo"],
    ["Fábio", "Camila"],
  ];

  const dataArray = [];
  let current = new Date(startDate);

  // Ajusta para a primeira sexta-feira (igual ao seu código original)
  const diaSemana = current.getDay(); // 0=domingo ... 5=sexta
  if (diaSemana !== 5) {
    const diasAteSexta = (5 - diaSemana + 7) % 7 || 7; // evita 0 quando já é sexta
    current.setDate(current.getDate() + diasAteSexta);
  }

  let indiceResponsavel = 0;

  while (current <= endDate) {
    // Se for uma data excluída, pula (não adiciona e não incrementa o índice)
    if (isDataExcluida(current)) {
      // apenas avança para a próxima sexta
      current.setDate(current.getDate() + 7);
      continue;
    }

    // Adiciona a escala normalmente
    const par = responsaveis[indiceResponsavel % responsaveis.length];
    dataArray.push({
      data: formatDate(current),
      ambiente1: par[0],
      ambiente2: par[1],
    });

    // Avança para a próxima sexta-feira e para o próximo par de responsáveis
    current.setDate(current.getDate() + 7);
    indiceResponsavel++;
  }

  return dataArray;
})();