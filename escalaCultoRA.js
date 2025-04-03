document.addEventListener("DOMContentLoaded", function () {
    proximaEscalaCultoRa(escalados);
  });

const escalados = [
  { nome: "Douglas", data: new Date(2025, 1, 25), cap: "1/1.1 a 2" },
  { nome: "Murilo", data: new Date(2025, 3, 1), cap: "1/2.1 a 3" },
  { nome: "Pr. Vinícius", data: new Date(2025, 3, 8), cap: "1/3.1 a 3.5" },
  { nome: "Carin", data: new Date(2025, 3, 15), cap: "1/3.6 a 4" },
  { nome: "Nailson", data: new Date(2025, 3, 22), cap: "1/4.1 a 4.4" },
  { nome: "Carol", data: new Date(2025, 3, 29), cap: "2/1-2" },
  { nome: "Jaque", data: new Date(2025, 4, 6), cap: "2/3-4" },
  { nome: "Camila", data: new Date(2025, 4, 13), cap: "3/1-2" },
  { nome: "Valéria", data: new Date(2025, 4, 20), cap: "3/3-5" },
  { nome: "Malu", data: new Date(2025, 4, 27), cap: "4/1-2.5" },
  { nome: "Andressa", data: new Date(2025, 5, 3), cap: "4/3-4.5" },
  { nome: "Renata", data: new Date(2025, 5, 10), cap: "5/1-2" },
  { nome: "Vinícius", data: new Date(2025, 5, 17), cap: "5/3-5" }
];

const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const mesDoAno = [
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

function proximaEscalaCultoRa(array) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const futureDates = array.filter(
    (item) => new Date(item.data).getTime() >= today.getTime()
  );

  futureDates.sort((a, b) => a.data.getTime() - b.data.getTime());

  const escalaCultoElement =
    document.querySelector("#escalaCultoRa");

  if (!escalaCultoElement) {
    console.error("Elemento não encontrado no DOM.");
    return;
  }

  if (futureDates.length > 0) {
    const proxReuniao = futureDates[0];
    let dia = proxReuniao.data.getDate().toString().padStart(2, "0");
    let mes = proxReuniao.data.getMonth();
    // let diaSemana = diaDaSemana[proxReuniao.data.getDay()];

    // Concatenando nome do responsável e o capítulo
    escalaCultoElement.innerHTML = `${dia} de ${mesesDoAno[mes].slice(0,3)} - ${proxReuniao.nome} (${proxReuniao.cap})`;
} else {
    escalaCultoElement.innerHTML = "Data a definir";
}
}
