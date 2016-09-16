// external js: masonry.pkgd.js

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160
// });


  var container = document.querySelector('.grid');
  var masonry = new Masonry(container, {
    columnWidth: 180,
    itemSelector: '.grid-item'
    isFitWidth: true
  });