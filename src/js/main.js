import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

Swiper.use([Navigation, Pagination, EffectFade]);

const swiper = new Swiper(".swiper-container", {
  effect: "fade",
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
});
