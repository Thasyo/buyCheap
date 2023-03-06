//carouselNotebook.
const productNotebookData = [
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
    {'src': '../img/notebookStationaryStore/', 'name': '', 'link': ''},
];

const carouselNotebook = document.querySelector("#carousel-notebook");

const loadCardProductNotebook = (productNotebookData, carouselNotebook) => {

    productNotebookData.forEach((cardproduct) => {
      
      carouselNotebook.innerHTML += `     
        <div class="card-product">
            <div class="img-product">
                <img src="${cardproduct.src}" class="image">
            </div>
            <div class="content-product">
                <h3 class="name-product">${cardproduct.name}</h3>
                <a href="${cardproduct.link}" target="_blank">Detalhes do Produto</a>
            </div>
        </div>
      `;
      
    })  
  
  };
  
loadCardProductNotebook(productNotebookData, carouselNotebook);

$( () => {
    $("#carousel-notebook").slick({
        infinite: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(".prev-arrow-notebook"),
        nextArrow: $(".next-arrow-notebook"),
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

//carouselSchoolSupplies.
const productSchoolSuppliesData = [
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/schoolSuppliesStationaryStore/', 'name': '', 'link': ''},
];

const carouselSchoolSupplies = document.querySelector("#carousel-schoolsupplies");

const loadCardProductSchoolSupplies = (productSchoolSuppliesData, carouselSchoolSupplies) => {

  productSchoolSuppliesData.forEach((cardproduct) => {
    
    carouselSchoolSupplies.innerHTML += `     
      <div class="card-product">
          <div class="img-product">
              <img src="${cardproduct.src}" class="image">
          </div>
          <div class="content-product">
              <h3 class="name-product">${cardproduct.name}</h3>
              <a href="${cardproduct.link}" target="_blank">Detalhes do Produto</a>
          </div>
      </div>
    `;
    
  })  

};

loadCardProductSchoolSupplies(productSchoolSuppliesData, carouselSchoolSupplies);

$( () => {
  $("#carousel-schoolsupplies").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-schoolsupplies"),
      nextArrow: $(".next-arrow-schoolsupplies"),
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

//carouselBags.
const productBagsData = [
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/bagsStationaryStore/', 'name': '', 'link': ''},
];

const carouselBags = document.querySelector("#carousel-bags");

const loadCardProductBags = (productBagsData, carouselBags) => {

  productBagsData.forEach((cardproduct) => {
    
    carouselBags.innerHTML += `     
      <div class="card-product">
          <div class="img-product">
              <img src="${cardproduct.src}" class="image">
          </div>
          <div class="content-product">
              <h3 class="name-product">${cardproduct.name}</h3>
              <a href="${cardproduct.link}" target="_blank">Detalhes do Produto</a>
          </div>
      </div>
    `;
    
  })  

};

loadCardProductBags(productBagsData, carouselBags);

$( () => {
  $("#carousel-bags").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-bags"),
      nextArrow: $(".next-arrow-bags"),
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

//carouselstationeryingeneral.
const productStationneryInGeneralData = [
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
  {'src': '../img/stationeryInGeneralStationaryStore/', 'name': '', 'link': ''},
];

const carouselStationneryInGeneral = document.querySelector("#carousel-stationeryingeneral");

const loadCardProductStationneryInGeneral = (productStationneryInGeneralData, carouselStationneryInGeneral) => {

  productStationneryInGeneralData.forEach((cardproduct) => {
    
    carouselStationneryInGeneral.innerHTML += `     
      <div class="card-product">
          <div class="img-product">
              <img src="${cardproduct.src}" class="image">
          </div>
          <div class="content-product">
              <h3 class="name-product">${cardproduct.name}</h3>
              <a href="${cardproduct.link}" target="_blank">Detalhes do Produto</a>
          </div>
      </div>
    `;
    
  })  

};

loadCardProductStationneryInGeneral(productStationneryInGeneralData, carouselStationneryInGeneral);

$( () => {
  $("#carousel-stationeryingeneral").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-stationeryingeneral"),
      nextArrow: $(".next-arrow-stationeryingeneral"),
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