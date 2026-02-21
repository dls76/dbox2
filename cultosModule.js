export const nomes = {
  1: "Pr. Gabriel",            // Segunda
  2: "Pr. Danylo",         // Terça
  3: "Pr. Fábio",    // Quarta
  4: "Escala Adm",          // Quinta (padrão)
  5: "Pr. Fábio"     // Sexta
};

export const substituicoes = {
  "2026-04-20": "Feriado",
  "2026-04-21": "Feriado",
  "2026-05-01": "Feriado",
  "2025-05-28": "Recesso",
  "2026-06-04": "Recesso",
  "2026-06-05": "Recesso"
};

export const escalaQuintaPersonalizada = {
  "2026-02-27": ["Escala", "Escala", "Escala"],
  "2026-03-07": ["Escala", "Escala", "Escala"],
  "2026-03-14": ["Escala", "Escala", "Escala"],
  "2026-03-21": ["Escala", "Escala", "Escala"],
  "2026-03-28": ["Escala", "Escala", "Escala"]
};

export function getDataAtual() {
  return new Date();
}

export const horarios = ["7", "10", "13"];