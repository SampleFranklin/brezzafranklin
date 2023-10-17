export default function decorate(block) {
  block.classList.add("swiper-wrapper");
  [...block.children].forEach((row, i) => {
    row.classList.add("swiper-slide");
    const classes = ["image", "text"];

    classes.forEach((e, j) => {
      row.children[j].classList.add(`carousel-${e}`);
    });
  });

  const previousButton = document.createElement("div");
  const nextButton = document.createElement("div");
  previousButton.classList.add("swiper-button-prev");
  nextButton.classList.add("swiper-button-next");

  if (block.classList.contains("stories")) {
    previousButton.classList.add("stories-prev");
    nextButton.classList.add("stories-next");
  }else{
    previousButton.classList.add("feature-prev");
    nextButton.classList.add("feature-next");
  }

  block.parentElement.appendChild(previousButton);
  block.parentElement.appendChild(nextButton);

  const swiper = new Swiper(".feature .carousel-wrapper", {
    navigation: {
      nextEl: ".swiper-button-next.feature-next",
      prevEl: ".swiper-button-prev.feature-prev",
    },
    watchSlidesProgress: true,
    spaceBetween: "27px",
    breakpoints: {
      390: {
        slidesPerView: 1,
      },
      1023:{
        slidesPerView: 3,
      }
    },
  });
  new Swiper(".stories .carousel-wrapper", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next.stories-next",
      prevEl: ".swiper-button-prev.stories-prev",
    },
    watchSlidesProgress: true,
    breakpoints: {
      390: {
        slidesPerView: 1.4,
        spaceBetween: "16px",
      },
      1023:{
        slidesPerView: 3,
      }
    },
  });
}

