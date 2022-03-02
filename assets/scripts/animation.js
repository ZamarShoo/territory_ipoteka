var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 500,
    loop: true
  });
  
  // Add children
  tl
  .add({
    targets: ['.loader .dot-1', '.loader .dot-2', '.loader .dot-3'],
    opacity: 1,
  })
  .add({
    targets: '.loader .dot-1',
    translateX: 70,
  })
  .add({
    targets: '.loader .dot-2',
    translateX: 70,
    delay: 200
  })
  .add({
    targets: '.loader .dot-3',
    translateX: 70,
    delay: 200
  })
  .add({
    targets: ['.loader .dot-1', '.loader .dot-2', '.loader .dot-3'],
    opacity: 0,
  });


var first_slide = anime({
  targets: '.line-drawing',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  duration: 6000,
  delay: function(el, i) { return i * 250 },
});

if ($('.first_slide__swiper')) {
  const first_slide__swiper = new Swiper('.first_slide__swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      allowTouchMove: false,
      // Navigation arrows
      // navigation: {
      //   nextEl: '.first_slide__swiper_navigate__next',
      //   prevEl: '.first_slide__swiper_navigate__prev',
      // },
  });

  var refreshIntervalId;

  refreshIntervalId = setInterval("update()", 6000)

  function update() {
    first_slide.restart();
    first_slide__swiper.slideNext();
  }

  $('.navigate_first_slide__swiper > i:nth-child(1)').click(function () {
    first_slide.restart();
    first_slide__swiper.slidePrev();
    clearInterval(refreshIntervalId);
    refreshIntervalId = setInterval("update()", 6000)
  })

  $('.navigate_first_slide__swiper > i:nth-child(2)').click(function () {
    first_slide.restart();
    first_slide__swiper.slideNext();
    clearInterval(refreshIntervalId);
    refreshIntervalId = setInterval("update()", 6000)
  })
}
