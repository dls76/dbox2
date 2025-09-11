// export const escalados = [
//     { nome: "Douglas", data: new Date(2025, 1, 25), cap: "1/1.1 a 2" },
//     { nome: "Murilo", data: new Date(2025, 3, 1), cap: "1/2.1 a 3" },
//     { nome: "Pr. Vinícius", data: new Date(2025, 3, 8), cap: "1/3.1 a 3.5" },
//     { nome: "Carin", data: new Date(2025, 3, 15), cap: "1/3.6 a 4" },

//     { nome: "Nailson", data: new Date(2025, 4, 6), cap: "1/4.1 a 4.4" },
//     { nome: "Carol", data: new Date(2025, 4, 13), cap: "2/1-2" },
    
//     { nome: "Jaque", data: new Date(2025, 4, 20), cap: "2/3-4" },
//     { nome: "Camila", data: new Date(2025, 4, 27), cap: "3/1-2" },
//     { nome: "Valéria", data: new Date(2025, 5, 3), cap: "3/3-5" },
//     { nome: "Malu", data: new Date(2025, 5, 10), cap: "4/1-2.5" },

//     { nome: "Andressa", data: new Date(2025, 5, 17), cap: "4/3-4.5" },
//     { nome: "Renata", data: new Date(2025, 5, 24), cap: "5/1-2" },

//     { nome: "Vinícius", data: new Date(2025, 6, 1), cap: "5/3-5" }
    
//   ];

// export const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// export function getDataAtual() {
//     return new Date();
// }

export const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  
export const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];


export const escalados = [
  // { nome: "Douglas", cap: "1/1.1 a 2" },
  // { nome: "Murilo", cap: "1/2.1 a 3" },
  // { nome: "Pr. Vinícius", cap: "1/3.1 a 3.5" },
  // { nome: "Carin", cap: "1/3.6 a 4" },
  { nome: "Nailson", cap: "1/4.1 a 4.4" },
  { nome: "Carol", cap: "2/1-2" },
  { nome: "Jaque", cap: "2/3-4" },
  { nome: "Camila", cap: "3/1-2" },
  { nome: "Valéria", cap: "3/3-5" },
  { nome: "Andressa", cap: "4/1-2.5" },
  { nome: "Joyce", cap: "4/3-4.5" },
  { nome: "Renata", cap: "5/1-2" },
  { nome: "Vinícius", cap: "5/3-5" }
];

export const dataInicial = new Date(2025, 4, 6); // 25/02/2025

// Descomentar as datas em que será feriado, recesso ou não teremos RA
export const pausas = [
  new Date(2025, 4, 6),
  new Date(2025, 4, 20),
  new Date(2025, 4, 27),
  new Date(2025, 5, 3),
  new Date(2025, 5, 17),
  new Date(2025, 6, 1), 
  new Date(2025, 6, 8), 
  new Date(2025, 6, 15),
  new Date(2025, 6, 22), 
  new Date(2025, 6, 29), 
  // new Date(2025, 7, 5),
  new Date(2025, 7, 12), 
  new Date(2025, 7, 19), 
  new Date(2025, 7, 26), 
  new Date(2025, 8, 2), 
  new Date(2025, 8, 9), 
  
];

export function gerarEscaladosComData() {
  const resultado = [];
  let data = new Date(dataInicial);

  escalados.forEach((item) => {
    // Enquanto a data atual for uma pausa, pula para a próxima semana
    while (pausas.some(p => p.getTime() === data.getTime())) {
      data.setDate(data.getDate() + 7);
    }

    resultado.push({
      nome: item.nome,
      cap: item.cap,
      data: new Date(data) // Clona a data atual
    });

    // Depois de atribuir, já avança para a próxima semana
    data.setDate(data.getDate() + 7);
  });

  return resultado;
}
