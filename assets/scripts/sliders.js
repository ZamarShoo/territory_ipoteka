if ($('.garanty-body')) {
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
}
  
if ($('.swiper-utp')) {
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
}

if ($('.sertificate-body')) {
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
}

if ($('.utp_business')) {
    const swiper_utp = new Swiper('.utp_business', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            0: {
                spaceBetween: 30,
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 3
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.utp_business_navigate__next',
          prevEl: '.utp_business_navigate__prev',
        },
    });
}

if ($('.utp_business')) {
    const swiper_houses = new Swiper('.houses_business__body', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1
            },
            640: {
                spaceBetween: 30,
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.houses_business_navigate__next',
          prevEl: '.houses_business_navigate__prev',
        },
    });
}

if ($('.garanty_wrapper__right')) {
    const swiper_garanty = new Swiper('.garanty_wrapper__right', {
        // Optional parameters
        slidesPerView: 1,
        loop: false,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        // Navigation arrows
        navigation: {
          nextEl: '.garanty_business_navigate__next',
          prevEl: '.garanty_business_navigate__prev',
        },
    });
}

if ($('.garanty_change__body')) {
    const swiper_garanty_change = new Swiper('.garanty_change__body', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.garanty_business_change_navigate__next',
          prevEl: '.garanty_business_change_navigate__prev',
        },
    });
}

if ($('.history_body')) {
    const swiper_history_change = new Swiper('.history_body', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1
            },
            640: {
                spaceBetween: 30,
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.hitory_change_navigate__next',
          prevEl: '.hitory_change_navigate__prev',
        },
    });
}

if ($('.programs-wrapper__body')) {
    const swiper_programs_wrapper__body = new Swiper('.programs-wrapper__body', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.programs_navigate__next',
          prevEl: '.programs_navigate__prev',
        },
    });
}

if ($('.case_main-wrapper__body')) {
    const swiper_programs_wrapper__body = new Swiper('.case_main-wrapper__body', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.case_main_navigate__next',
          prevEl: '.case_main_navigate__prev',
        },
    });
}

if ($('.first_slide__swiper')) {
    const first_slide__swiper = new Swiper('.first_slide__swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.first_slide__swiper_navigate__next',
          prevEl: '.first_slide__swiper_navigate__prev',
        },
    });
}

if ($('.command_body')) {
    const command_body = new Swiper('.command_body', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            640: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 4
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.command_navigate__next',
          prevEl: '.command_navigate__prev',
        },
    });
}