$('body').scrollspy({ target: '.topbar'});
$('ul.nav li a').on('click', function(e) {
  e.preventDefault();
  $('html,body').animate({scrollTop: $(this.hash).offset().top});
});
