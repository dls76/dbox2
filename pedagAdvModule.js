export const escalados = [
    { nome: "Dire", data: new Date(2025, 1, 25), cap: "1/1.1 a 2" },
    { nome: "Vice", data: new Date(2025, 3, 1), cap: "1/2.1 a 3" },
    { nome: "Vini", data: new Date(2025, 3, 8), cap: "1/3.1 a 3.5" },
    { nome: "Carin", data: new Date(2025, 3, 15), cap: "1/3.6 a 4" },
    { nome: "Nail", data: new Date(2025, 3, 22), cap: "1/4.1 a 4.4" },
    { nome: "Carol", data: new Date(2025, 3, 29), cap: "2/1-2" },
    { nome: "Jaque", data: new Date(2025, 4, 6), cap: "2/3-4" },
    { nome: "Camila", data: new Date(2025, 4, 13), cap: "3/1-2" },
    { nome: "Valéria", data: new Date(2025, 4, 20), cap: "3/3-5" },
    { nome: "Malu", data: new Date(2025, 4, 27), cap: "4/1-2.5" },
    { nome: "Andressa", data: new Date(2025, 5, 3), cap: "4/3-4.5" },
    { nome: "Renata", data: new Date(2025, 5, 10), cap: "5/1-2" },
    { nome: "Vini", data: new Date(2025, 5, 17), cap: "5/3-5" }
];

export const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function carregarEscalas() {
    const main = document.querySelector("#main");
    main.innerHTML = "";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let proximoElemento = null;

    escalados.forEach((item) => {
        let dia = item.data.getDate().toString().padStart(2, "0");
        let mes = mesesDoAno[item.data.getMonth()].slice(0, 3);

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<strong>${dia} de ${mes}</strong> - ${item.nome} (cap. ${item.cap})`;

        if (item.data < today) {
            card.classList.add("passado");
        } else if (!proximoElemento) {
            card.classList.add("destaque");
            proximoElemento = card;
        }

        main.appendChild(card);
    });

    if (proximoElemento) {
        setTimeout(() => {
            const h1Height = document.querySelector("h1").offsetHeight;
            const scrollPosition = proximoElemento.offsetTop - h1Height - 10;
            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }, 500);
    }
}

document.addEventListener("DOMContentLoaded", carregarEscalas);