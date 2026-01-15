import Swiper from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper";

document.addEventListener("DOMContentLoaded", function () {
  Swiper.use([Navigation, Pagination, EffectFade]);

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
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

  const cursor = document.getElementById("cursor");

  let mouseX = 0,
    mouseY = 0;
  let dotX = 0,
    dotY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    dotX += (mouseX - dotX) * 0.1;
    dotY += (mouseY - dotY) * 0.1;

    cursor.style.left = dotX + "px";
    cursor.style.top = dotY + "px";

    requestAnimationFrame(animate);
  }

  animate();
});
