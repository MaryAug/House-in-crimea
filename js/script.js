var elms = document.getElementsByClassName("splide");

for (var i = 0; i < elms.length; i++) {
  new Splide(elms[i], {
    type: "loop",
    arrows: true,
    pagination: false,
    perPage: 1,
    classes: {
      arrows: "splide__arrows main-slider-arrows",
      arrow: "splide__arrow main-slider-arrow",
      prev: "splide__arrow--prev main-slider-prev",
      next: "splide__arrow--next main-slider-next",
    },
  }).mount();
}
