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