const btnMore = document.querySelector(".tech__btn-more");
let minimizer = document.querySelector(".tech-list_minimizer");
let swipers = document.querySelectorAll(".swiper-container");
const mediaQueryList = window.matchMedia("(min-width: 768px)");

let swiperObjects = [];
import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);

btnMore.addEventListener("click", function () {
  btnMore.classList.toggle("btn-more_opened");
  minimizer.classList.toggle("tech-list_minimized");

  if (minimizer.classList.contains("tech-list_minimized")) {
    btnMore.textContent = "Показать все";
  } else {
    btnMore.textContent = "Скрыть";
  }
});

const enableSwiper = function () {
  for (let i = 0; i < swipers.length; i += 1) {
    swiperObjects[i] = new Swiper(swipers[i], {
      slidesPerView: 2,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }
};

let swiperRequest = function (MQL) {
  if (MQL.matches) {
    swiperObjects.forEach((el) => {
      if (el !== undefined) {
        el.destroy(true, true);
      }
    });
  } else {
    enableSwiper();
  }
};

swiperRequest(mediaQueryList);

mediaQueryList.onchange = function (a) {
  swiperRequest(mediaQueryList);
};
