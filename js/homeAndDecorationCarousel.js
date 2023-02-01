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


//creating room cards home and decoration.
//carouselRoom
const productRoomData = [
  {'src': '../img/roomHomeAndDecoration/miniUmidificadorEAromatizador.png', 'name': 'Umidificador e Aromatizador de Ar', 'link': 'https://shope.ee/fs37JbeQj'},
  {'src': '../img/roomHomeAndDecoration/kit40PlacasPVC.png', 'name': 'KIT 40 Placas PVC', 'link': 'https://shope.ee/cMKJL81R'},
  {'src': '../img/roomHomeAndDecoration/03LedsEmUmaLampadaSemFio.png', 'name': '03 Leds sem fio para Lâmpada', 'link': 'https://shope.ee/1AoJijwQHx'},
  {'src': '../img/roomHomeAndDecoration/tapeteFelpudo.png', 'name': 'Tapete Felpudo', 'link': 'https://shope.ee/3fVIJN3dA6'},
  {'src': '../img/roomHomeAndDecoration/cortinaRoma.png', 'name': 'Cortina Roma', 'link': 'https://shope.ee/6KWPsg5eQS'},
  {'src': '../img/roomHomeAndDecoration/rackSuspensoBranco.png', 'name': 'Rack Suspenso Branco', 'link': 'https://shope.ee/89y44Ho8zQ'},
  {'src': '../img/roomHomeAndDecoration/kitMesaLateralECantoDeSofa.png', 'name': 'KIT Mesa Lateral', 'link': 'https://shope.ee/89y44QXEye'},
  {'src': '../img/roomHomeAndDecoration/quadroDecorativoPersonalizado.png', 'name': 'Quadro Decorativo Personalizado', 'link': 'https://shope.ee/5KdshNHiJo'},
  {'src': '../img/roomHomeAndDecoration/roloAdesivoTiraPelos.png', 'name': 'Rolo Adesivo Tira Pelos', 'link': 'https://shope.ee/6KWPtk0mbD'},
  {'src': '../img/roomHomeAndDecoration/mesaDeCentroSalaClassicOval.jpg', 'name': 'Mesa de Centro Para Sala Estilo Oval', 'link': 'https://www.amazon.com.br/Centro-Classic-Madeira-Maci%C3%A7a-Amendoa/dp/B09RX1PNR2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29M6G4LORCOFG&keywords=sala&qid=1675133923&sprefix=sala%2Caps%2C235&sr=8-18&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&linkCode=ll1&tag=thasyo0a-20&linkId=0e9b6fd77ab79109f65818b1ca13f826&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/roomHomeAndDecoration/sofa4lugares.jpg', 'name': 'Sofá 4 Lugares', 'link': 'https://www.amazon.com.br/Sof%C3%A1-Lugares-Retr%C3%A1til-Reclin%C3%A1vel-Fran%C3%A7a/dp/B0BMW7KGRN?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IWGJ5SUBFZS5&keywords=sof%C3%A1&qid=1675134131&sprefix=sof%C3%A1%2Caps%2C168&sr=8-5&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&linkCode=ll1&tag=thasyo0a-20&linkId=262e69ffcacd56cd5fb9c2aa0c1bd477&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/roomHomeAndDecoration/poltronaDecorativa.jpg', 'name': 'Poltrona Decorativa', 'link': 'https://www.amazon.com.br/Poltrona-Decorativa-Marrom-quarto-escrit%C3%B3rio/dp/B086HN6YY8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=13T1BL43LPC5P&keywords=poltrona&qid=1675134329&sprefix=poltron%2Caps%2C287&sr=8-5&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&linkCode=ll1&tag=thasyo0a-20&linkId=3dde9d48d27db25a09f4c6fc52750ec0&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/roomHomeAndDecoration/poltronaElevation.jpg', 'name': 'Poltrona Elevation', 'link': 'https://www.amazon.com.br/Poltrona-Papai-elevation-Preto-Wall/dp/B09NCBNXJV?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=13T1BL43LPC5P&keywords=poltrona&qid=1675134409&sprefix=poltron%2Caps%2C287&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMEJTTEFHVVlUMEZDJmVuY3J5cHRlZElkPUEwNDc5MTYzM0JOWDZDWlRKTkZMRyZlbmNyeXB0ZWRBZElkPUEwNjA1NDUwMk1HNFE2WTc1R1hUMiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=ll1&tag=thasyo0a-20&linkId=6cb4677b59997c59bde3b4f2dd825d46&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/roomHomeAndDecoration/puffGigante.jpg', 'name': 'Puff Gigante', 'link': 'https://www.amazon.com.br/Gigante-Redondo-Enchimento-Suede-1-40m/dp/B092SY32M7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1BUL12QR4BZGU&keywords=puff&qid=1675134499&sprefix=puf%2Caps%2C246&sr=8-11&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&linkCode=ll1&tag=thasyo0a-20&linkId=ca862e7c43ba34353ef4a4163d2f63fb&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/roomHomeAndDecoration/folhasCordaoGuirlandaVerde.png', 'name': 'Folhas Guirlanda Verde', 'link': 'https://shope.ee/5pa9Jkb41Q'},
  {'src': '../img/roomHomeAndDecoration/kit2PuffThorRedondo.jpg', 'name': 'KIT 02 Puff Thor Redondo', 'link': 'https://www.amazon.com.br/Puff-Thor-Redondo-Luxo-Veludo/dp/B09SQD7RLQ?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1BUL12QR4BZGU&keywords=puff&qid=1675134676&sprefix=puf%2Caps%2C246&sr=8-9&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&linkCode=ll1&tag=thasyo0a-20&linkId=81b64c8ec18eeb050d5fc7910ae5ea8d&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/roomHomeAndDecoration/painelParaTvAte32Polegadas.jpg', 'name': 'Painel para TV', 'link': 'https://www.amazon.com.br/Painel-Sala-Para-Polegadas-Turim/dp/B0B2F2Q1WR?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=XD35M15O2VD8&keywords=sala+de+estar&qid=1675134816&sprefix=sala+de+estar%2Caps%2C156&sr=8-50&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&linkCode=ll1&tag=thasyo0a-20&linkId=8431eb9ff038c20cf562e2903997ae61&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/roomHomeAndDecoration/aparadorBuffet3Portas.jpg', 'name': 'Aparador Buffet 3 Portas', 'link': 'https://www.amazon.com.br/Aparador-Buffet-Portas-M%C3%B3veis-Germai/dp/B099R467SW?crid=2NGHROHNR3B5H&keywords=moveis+sala+de+estar&qid=1675134968&sprefix=sala+de+estar%2Caps%2C350&sr=8-8&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678&linkCode=ll1&tag=thasyo0a-20&linkId=d91975f3debf1132c1b97de6ed589c97&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/roomHomeAndDecoration/bandejaEsteiraParaSofa.png', 'name': 'Bandeja Esteira para Sofá', 'link': 'https://shope.ee/3KsoLjVphQ'},
  {'src': '../img/roomHomeAndDecoration/miniUmidificadorEggPortatil.png', 'name': 'Mini Umidificador Egg Portátil', 'link': 'https://shope.ee/1L7jyLfBIn'},
];

const carouselRoom = document.querySelector("#carousel-room");

const loadCardProductRoom = (productRoomData, carouselRoom) => {

  productRoomData.forEach((cardproduct) => {
    
    carouselRoom.innerHTML += `     
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

loadCardProductRoom(productRoomData, carouselRoom);

$( () => {
  $("#carousel-room").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-room"),
      nextArrow: $(".next-arrow-room"),
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

//creating bedroom cards home and decoration.
//carouselBedroom

const productBedroomData = [
  {'src': '../img/bedroomHomeAndDecoration/umidificadorDeChamas.png', 'name': 'Umidificador de Ar Personalizado', 'link': 'https://shope.ee/9zPjk5bzeu'},
  {'src': '../img/bedroomHomeAndDecoration/tapeteFelpudoAntiDerrapante.png', 'name': 'Tapete Felpudo Antiderrapante', 'link': 'https://shope.ee/9emtLvJ5Fx'},
  {'src': '../img/bedroomHomeAndDecoration/fitaLed.png', 'name': 'Fita Led', 'link': 'https://shope.ee/8pDmMxpltR'},
  {'src': '../img/bedroomHomeAndDecoration/quadroDecorativoGamer.png', 'name': 'Quadro Decorativo Gamer', 'link': 'https://shope.ee/10Uv2l21js'},
  {'src': '../img/bedroomHomeAndDecoration/BonecosVingadores.png', 'name': 'Colecionáveis dos Vingadores', 'link': 'https://shope.ee/5ztb05W93K'},
  {'src': '../img/bedroomHomeAndDecoration/sapateira.png', 'name': 'Sapateira', 'link': 'https://shope.ee/2VJKwBSIyW'},
  {'src': '../img/bedroomHomeAndDecoration/capaImpermeavelDeColchao.png', 'name': 'Capa Impermeável de Colchão', 'link': 'https://shope.ee/2fd92INMJd'},
  {'src': '../img/bedroomHomeAndDecoration/mesaDeCabeceira.jpg', 'name': 'Mesa de Cabeceira', 'link': 'https://www.amazon.com.br/Cabeceira-Quarto-Gavetas-Estilo-Branco/dp/B0B48X11P2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E3ON2H0AXENR&keywords=quarto&qid=1675215455&sprefix=quarto%2Caps%2C225&sr=8-7&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&th=1&linkCode=ll1&tag=thasyo0a-20&linkId=3a554973dc29d5a5ef4aa608d253ebbe&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/espelho.jpg', 'name': 'Espelho com Moldura Decorativa', 'link': 'https://www.amazon.com.br/Espelho-Moldura-Decorativa-Madeira-Rustica/dp/B09WZC6ZSR?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E3ON2H0AXENR&keywords=quarto&qid=1675215642&sprefix=quarto%2Caps%2C225&sr=8-9&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&th=1&linkCode=ll1&tag=thasyo0a-20&linkId=d580bd0333b60a969cfdfa6552064ab3&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/cabeceiraPainelSuspensa.jpg', 'name': 'Cabeceira com Painel Suspenso', 'link': 'https://www.amazon.com.br/Cabeceira-Painel-Suspensa-Estofada-Camur%C3%A7a/dp/B09XQP58S1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E3ON2H0AXENR&keywords=quarto&qid=1675215642&sprefix=quarto%2Caps%2C225&sr=8-18&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&th=1&linkCode=ll1&tag=thasyo0a-20&linkId=abb404952276f8f1fa01e9c6f093e168&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/luminariaLuaCheia.jpg', 'name': 'Luminária Lua Cheia', 'link': 'https://www.amazon.com.br/Luminaria-Touch-Cheia-Abajur-Decoracao/dp/B07NDXS9L3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E3ON2H0AXENR&keywords=quarto&qid=1675215642&sprefix=quarto%2Caps%2C225&sr=8-26&linkCode=ll1&tag=thasyo0a-20&linkId=07f4310afabf459e99770cfcefa39e99&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/luminariaDeMesaArticulavel.jpg', 'name': 'Luminária Pixar Articulável', 'link': 'https://www.amazon.com.br/Lumin%C3%A1ria-Articulavel-Pixar-Garra-Quarto/dp/B084Q59N8W?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3E3ON2H0AXENR&keywords=quarto&qid=1675215642&sprefix=quarto%2Caps%2C225&sr=8-54&linkCode=ll1&tag=thasyo0a-20&linkId=2024b341fde7c4f384dd727691ff0950&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/03NinchosDeParede.jpg', 'name': '03 Ninchos de Parede', 'link': 'https://www.amazon.com.br/Nichos-Livros-Parede-Quarto-Quadrado/dp/B0BMW9YW52?content-id=amzn1.sym.2ab705c2-195f-4539-83c0-86683b4952d3%3Aamzn1.sym.2ab705c2-195f-4539-83c0-86683b4952d3&keywords=quarto+decora%C3%A7%C3%A3o&pd_rd_r=fee6ca5f-2db1-48ec-9eb6-78bc9a366b4a&pd_rd_w=68B5N&pd_rd_wg=0wwmd&pf_rd_p=2ab705c2-195f-4539-83c0-86683b4952d3&pf_rd_r=QZEFTXQFN35EQYQXE0EV&qid=1675216165&sr=8-10&linkCode=ll1&tag=thasyo0a-20&linkId=757e82fbfbc0b18ec3b327e13fdec4e0&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/escrivaninhaHomeOffice.jpg', 'name': 'Escrivaninha Home Office', 'link': 'https://www.amazon.com.br/Escrivaninha-Mesa-Computador-Office-Madesa/dp/B09GYN68CN?keywords=escrivaninha&qid=1675216360&sprefix=escrivainha%2Caps%2C220&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQU5ZQUlGNFVNVVVDJmVuY3J5cHRlZElkPUEwMjE5OTY3V1NCWVEwMzg2STgmZW5jcnlwdGVkQWRJZD1BMDE5NDU1NUNGUTJWUlJBWDkxVCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&linkCode=ll1&tag=thasyo0a-20&linkId=9c0fec9efc0c32c051a73bd53e11a285&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/escrivaninhaGamer.jpg', 'name': 'Escrivaninha Gamer', 'link': 'https://www.amazon.com.br/Mesa-Computador-Gamer-Escrivaninha-Madesa/dp/B09GYPZQK6?keywords=escrivaninha&qid=1675216440&sprefix=escrivainha%2Caps%2C220&sr=8-24-spons&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUjVGQlE4VlBSSVE5JmVuY3J5cHRlZElkPUEwMDgzMzkwMkRGRDMyVVJPSk85NyZlbmNyeXB0ZWRBZElkPUEwMTk0NDU1VE9PVDNFRjM2Q1U4JndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1&linkCode=ll1&tag=thasyo0a-20&linkId=701061808206d9a14bd09b91025436fa&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/escrivaninhaTrevallaKuadra.jpg', 'name': 'Escrivaninha Trella Kuadra', 'link': 'https://www.amazon.com.br/Escrit%C3%B3rio-Diretor-Estilo-Industrial-Kuadra/dp/B089Y3S71L?keywords=escrivaninha&qid=1675216440&sprefix=escrivainha%2Caps%2C220&sr=8-6&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&th=1&linkCode=ll1&tag=thasyo0a-20&linkId=0373cbac8f422da204298941ce355294&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/camaBox.jpg', 'name': 'Cama Box Casal', 'link': 'https://www.amazon.com.br/Casal-Conjugado-Granada-Umaflex-Branco/dp/B0B61PX81D?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3SQQY3E2VACFS&keywords=cama&qid=1675216721&sprefix=cama%2Caps%2C289&sr=8-5&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&linkCode=ll1&tag=thasyo0a-20&linkId=e23e52a640cb9d34e44d119c33c4b281&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/camaSolteiroCom02Gavetas.jpg', 'name': 'Cama Box Solteiro', 'link': 'https://www.amazon.com.br/Conjunto-Solteiro-Auxiliar-Siena-M%C3%B3veis/dp/B07RYB8TLC?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3SQQY3E2VACFS&keywords=cama&qid=1675216841&sprefix=cama%2Caps%2C289&sr=8-12&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&linkCode=ll1&tag=thasyo0a-20&linkId=807f60e7e087a9b3c67cc8583b5fe390&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/guardaRoupaCasalEspelhado.jpg', 'name': 'Guarda Roupa de Casal Espelhado', 'link': 'https://www.amazon.com.br/Guarda-Espelhado-Espelho-Gavetas-Yescasa/dp/B09B9D1JM9?keywords=guarda+roupa&qid=1675216952&sprefix=guarda+%2Caps%2C189&sr=8-6&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&linkCode=ll1&tag=thasyo0a-20&linkId=436199d3a592cba2446ac937ad87b1b6&language=pt_BR&ref_=as_li_ss_tl'},
  {'src': '../img/bedroomHomeAndDecoration/guardaRoupaSolteiro.jpg', 'name': 'Guarda Roupa de Solteiro Espelhado', 'link': 'https://www.amazon.com.br/Guarda-Solteiro-Gavetas-Espelho-Yescasa/dp/B09SJPG7TL?keywords=guarda+roupa&qid=1675217010&sprefix=guarda+%2Caps%2C189&sr=8-10&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&linkCode=ll1&tag=thasyo0a-20&linkId=c7ddcd42684b54598b98c9205501602a&language=pt_BR&ref_=as_li_ss_tl'},
];

const carouselBedroom = document.querySelector("#carousel-bedroom");

const loadCardProductBedroom = (productBedroomData, carouselBedroom) => {

  productBedroomData.forEach((cardproduct) => {
    
    carouselBedroom.innerHTML += `     
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

loadCardProductBedroom(productBedroomData, carouselBedroom);

$( () => {
  $("#carousel-bedroom").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-bedroom"),
      nextArrow: $(".next-arrow-bedroom"),
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


//carouselTerrace