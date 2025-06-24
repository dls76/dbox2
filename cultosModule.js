export const nomes = {
  1: "Vice",            // Segunda
  2: "Diretor",         // Terça
  3: "Pr. Vinícius",    // Quarta
  4: "Escala",          // Quinta (padrão)
  5: "Pr. Leonardo"     // Sexta
};

export const substituicoes = {
  "2025-05-01": "Feriado",
  "2025-05-02": "Recesso"
};

export const escalaQuintaPersonalizada = {
  "2025-06-12": ["Jaque", "Nailson", "Jhessica"],
  "2025-06-19": ["Carol", "Nailson", "Ana B."],
  "2025-06-26": ["Andressa", "Nailson", "Valéria"]
};

export function getDataAtual() {
  return new Date(2025, 5, 26);
}

export const horarios = ["7", "10", "13"];