//papelariaCasaDecoração
$( () => {
    $(".carousel-decoration").slick({
        infinite: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(".prev-arrow-decoration"),
        nextArrow: $(".next-arrow-decoration"),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                variableWidth: true,
              }
            }
          ]
    });
})


//papelariaCarrossel
$( () => {
    $(".carousel-stationarystore").slick({
        infinite: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(".prev-arrow-stationarystore"),
        nextArrow: $(".next-arrow-stationarystore"),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                variableWidth: true,
              }
            }
          ]
    });
})


//techCarrossel
$( () => {
  $(".carousel-tech").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-tech"),
      nextArrow: $(".next-arrow-tech"),
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
            }
          }
        ]
  });
})

//ToysCarrossel
$( () => {
  $(".carousel-toys").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-toys"),
      nextArrow: $(".next-arrow-toys"),
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
            }
          }
        ]
  });
})

//AccessoriesCarousel
$( () => {
  $(".carousel-accessories").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-accessories"),
      nextArrow: $(".next-arrow-accessories"),
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
            }
          }
        ]
  });
})