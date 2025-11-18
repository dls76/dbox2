export const responsaveisHino = (() => {
  // Configurações de período
  const startDate = new Date(2025, 9, 3);  // 3 de outubro de 2025
  const endDate = new Date(2025, 11, 31);  // até fim de dezembro (ou mais se precisar)

  // === DATAS A SEREM PULADAS (recesso, feriados, etc.) ===
  // Formato: YYYY, M-1, D  (mês é 0-indexed como no new Date())
  const datasExcluidas = [
    new Date(2025, 10, 21),  // exemplo: 28/11/2025 (sexta-feira de recesso)
    // new Date(2025, 11, 5),   // adicione mais se precisar
    // new Date(2025, 11, 19),
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
    ["Rocha", "Kadu"],
    ["Murilo", "Diretor"],
    ["Rocha", "Camila"],
    ["Jaque", "Diretor"],
    ["Diretor", "Valéria"],
    ["Carol", "Kadu"],
    ["Renata",  "Diretor"],
    ["Andressa", "Murilo"],
    ["Diretor", "Rocha"],
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