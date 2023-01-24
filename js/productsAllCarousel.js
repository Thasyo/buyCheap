//creating product card home and decoration
const productHomeAndDecorationData = [
  {'src':'../img/houseDecorationProductsAll/miniProcessadorEletrico.png', 'name': 'Mini Processador Elétrico', 'link': 'https://shope.ee/5UwwUTPits'},
  {'src':'../img/houseDecorationProductsAll/tapeteFelpudo.png', 'name': 'Tapete Felpudo', 'link': 'https://shope.ee/3fVIJN3dA6'},
  {'src':'../img/houseDecorationProductsAll/kitPotePlastico16pecas.png', 'name': 'KIT de Potes Plásticos (16 peças)', 'link': 'https://shope.ee/30FbWSG1Wy'},
  {'src':'../img/houseDecorationProductsAll/cortina.png', 'name': 'Cortina Roma', 'link': 'https://shope.ee/2KzujQrNeT'},
  {'src':'../img/houseDecorationProductsAll/amoladorFacas.png', 'name': 'Amolador de Faca Aço Inox', 'link': 'https://shope.ee/500fuQjLHM'},
  {'src':'../img/houseDecorationProductsAll/organizadorColmeia.png', 'name': 'Organizador Colmeia', 'link': 'https://shope.ee/6UpThL4j38'},
  {'src':'../img/houseDecorationProductsAll/sapateira.png', 'name': 'Sapateira', 'link': 'https://shope.ee/2VJKwBSIyW'},
  {'src':'../img/houseDecorationProductsAll/miniLiquidificador.png', 'name': 'Mini Liquidificador Portátil', 'link': 'https://shope.ee/5Kdc7kBfe6'},
  {'src':'../img/houseDecorationProductsAll/chuveirinhoTorneira.png', 'name': 'Chuveirinho Torneira Retrátil 360°', 'link': 'https://shope.ee/3fVO8uH6Ui'},
  {'src':'../img/houseDecorationProductsAll/bombaEletrica.png', 'name': 'Bomba Elétrica Universal', 'link': 'https://shope.ee/500ljmweXI'},
];

const carouselDecoration = document.querySelector(".carousel-decoration");

const loadCardProductHomeAndDecoration = (productHomeAndDecorationData, carouselDecoration) => {

  productHomeAndDecorationData.forEach((cardproduct) => {
    
    carouselDecoration.innerHTML += `
    
      <div class="card-product">
        <div class="img-product">
          <img class="image" src="${cardproduct.src}" alt="">
        </div>
        <div class="content-product">
          <h3 class="name-product">${cardproduct.name}</h3>
          <a href="${cardproduct.link}" target="_blank">Detalhes do produto</a>
        </div>
      </div>

    `;
    
  })  

};

loadCardProductHomeAndDecoration(productHomeAndDecorationData, carouselDecoration)

//CasaDecoraçãoCarousel
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


//creating product card stationarystore.
const productStationarystoreData = [

  {'src':'../img/stationarystoreProductsAll/estojoDeAlcaNylon.png', 'name': 'Estojo de Nylon', 'link': 'https://shope.ee/4Kl4072SVl'},
  {'src':'../img/stationarystoreProductsAll/CanetaDeAssinatura.png', 'name': 'Caneta de Assinatura', 'link': 'https://shope.ee/1fkIpZcZt2'},
  {'src':'../img/stationarystoreProductsAll/cadernoInteligente.png', 'name': 'Caderno Inteligente de Disco', 'link': 'https://shope.ee/1L7SRRS8nI'},
  {'src':'../img/stationarystoreProductsAll/cadernoUniversitario.png', 'name': 'Caderno Universitário', 'link': 'https://shope.ee/frleF7b61'},
  {'src':'../img/stationarystoreProductsAll/bolsaEscola.png', 'name': 'Bolsa Feminina de Couro', 'link': 'https://shope.ee/3VBx1oIztA'},
  {'src':'../img/stationarystoreProductsAll/bolsaTransversal.png', 'name': 'Bolsa Masculina Transversal', 'link': 'https://shope.ee/10Uc3LyPbN'},
  {'src':'../img/stationarystoreProductsAll/bolsaElastico.png', 'name': '1000 Elásticos para Cabelo Feminino', 'link': 'https://shope.ee/7Ui5nca2ls'},
  {'src':'../img/stationarystoreProductsAll/canetaPersonalizada.png', 'name': 'Caneta Personalizada', 'link': 'https://shope.ee/3AZ7Z5MPCq'},
  {'src':'../img/stationarystoreProductsAll/lapisInfinito.png', 'name': 'Lápis Infinito', 'link': 'https://shope.ee/9p61VYMZZg'},
  {'src':'../img/stationarystoreProductsAll/canetaGelMUJI.png', 'name': 'Caneta Gel MUJI Japonesa', 'link': 'https://shope.ee/3VBxy3cEfS'},

];

const carouselStationarystore = document.querySelector(".carousel-stationarystore");

const loadCardProductStationarystore = (productStationarystoreData, carouselStationarystore) => {

  productStationarystoreData.forEach((cardproduct) => {
    
    carouselStationarystore.innerHTML += `
    
      <div class="card-product">
        <div class="img-product">
          <img class="image" src="${cardproduct.src}" alt="">
        </div>
        <div class="content-product">
          <h3 class="name-product">${cardproduct.name}</h3>
          <a href="${cardproduct.link}" target="_blank">Detalhes do produto</a>
        </div>
      </div>

    `;
    
  })  

};

loadCardProductStationarystore(productStationarystoreData, carouselStationarystore);


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


//creating product card stationarystore.
const productTechData = [

  {'src':'../img/techProductsAll/kitTecladoMouseBranco.png', 'name': 'KIT Teclado e Mouse Gamer', 'link': 'https://shope.ee/qBCohRYDw'},
  {'src':'../img/techProductsAll/tecladoGamerEvolut.png', 'name': 'Teclado Gamer Evolut', 'link': 'https://shope.ee/89xnYR6ABm'},
  {'src':'../img/techProductsAll/miniTeclado.png', 'name': 'Mini Teclado', 'link': 'https://shope.ee/1q3k0rkSmG'},
  {'src':'../img/techProductsAll/mouseGamerRayden.png', 'name': 'Mouse Gamer Rayden', 'link': 'https://shope.ee/7Ui6lJoLMO'},
  {'src':'../img/techProductsAll/mouseGamerRosa.png', 'name': 'Mouse Gamer Cor Rosa', 'link': 'https://shope.ee/8KHDkuIx0a'},
  {'src':'../img/techProductsAll/mouseWirelles.png', 'name': 'Mouse Wireless Recarregável', 'link': 'https://shope.ee/20NADMjAtl'},
  {'src':'../img/techProductsAll/foneDeOuvidoBluetooh.png', 'name': 'Fones de Ouvido via Bluetooh', 'link': 'https://shope.ee/8KHDl612eI'},
  {'src':'../img/techProductsAll/Y50TWSsemfio.png', 'name': 'Y50 TWS Sem fio', 'link': 'https://shope.ee/6f8zm6aZKS'},
  {'src':'../img/techProductsAll/HeadsetJBL.png', 'name': 'HeadSet JBL', 'link': 'https://shope.ee/9p61Xy1ZuE'},
  {'src':'../img/techProductsAll/pendrive.png', 'name': 'Pen Drive San Disk', 'link': 'https://shope.ee/2VJQohSMwD'},

];

const carouselTech = document.querySelector(".carousel-tech");

const loadCardProductTech = (productTechData, carouselTech) => {

  productTechData.forEach((cardproduct) => {
    
    carouselTech.innerHTML += `
    
      <div class="card-product">
        <div class="img-product">
          <img class="image" src="${cardproduct.src}" alt="">
        </div>
        <div class="content-product">
          <h3 class="name-product">${cardproduct.name}</h3>
          <a href="${cardproduct.link}" target="_blank">Detalhes do produto</a>
        </div>
      </div>

    `;
    
  })  

};

loadCardProductTech(productTechData, carouselTech);


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


//creating product card toys.
const productToysData = [

  {'src':'../img/toysProductsAll/tenisFeminino.png', 'name': 'Tênis Feminino Club Happy', 'link': 'https://shope.ee/4V4WqB9XRA'},
  {'src':'../img/toysProductsAll/tenisMasculino.png', 'name': 'Tênis Masculino Super Hero', 'link': 'https://shope.ee/7A5I1AAqCP'},
  {'src':'../img/toysProductsAll/coturnoFeminino.png', 'name': 'Coturno Feminino', 'link': 'https://shope.ee/6UpbE0kgaH'},
  {'src':'../img/toysProductsAll/CalcaJeansJogger.png', 'name': 'Calça Jeans Jogger (1-8 anos)', 'link': 'https://shope.ee/5AKDdcjsqu'},
  {'src':'../img/toysProductsAll/albumInfantil.png', 'name': 'Álbum Infantil  (300 Fotos)', 'link': 'https://shope.ee/7KOiDfEIPg'},
  {'src':'../img/toysProductsAll/meiaSapatinho.png', 'name': 'Meia Sapatinho Infantil', 'link': 'https://shope.ee/6pSRcnNVoG'},
  {'src':'../img/toysProductsAll/bodyTematicoBebe.png', 'name': 'Body Temático Infantil', 'link': 'https://shope.ee/8pDW0ZHwWm'},
  {'src':'../img/toysProductsAll/vestidoFeminino.png', 'name': 'Vestido Feminino Infantil', 'link': 'https://shope.ee/20NBs3TXua'},
  {'src':'../img/toysProductsAll/kit4camisasUnissex.png', 'name': 'KIT 4 Camisetas Unissex', 'link': 'https://shope.ee/5Ux42eYJnc'},
  {'src':'../img/toysProductsAll/vestidoFemininoMaisTiara.png', 'name': 'Vestido Infantil + Tiara', 'link': 'https://shope.ee/1fkLTqge7U'},

];

const carouselToys = document.querySelector(".carousel-toys");

const loadCardProductToys = (productToysData, carouselToys) => {

  productToysData.forEach((cardproduct) => {
    
    carouselToys.innerHTML += `
    
      <div class="card-product">
        <div class="img-product">
          <img class="image" src="${cardproduct.src}" alt="">
        </div>
        <div class="content-product">
          <h3 class="name-product">${cardproduct.name}</h3>
          <a href="${cardproduct.link}" target="_blank">Detalhes do produto</a>
        </div>
      </div>

    `;
    
  })  

};

loadCardProductToys(productToysData, carouselToys);

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


//creating product card accessories.
const productAccessoriesData = [

  {'src':'../img/accessoriesProductsAll/colarPunkFem.png', 'name': 'Colar Estilo Punk de Corrente Grossa', 'link': 'https://shope.ee/9p63FITksU'},
  {'src':'../img/accessoriesProductsAll/correnteMascIcedOut.png', 'name': 'Corrente Masculina Iced Out', 'link': 'https://shope.ee/99qMSAynxo'},
  {'src':'../img/accessoriesProductsAll/ConjuntoPulseiraRelogioFem.png', 'name': 'Conjungo Feminino (Relógio + Pulseira)', 'link': 'https://shope.ee/6zlrsOSKTA'},
  {'src':'../img/accessoriesProductsAll/BraceleteMascCouro.png', 'name': 'Bracelete de Couro', 'link': 'https://shope.ee/4V4Wttmtfc'},
  {'src':'../img/accessoriesProductsAll/3pcsTornozeleiraFem.png', 'name': '3pcs Tornozeleira Feminina', 'link': 'https://shope.ee/4V4Wu2evkO'},
  {'src':'../img/accessoriesProductsAll/correnteComPulseiraBanhadoAPrataMasc.png', 'name': 'Corrente + Pulseira Banhado a Prata', 'link': 'https://shope.ee/2L02KFV8G8'},
  {'src':'../img/accessoriesProductsAll/pulseiraDePrataFem.png', 'name': 'Pulseira Feminina de Prata', 'link': 'https://shope.ee/4V4WuMx71V'},
  {'src':'../img/accessoriesProductsAll/relogioMascGenebraComPulseiraDeCouro.png', 'name': 'Relógio Genebra Com Pulseira De Couro', 'link': 'https://shope.ee/20NBvtCo8O'},
  {'src':'../img/accessoriesProductsAll/BrincosUnissex.png', 'name': 'Brincos de Prata Unissex', 'link': 'https://shope.ee/3VBziqxAg4'},
  {'src':'../img/accessoriesProductsAll/relogioMascCurrenDataQuartz.png', 'name': 'Relógio Curren Data Quartz', 'link': 'https://shope.ee/1L7V8xPT1k'},

];

const carouselAccessories = document.querySelector(".carousel-accessories");

const loadCardProductAccessories = (productAccessoriesData, carouselAccessories) => {

  productAccessoriesData.forEach((cardproduct) => {
    
    carouselAccessories.innerHTML += `
    
      <div class="card-product">
        <div class="img-product">
          <img class="image" src="${cardproduct.src}" alt="">
        </div>
        <div class="content-product">
          <h3 class="name-product">${cardproduct.name}</h3>
          <a href="${cardproduct.link}" target="_blank">Detalhes do produto</a>
        </div>
      </div>

    `;
    
  })  

};

loadCardProductAccessories(productAccessoriesData, carouselAccessories);

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


//creating product card clothes.
const productClothesData = [

  {'src':'../img/clothesProductsAll/camisaMangaCurtaDecoteRedondo.png', 'name': 'Camisa Manga Curta e Decote Redondo', 'link': 'https://shope.ee/10UfF0OWK9'},
  {'src':'../img/clothesProductsAll/camisaFemininaDeAlgodao.png', 'name': 'Camisa Feminina de Algodão', 'link': 'https://shope.ee/1Ao5SKK5lh'},
  {'src':'../img/clothesProductsAll/moletomForroLa.png', 'name': 'Moletom com Forro de Lã', 'link': 'https://shope.ee/4fNxbwjJOE'},
  {'src':'../img/clothesProductsAll/blusaDeRendaMangaLonga.png', 'name': 'Blusa de Renda com Manga Longa', 'link': 'https://shope.ee/10UfGAHMki'},
  {'src':'../img/clothesProductsAll/calcaJeansSlimOriginal.png', 'name': 'Calça Jeans Slim Original', 'link': 'https://shope.ee/8zWwmAqwZW'},
  {'src':'../img/clothesProductsAll/MoletomOhYesFem.png', 'name': 'Moletom Oh Yes Feminino', 'link': 'https://shope.ee/5pZv1C4CMz'},
  {'src':'../img/clothesProductsAll/bermudasMoletom.png', 'name': 'KIT 5 Bermudas Moletom', 'link': 'https://shope.ee/1q3mF5394J'},
  {'src':'../img/clothesProductsAll/vestidoTubinhoGolaAlta.png', 'name': 'Vestido Tubinho de Gola Alta', 'link': 'https://shope.ee/8pDWaveBZA'},
  {'src':'../img/clothesProductsAll/sapatenisMasc.png', 'name': 'Sapatênis Casual Masculino', 'link': 'https://shope.ee/qBF4g686y'},
  {'src':'../img/clothesProductsAll/sandaliaRasteiraScarpin.png', 'name': 'Sandália Rasteira Scarpin', 'link': 'https://shope.ee/4Kl7Eyvpa8'},

];

const carouselClothes = document.querySelector(".carousel-clothes");

const loadCardProductclothes = (productClothesData, carouselClothes) => {

  productClothesData.forEach((cardproduct) => {
    
    carouselClothes.innerHTML += `
    
      <div class="card-product">
        <div class="img-product">
          <img class="image" src="${cardproduct.src}" alt="">
        </div>
        <div class="content-product">
          <h3 class="name-product">${cardproduct.name}</h3>
          <a href="${cardproduct.link}" target="_blank">Detalhes do produto</a>
        </div>
      </div>

    `;
    
  })  

};

loadCardProductclothes(productClothesData, carouselClothes);


//ClothesCarousel
$( () => {
  $(".carousel-clothes").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-clothes"),
      nextArrow: $(".next-arrow-clothes"),
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


//creating product card Books.
const productBooksData = [

  {'src':'../img/booksProductsAll/eAssimQueAcaba.png', 'name': '', 'link': 'https://www.amazon.com.br/Assim-que-Acaba-Colleen-Hoover/dp/8501112518?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352226&sprefix=livros%2Caps%2C186&sr=8-5&linkCode=ll1&tag=thasyo0a-20&linkId=d0885fc28316408cc10901faf94e0fc2&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/eAssimQueComeca.png', 'name': '', 'link': 'https://www.amazon.com.br/assim-que-come%C3%A7a-Vol-acaba-ebook/dp/B0BDSB3YLP?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-8&linkCode=ll1&tag=thasyo0a-20&linkId=0335cf5e14ab4e6bf3789f1da7578857&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/todasAsSuasImPerfeicoes.png', 'name': '', 'link': 'https://www.amazon.com.br/Todas-as-suas-im-perfei%C3%A7%C3%B5es/dp/8501117684?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-7&linkCode=ll1&tag=thasyo0a-20&linkId=75c510e0ba7b66212ba8433b5cfacf1a&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/aBibliotecaDaMeiaNoite.png', 'name': '', 'link': 'https://www.amazon.com.br/Biblioteca-Meia-Noite-Matt-Haig/dp/6558380544?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-9&linkCode=ll1&tag=thasyo0a-20&linkId=5ec670f857a4bd1631ae73e7b3f14880&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/asCoisasQueSoVeQuandoDesacelera.png', 'name': '', 'link': 'https://www.amazon.com.br/coisas-que-voc%C3%AA-quando-desacelera/dp/8543105293?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-11&linkCode=ll1&tag=thasyo0a-20&linkId=9b030f20de66b3ae539ba8ae795ae33b&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/aPacienteSilenciosa.png', 'name': '', 'link': 'https://www.amazon.com.br/paciente-silenciosa-Alex-Michaelides/dp/8501116432?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-12&linkCode=ll1&tag=thasyo0a-20&linkId=8022c4825889b73bfae3a849706d0910&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/paraTodaEternidade.png', 'name': '', 'link': 'https://www.amazon.com.br/Para-Toda-Eternidade-Conhecendo-mundo/dp/8594541708?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-23-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUFRXNUVZSzBPWkQ3JmVuY3J5cHRlZElkPUEwNTQ0NDY0OEdTOVpLQ0dZRjFKJmVuY3J5cHRlZEFkSWQ9QTA5ODA1ODhNOVlFRTRSVlZTUkImd2lkZ2V0TmFtZT1zcF9tdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&linkCode=ll1&tag=thasyo0a-20&linkId=99efe314262427ddcede279cf2c733f8&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/oHomemMaisRicoDaBabilônia.png', 'name': '', 'link': 'https://www.amazon.com.br/Homem-Mais-Rico-Babil%C3%B4nia/dp/8595081530?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-19&linkCode=ll1&tag=thasyo0a-20&linkId=7f51171cef0566277418d065ec521ea3&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/umaBreveHistoriaDoMundo.png', 'name': '', 'link': 'https://www.amazon.com.br/Uma-Breve-Hist%C3%B3ria-do-Mundo/dp/8539507676?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-24-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUFRXNUVZSzBPWkQ3JmVuY3J5cHRlZElkPUEwNTQ0NDY0OEdTOVpLQ0dZRjFKJmVuY3J5cHRlZEFkSWQ9QTA3OTg1OTFMT1lJU0VUWTNBSUcmd2lkZ2V0TmFtZT1zcF9tdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&linkCode=ll1&tag=thasyo0a-20&linkId=f5dd0aa9d433951b9ce265eaadee9f12&language=pt_BR&ref_=as_li_ss_tl'},
  {'src':'../img/booksProductsAll/mindset.png', 'name': '', 'link': 'https://www.amazon.com.br/Mindset-Carol-S-Dweck/dp/8547000240?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EERLKQZO1YPA&keywords=livros&qid=1674352904&sprefix=livros%2Caps%2C186&sr=8-26&linkCode=ll1&tag=thasyo0a-20&linkId=f31ce962f84d1179c865e7ecb1968504&language=pt_BR&ref_=as_li_ss_tl'},

];

const carouselBooks = document.querySelector(".carousel-books");

const loadCardProductBooks = (productBooksData, carouselBooks) => {

  productBooksData.forEach((cardproduct) => {
    
    carouselBooks.innerHTML += `
    
      <div class="card-product">
        <div class="img-product">
          <img class="image" src="${cardproduct.src}" alt="">
        </div>
        <div class="content-product">
          <h3 class="name-product">${cardproduct.name}</h3>
          <a href="${cardproduct.link}" target="_blank">Detalhes do produto</a>
        </div>
      </div>

    `;
    
  })  

};

loadCardProductBooks(productBooksData, carouselBooks);


//BooksCarousel
$( () => {
  $(".carousel-books").slick({
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev-arrow-books"),
      nextArrow: $(".next-arrow-books"),
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