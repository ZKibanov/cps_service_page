let phoneButtons = document.querySelectorAll(".button--phone");
let modalPhone = document.querySelector(".modal-call");
let modalPhoneClose = document.querySelector(".modal-call-button-close");
let modalPhoneScreen = document.querySelector(".modal-call__screen");
let body = document.querySelector(".body");

phoneButtons.forEach((element) =>
  element.addEventListener("click", function () {
    modalPhone.classList.remove("modal-call__hidden");
    modalPhoneScreen.classList.remove("modal-call__screen_hidden");
    body.classList.add("blocked");
  })
);
modalPhoneClose.addEventListener("click", function () {
  modalPhone.classList.add("modal-call__hidden");
  modalPhoneScreen.classList.add("modal-call__screen_hidden");
  body.classList.remove("blocked");
});
let closeAllModals = function () {};
