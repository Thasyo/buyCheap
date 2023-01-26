//creating kitchen cards home and decoration.
//carouselKitchen.
const productKitchenData = [
    {'src': '../img/kitchenHomeAndDecoration/kit10panoDePrato.png', 'name': 'KIT 10 Panos de Prato', 'link': 'https://shope.ee/8euCcp8Hli'},
    {'src': '../img/kitchenHomeAndDecoration/tramontina.jpg', 'name': 'Tramontina KIT 10 Peças Turim Vermelho', 'link': 'https://www.amazon.com.br/Tramontina-COZINHA-10-PE%C3%87AS-VERMELHO/dp/B09T5FYG5D?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2O6LQ7UDXN1QN&keywords=cozinha&qid=1674697980&sprefix=cozinha%2Caps%2C246&sr=8-11&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&linkCode=ll1&tag=thasyo0a-20&linkId=765094c295f2ab008c547de47279ad34&language=pt_BR&ref_=as_li_ss_tl'},
    {'src': '../img/kitchenHomeAndDecoration/chuveirinhoTorneiraRetratil.png', 'name': 'Chuveirinho Torneira Giratória 360°', 'link': 'https://shope.ee/4V4dgzZUYK'},
    {'src': '../img/kitchenHomeAndDecoration/torneiraGourmet.png', 'name': 'Torneira Gourmet', 'link': 'https://shope.ee/3AZG6ssI1F'},
    {'src': '../img/kitchenHomeAndDecoration/facaDeLaminaEmAcoInox.png', 'name': 'Faca de Lâmina em Aço Inox', 'link': 'https://shope.ee/3fVWi7Qhyj'},
    {'src': '../img/kitchenHomeAndDecoration/AmoladorDeFacas.png', 'name': 'Amolador de Facas Aço Inox', 'link': 'https://shope.ee/8zX368PRku'},
    {'src': '../img/kitchenHomeAndDecoration/miniProcessador.png', 'name': 'Mini Processador Elétrico', 'link': 'https://shope.ee/2pwPkspIpS'},
    {'src': '../img/kitchenHomeAndDecoration/miniLiquidificador.png', 'name': 'Mini Liquidificador', 'link': 'https://shope.ee/A9j0UXRk1J'},
    {'src': '../img/kitchenHomeAndDecoration/bombaEletrica.png', 'name': 'Bomba Elétrica Universal', 'link': 'https://shope.ee/500ljmweXI'},
    {'src': '../img/kitchenHomeAndDecoration/espremedorDeAlho.png', 'name': 'Espremedor de Alho', 'link': 'https://shope.ee/3powxhwKNU'},
    {'src': '../img/kitchenHomeAndDecoration/BalancaDigitalDePressao.png', 'name': 'Balança Digital de Pressão', 'link': 'https://shope.ee/4ARnMde2iW'},
    {'src': '../img/kitchenHomeAndDecoration/formaAirfrayer.png', 'name': 'Formas de AirFryer Descartável', 'link': 'https://shope.ee/10Ulb3O6p0'},
    {'src': '../img/kitchenHomeAndDecoration/kitPotePlastico16pecas.png', 'name': 'Kit Pote Plástico (16 peças)', 'link': 'https://shope.ee/7zeVw61xDS'},
    {'src': '../img/kitchenHomeAndDecoration/armarioDeCozinha.jpg', 'name': 'Armário de Cozinha (7 portas + 2 Gavetas)', 'link': 'https://www.amazon.com.br/Armario-Cozinha-Portas-Gavetas-Juliete/dp/B09M5BDKDN?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ZK7UR3RJTGK7&keywords=cozinha&qid=1674703424&sprefix=cozinha%2Caps%2C637&sr=8-41&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6&linkCode=ll1&tag=thasyo0a-20&linkId=6ebe2fdf94067dee71647198a5ceaae7&language=pt_BR&ref_=as_li_ss_tl'},
    {'src': '../img/kitchenHomeAndDecoration/cortinaCozinha.png', 'name': 'Cortina de Cozinha Rendada', 'link': 'https://shope.ee/6pSYYE8OeO'},
    {'src': '../img/kitchenHomeAndDecoration/aventalEstampado.png', 'name': 'Avental de Cozinha Estampado', 'link': 'https://shope.ee/3VC6aDDinG'},
    {'src': '../img/kitchenHomeAndDecoration/kit12pcsSiliconeEMadeira.jpg', 'name': 'KIT 12 Peças de Utensílios de Cozinha de Silicone e Madeira', 'link': 'https://www.amazon.com.br/12pc-Silicone-Madeira-Ultensilios-Cozinha/dp/B09HRDD6G6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2FX4HL777O0S0&keywords=cozinha&qid=1674703793&sprefix=cozinha%2Caps%2C205&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTkwyS1hYUkhHVEo5JmVuY3J5cHRlZElkPUEwNzY3MjgxMzkzTURXNjhKSjlXMCZlbmNyeXB0ZWRBZElkPUEwNTcxNjc0MUZGNjNQVTZFOE83WSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=ll1&tag=thasyo0a-20&linkId=61fa7ecbb23646eb7bb548e3487d090a&language=pt_BR&ref_=as_li_ss_tl'},
    {'src': '../img/kitchenHomeAndDecoration/fruteira.jpg', 'name': 'Fruteira de 4 andares', 'link': 'https://www.amazon.com.br/Fruteira-Andares-Preta-com-Rodas/dp/B099SBRPYZ?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2FX4HL777O0S0&keywords=cozinha&qid=1674703965&sprefix=cozinha%2Caps%2C205&sr=8-12&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&linkCode=ll1&tag=thasyo0a-20&linkId=8b03de0e374179f5a343f11bdf4c65c4&language=pt_BR&ref_=as_li_ss_tl'},
    {'src': '../img/kitchenHomeAndDecoration/raladorEFatiadorMultifuncional.jpg', 'name': 'Ralador e Fatiador Multifuncional', 'link': 'https://www.amazon.com.br/Ralador-Fatiador-Legumes-Mandoline-Multifuncional/dp/B09HN4NGC4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2FX4HL777O0S0&keywords=cozinha&qid=1674703965&sprefix=cozinha%2Caps%2C205&sr=8-17&linkCode=ll1&tag=thasyo0a-20&linkId=4ad11c048e3751fea96619bb37d1de40&language=pt_BR&ref_=as_li_ss_tl'},
    {'src': '../img/kitchenHomeAndDecoration/talheresInox20pcs.png', 'name': 'KIT 20 Peças de Talheres Inox', 'link': 'https://shope.ee/5fGbB0T8SX'},
    {'src': '../img/kitchenHomeAndDecoration/kitTabuaDeQueijoComTalheresECopos.jpg', 'name': 'KIT Tábua de Queijo com Talheres e Copos', 'link': 'https://www.amazon.com.br/t%C3%A1bua-queijo-talheres-copos-cerveja/dp/B0BNZHS5PY?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3H9RXS2CK7P4T&keywords=talheres&qid=1674704399&sprefix=talhere%2Caps%2C216&sr=8-4-spons&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRTJDQVhRQU44QjlYJmVuY3J5cHRlZElkPUEwODg2MDYxWU9QOEo5NFBGSjAwJmVuY3J5cHRlZEFkSWQ9QTA2NjY3NTIzTUIwNVhRWEpFNEFSJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ%3D%3D&linkCode=ll1&tag=thasyo0a-20&linkId=542ad404b76b14c4c7e98261e043723d&language=pt_BR&ref_=as_li_ss_tl'},
];

const carouselKitchen = document.querySelector("#carousel-kitchen");

const loadCardProductKitchen = (productKitchenData, carouselKitchen) => {

    productKitchenData.forEach((cardproduct) => {
      
      carouselKitchen.innerHTML += `     
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
  
  loadCardProductKitchen(productKitchenData, carouselKitchen);

$( () => {
    $("#carousel-kitchen").slick({
        infinite: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $(".prev-arrow-kitchen"),
        nextArrow: $(".next-arrow-kitchen"),
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



//carouselRoom



//carouselBedroom



//carouselTerrace