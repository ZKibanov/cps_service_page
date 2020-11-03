let chatButtons = document.querySelectorAll(".button--chat");
let modalChat = document.querySelector(".modal-contact");
let modalChatClose = document.querySelector(".modal-contacts-button-close");
let modalChatScreen = document.querySelector(".modal-contact__screen");
let body = document.querySelector(".body");


chatButtons.forEach((element) =>
  element.addEventListener("click", function () {
    modalChat.classList.remove("modal-contact__hidden"),
      modalChatScreen.classList.remove("modal-contact__screen_hidden");
      body.classList.add("blocked");
  })
);
modalChatClose.addEventListener("click", function () {
  modalChat.classList.add("modal-contact__hidden");
  modalChatScreen.classList.add("modal-contact__screen_hidden");
  body.classList.remove("blocked");
});
