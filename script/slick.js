

$(function () {
  $(".sec3 .sec3_slidebox").slick({
    adaptiveHeight: true,
    Infinite: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 4,
    autoplay: true,
    // arrows : true,


    responsive: [
      {
        breakpoint: 1500,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 997,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 300,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]


  })



  //////////////////////////////////
});