export const responsaveisHino = (() => {
 
  // Gera sextas-feiras toda semana até a primeira sexta de dezembro 2025
  // Usando ano, mês (0-indexed), dia para evitar problemas de fuso horário
  const startDate = new Date(2025, 9, 3); // 3 de outubro de 2025 (mês 9 = outubro)
  const endDate = new Date(2025, 11, 5);   // 5 de dezembro de 2025 (mês 11 = dezembro)
  
  function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    return `${dd}/${mm}`;
  }
  
  // Escala de responsáveis
  const responsaveis = [
    ["Rocha", "Kadu"],
    ["Murilo", "Diretor"],
    ["Rocha", "Camila"],
    ["Jaque", "Diretor"],
    ["Joyce", "Valéria"],
    ["Carol", "Kadu"],
    ["Renata", "Diretor"],
    ["Andressa", "Murilo"],
    ["Diretor", "Rocha"],
  ];
  
  const dataArray = [];
  let current = new Date(startDate);
  let i = 0;
  
  // Ajusta para garantir que começamos em uma sexta-feira
  const diaSemana = current.getDay(); // 0 = domingo, 5 = sexta
  if (diaSemana !== 5) {
    // Se não for sexta, ajusta para a próxima sexta
    const diasAteProximaSexta = (5 - diaSemana + 7) % 7;
    current.setDate(current.getDate() + diasAteProximaSexta);
  }
  
  while (current <= endDate) {
    dataArray.push({
      data: formatDate(current),
      ambiente1: responsaveis[i % responsaveis.length][0],
      ambiente2: responsaveis[i % responsaveis.length][1],
    });
    
    // Avança 7 dias para a próxima sexta-feira
    current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 7);
    i++;
  }
  
  return dataArray;
})();