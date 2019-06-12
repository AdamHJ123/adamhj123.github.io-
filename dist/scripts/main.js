$(function () {
  checkSticky();

  $('body').on('click', '.js-nav-btn', function() {
    $('body').toggleClass('nav-active');
  });

  $(document).on('scroll', function() {
    checkSticky();
  });

  $(window).on('resize', function() {
    checkSticky();
  });

  function checkSticky() {
    if ($(window).width() >= 760 && $(this).scrollTop() >= $('.js-main').offset().top) {
      $('body').addClass('sticky-enabled');
      console.log('on');
    } else {
      $('body').removeClass('sticky-enabled');
      console.log('off');
    }
  }
});
