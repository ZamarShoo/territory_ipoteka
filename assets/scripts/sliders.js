const swiper = new Swiper('.garanty-body', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 3
        }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.garanty_navigate__next',
      prevEl: '.garanty_navigate__prev',
    },
});
  
const swiper_utp = new Swiper('.swiper-utp', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 40,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 3
        },
        1440: {
            spaceBetween: 30
        }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.utp_navigate__next',
      prevEl: '.utp_navigate__prev',
    },
});

const swiper_sert = new Swiper('.sertificate-body', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
        0: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        640: {
            spaceBetween: 20,
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.sertificate_navigate__next',
      prevEl: '.sertificate_navigate__prev',
    },
});