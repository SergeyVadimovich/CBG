$(function(){
// menu button
  $('.header__menu-btn').on('click', function(){
    $('.menu').toggleClass('menu--active')
  })
// end mrnu button


// slider review
  $('.review__slider-items').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow:1,
    slidesToScroll:1,
    fade:true,
    infinite:false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        }
      },
    ],
  });
// end slider review


// gellery slider
  $('.gallery-slider__thumb').slick({
    asNavFor:'.gallery-slider__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    arrows:false,
    vertical: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 761,
        settings: 'unslick'
      }
    ]
  });

  $('.gallery-slider__big').slick({
    asNavFor:'.gallery-slider__thumb',
    draggable: false,
    dots:true,
    arrows:true,
    fade:false,
  });

// end gallery slider
});