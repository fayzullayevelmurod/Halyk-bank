
// let swiper = new Swiper(".treatmentsSwiper", {
//   slidesPerView: 1.10,
//   spaceBetween: 28,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2.2,
//       spaceBetween: 28,
//     },
//     993: {
//       slidesPerView: 3.2,
//       spaceBetween: 28,
//     },
//     1200: {
//       slidesPerView: 3.6,
//       spaceBetween: 40,
//     },
//   },
// });

let platformSwiper;

function initPlatformSwiper() {
  const isMobile = window.innerWidth <= 850;

  if (isMobile && !platformSwiper) {
    platformSwiper = new Swiper(".platform_in", {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: false,
    });
  }

  if (!isMobile && platformSwiper) {
    platformSwiper.destroy(true, true);
    platformSwiper = null;
  }
}

initPlatformSwiper();
window.addEventListener("resize", initPlatformSwiper);
