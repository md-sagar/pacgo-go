// $(".slider").slick({
//     arrows:false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots:true
// });


$('.slider').slick({
    arrows:false,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrow: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false
        }
      }
    ]
  });