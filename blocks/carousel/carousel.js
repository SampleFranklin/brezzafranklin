export default function decorate(block) {
  block.classList.add("swiper-wrapper");
  [...block.children].forEach((row, i) => {
    row.classList.add('swiper-slide');
    const classes = ["image", "text"];

    classes.forEach((e, j) => {
      row.children[j].classList.add(`carousel-${e}`);
    });
  });

  const previousButton = document.createElement('div');
  const nextButton = document.createElement('div');
  previousButton.classList.add("swiper-button-prev");
  nextButton.classList.add("swiper-button-next");

  if(block.classList.contains("stories")){
    previousButton.classList.add("stories-prev");
    nextButton.classList.add("stories-next");
  }

  block.parentElement.appendChild(previousButton);
  block.parentElement.appendChild(nextButton);

  const swiper = new Swiper('.carousel-wrapper', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  //   breakpoints: {
  //     391: {
  //         slidesPerView: 1
  //     }
  // }
  });
}

