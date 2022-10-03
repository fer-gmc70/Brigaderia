const swiper = new Swiper('.swiper', {
    effect: 'cube',
    cubeEffect: {
      slideShadows: false,
    },
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    //cardsEffect: {
    //    perSlideOffset: 8,
    //    perSlideRotate: true,
    //    slideShadows: false,

        // ...
    //},
});