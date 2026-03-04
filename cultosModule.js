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
  "2026-03-05": ["Douglas", "Douglas", "Douglas"],
  "2026-03-12": ["Murilo", "Murilo", "Murilo"],
  "2026-03-19": ["Carol", "Carol", "Carol"],
  "2026-03-26": ["Renata", "Renata", "Renata"],
  "2026-04-02": ["Andressa", "Andressa", "Andressa"],
  "2026-04-02": ["Rocha", "Rocha", "Rocha"],
  "2026-04-09": ["Valéria", "Valéria", "Valéria"],
  "2026-04-16": ["Joyce", "Joyce", "Joyce"],
  "2026-05-07": ["Carin", "Carin", "Carin"],
  "2026-05-14": ["Jaque", "Jaque", "Jaque"],
  "2026-05-21": ["Douglas", "Douglas", "Douglas"],
  "2026-05-28": ["Murilo", "Murilo", "Murilo"],
};

export function getDataAtual() {
  return new Date();
}

export const horarios = ["7", "10", "13"];