import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import Accordion from 'accordion-js';
// import ymaps from "ymaps";

knowledge();

const swiper = new Swiper('.swiper__transfer', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 50,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        // //   spaceBetween: 20
        },
        // when window width is >= 480px
        651: {
          slidesPerView: 2,
        //   spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
        //   spaceBetween: 40
        }
      }
});

const swiperAutopark = new Swiper('.swiper__autopark', {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        // //   spaceBetween: 20
        },
        // when window width is >= 480px
        651: {
          slidesPerView: 2,
        //   spaceBetween: 30
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
        //   spaceBetween: 40
        }
      }
});

//картинке задаем высоту как у секции
function knowledge(){
    let knowledge = document.querySelector('.knowledge');
    knowledge ? setHeight() : console.log('высота фоновой картинки не будет расчитана');
    function setHeight(){
        let captureheight = knowledge.offsetHeight;
        let capture = document.querySelector('.knowledge__background');
        capture.style.height = captureheight + 'px';
    }
}

const swiperAbout = new Swiper('.swiper__about', {
    slidesPerView: 2,
    loop: true,
    // centeredSlides: true,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        //   spaceBetween: 20
        },
        // when window width is >= 480px
        1350: {
          slidesPerView: 2,
        //   spaceBetween: 30
        },
        // when window width is >= 640px
        // 640: {
        //   slidesPerView: 4,
        //   spaceBetween: 40
        // }
      }
});

const swipercompany = new Swiper('.swiper__company', {
    slidesPerView: 4,
    spaceBetween: 55,
    loop: true,
    modules: [Pagination, Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        //   spaceBetween: 20
        },
        430: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        650: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 55
        },
        // when window width is >= 640px
        1250: {
          slidesPerView: 4,
        //   spaceBetween: 40
        }
      }
});

const swipervideo = new Swiper('.swiper__video', {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    modules: [Pagination],
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        //   spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1150: {
          slidesPerView: 3,
        //   spaceBetween: 40
        }
      }
});

const swiperExamples = new Swiper('.swiper__examples', {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    // },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        //   spaceBetween: 20
        },
        // when window width is >= 480px
        651: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1150: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }
});

const swiperTraly = new Swiper('.swiper__traly', {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        //   spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1150: {
          slidesPerView: 2,
          spaceBetween: 50
        }
      }
});

new Accordion('.accordion-container');


window.onload = function () {
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init() {
        // Создание карты.
        let myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [53.188659, 50.102807],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18
        });

        var myPlacemark = new ymaps.Placemark([53.188341, 50.104299],{
            balloonContent: 'Садовая улица, 86, Самара',
        },{
            preset: 'islands#redIcon',
            openBalloon: true
        });
        // var myGeoObject = new ymaps.GeoObject({
        //     geometry: {
        //         type: "Point", // тип геометрии - точка
        //         coordinates: [53.188341, 50.104299], // координаты точки
        //         fill: 'red'
        //     }
        // });

        // // Размещение геообъекта на карте.
        // myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
    }
}

// открываем модальное окно заявки
let buttonsClicks = document.querySelectorAll('[data-modal="order"]');
buttonsClicks ? openModal() : "элементов, вызывающих модальное окно не обнаружено";

function openModal(){
  let modal = document.querySelector('[data-modal="open"]');
  if(modal){
    buttonsClicks.forEach(element => {
      element.addEventListener('click', ()=>{
        modal.style.display = "block";
        setTimeout(() => {
          modal.classList.add('active');          
        }, 300);
        setTimeout(() => {
          modal.classList.add('animation');
        }, 500);
        let buttonClose = document.querySelector('[data-modal="close"]');
        buttonClose.addEventListener('click', ()=> {
          modal.classList.remove('animation');
          modal.classList.remove('active');
          modal.style.display = "none";
        })

      })
    });
  }
}