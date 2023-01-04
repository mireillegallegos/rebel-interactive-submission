// Javascript goes here

//initialize slider in Client section
var slider = tns({
  container: '#clients .slider',
  navPosition: 'bottom',
  autoplay: false,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  items: 1,
  responsive: {
    576: {
      edgePadding: 0,
      gutter: 20,
      items: 2
    },
    786: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
});