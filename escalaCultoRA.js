document.addEventListener("DOMContentLoaded", function () {
    proximaEscalaCultoRa(escalados);
  });

const escalados = [
  {nome: "Douglas", data: new Date(2025, 1, 25), cap: "1/1.1-2",},
  {nome: "Murilo", data: new Date(2025, 2, 11), cap: "1/3.1 até 3.5",},
  {nome: "Carin", data: new Date(2025, 2, 18), cap: "1/3.6 até 4",},
  {nome: "Nailson", data: new Date(2025, 2, 25), cap: "1/4.1 até 4.4",},
  {nome: "Carol", data: new Date(2025, 3, 1), cap: "2/1 até 2" },
  {nome: "Jaque", data: new Date(2025, 3, 8), cap: "2/3 até 4" },
  {nome: "Camila", data: new Date(2025, 3, 15), cap: "3/1 até 2" },
  {nome: "Valéria", data: new Date(2025, 3, 22), cap: "3/3 até 5" },
  {nome: "Malu", data: new Date(2025, 3, 29), cap: "4/1 até 2.5" },
  {nome: "Andressa", data: new Date(2025, 4, 6), cap: "4/3 até 4.5",  },
  {nome: "Renata", data: new Date(2025, 4, 13), cap: "5/1 até 2" },
  {nome: "Vinícius", data: new Date(2025, 4, 20), cap: "5/3 até 5" },
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

