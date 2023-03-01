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