import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

document.addEventListener("DOMContentLoaded", function () {
  Swiper.use([Navigation, Pagination, EffectFade]);

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    effect: "fade",
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
  });

  var day = document.querySelector(".mode-day");
  var night = document.querySelector(".mode-night");
  var mode = sessionStorage.getItem("mode");

  if (mode == "night") {
    if (night) {
      night.classList.remove("is-active");
      day.classList.add("is-active");
    }

    document.body.classList.add("night");
  }

  if (night) {
    night.addEventListener("click", function () {
      night.classList.remove("is-active");
      day.classList.add("is-active");
      document.body.classList.add("night");
      sessionStorage.setItem("mode", "night");
    });

    day.addEventListener("click", function () {
      day.classList.remove("is-active");
      night.classList.add("is-active");
      document.body.classList.remove("night");
      sessionStorage.setItem("mode", "day");
    });
  }
});
