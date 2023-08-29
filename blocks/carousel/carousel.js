import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true
  })

  $('.stories').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true
  }).slick('refresh')
});

export default function decorate(block) {
  block.classList.add('multiple-items');
  [...block.children].forEach((row, i) => {
    const classes = ['image', 'text'];
    classes.forEach((e, j) => {
      row.children[j].classList.add(`carousel-${e}`);
    });
  });
  console.log(block);
}