const openButton = document.querySelector("#open-emergency");
const closeButton = document.querySelector("#close-modal-btn");
const modalContainer = document.querySelector("#modal-container");

openButton.addEventListener("click", () => {
  modalContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});