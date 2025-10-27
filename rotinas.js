//   <a href="#" id="routineTabs">Abrir 3 guias</a>

// Lista de URLs a abrir
const urls = [
    "https://calendar.google.com/calendar/u/0/r",
    "https://www.classapp.com.br/",
    "https://mail.google.com/mail/u/0/#inbox",
    "https://app.powerbi.com/groups/me/apps/ba9d2c5f-5784-4ae0-bd7f-e95646d75b33/reports/ce8c1804-01c9-4c89-a084-3d8913c40bb8/870332ce8437ac7e07ff?language=pt-BR&experience=power-bi",
    "https://app.powerbi.com/groups/me/apps/ba9d2c5f-5784-4ae0-bd7f-e95646d75b33/reports/ce8c1804-01c9-4c89-a084-3d8913c40bb8/ReportSectionbb1fb9cc10a796904324?language=pt-BR&experience=power-bi",
    "https://acrm.sdasystems.org/educacao-web/login/",
    "https://web.whatsapp.com/"
];

// Função que tenta abrir todas as urls em novas guias
function abrirVariasGuias(urlArray) {
// Tente abrir todas imediatamente (melhor chance de não serem bloqueadas se for dentro do evento de clique)
for (let i = 0; i < urlArray.length; i++) {
// nome de janela distinto para cada chamada evita reaproveitamento da mesma guia
window.open(urlArray[i], `_blank`);
}
}

// Anexa o evento ao link (user gesture)
document.getElementById("routineTabs").addEventListener("click", function (ev) {
ev.preventDefault();
abrirVariasGuias(urls);
});