var functionBasedDelay = anime({
    targets: 'article',
    translateX: 250,
    direction: 'alternate',
    loop: true,
    delay: function(el, i, l) {
      return 500+ i * 100;
    }
  });