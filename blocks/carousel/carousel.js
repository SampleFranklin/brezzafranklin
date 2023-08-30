/*   $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  });

  $(".stories")
    .slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
    })
    .slick("refresh");

  setTimeout(() => {
    $(".stories").slick("refresh");
  }, 100);*/

export default function decorate(block) {
  // block.classList.add("multiple-items");

  // [...block.children].forEach((row, i) => {
  //   console.log(row);
  //   const classes = ["image", "text"];
  //   classes.forEach((e, j) => {
  //     row.children[j].classList.add(`carousel-${e}`);
  //   });
  // });

  block.classList.add("swiper-wrapper");
  [...block.children].forEach((row, i) => {
    row.classList.add('swiper-slide');
    const classes = ["image", "text"];

    classes.forEach((e, j) => {
      row.children[j].classList.add(`carousel-${e}`);
    });
  });

  const swiper = new Swiper('.carousel-wrapper', {
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
  });
  console.log("hello");
}

// $(document).ready(function () {
//   $(".multiple-items").slick({
//     infinite: false,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: true,
//     variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 391,
//         settings: {
//           arrows: true,
//           slidesToShow: 1,
//           variableWidth: false,
//           slidesToScroll: 3,
//         },
//       },
//     ],
//   });
// });
