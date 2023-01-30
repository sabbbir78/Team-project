$(function () {
  $(".review-slider").slick({
    vertical: true,
    // centerMode:true,
    autoplay: true,
    prevArrow: '<i class="fa-solid fa-arrow-down prev"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-up next"></i>',
  });

  // bottom to top
  $(window).scroll(function () {
    // console.log($(window).scrollTop())

    if ($(window).scrollTop() > 300) {
      $(".menu").addClass("nav-scroll");
    } else {
      $(".menu").removeClass("nav-scroll");
    }

    if ($(window).scrollTop() > 600) {
      $(".top-button").fadeIn();
    } else {
      $(".top-button").fadeOut();
    }
  });

  $(".top-button").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  new WOW().init();

  $(".screen-main").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cellpadding: "0px",
  });

  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });

  $(".screen-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: '<i class="fa-solid fa-angle-left previous"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next1"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".team-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    prevArrow: '<i class="fa-solid fa-angle-left previous1"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next2"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(window).on("load", function () {
    $(".preloader").delay(1500).fadeOut(450);
  });
});
