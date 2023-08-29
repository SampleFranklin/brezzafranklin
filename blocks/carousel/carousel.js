$(document).ready(function(){
  
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true
  })

  $('.stories').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
  }).slick('refresh')

  setTimeout(() => {
    $('.stories').slick('refresh');
  }, 100);

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