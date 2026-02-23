const openButton = document.querySelector("#open-emergency");
const closeButton = document.querySelector("#close-modal-btn");
const modalContainer = document.querySelector("#modal-container");

openButton.addEventListener("click", () => {
  modalContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});




const openAma = document.querySelector("#open-ama");

openAma.addEventListener('click', ()=>{

  window.open('https://sistemas.usb.org.br/ama/index.php', '_blank');

})