//papelariaCasaDecoração
$( () => {
    $(".carousel-decoration").slick({
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(".prev-arrow-decoration"),
        nextArrow: $(".next-arrow-decoration"),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
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
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(".prev-arrow-stationarystore"),
        nextArrow: $(".next-arrow-stationarystore"),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                variableWidth: true,
              }
            }
          ]
    });
})
