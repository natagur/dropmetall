$(document).on('click', '.btn-header.burger', function(event){
    $('.header-nav').toggle();
    $('.btn-header.burger').toggle();
  
    event.preventDefault();
  });
  $(document).on('click', '.cross', function(event){
    $('.header-nav').toggle();
    $('.btn-header.burger').toggle();
  
    event.preventDefault();
  });

  // слайдер//
  $('.your-class2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });