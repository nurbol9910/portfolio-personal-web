$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Software Engineer", "Web Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed2 = new Typed(".typing-2", {
    strings: ["Software Engineer", "Web Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    // $(".menu-btn .icon").toggleClass("fa-bars");
    // $(".menu-btn .icon").toggleClass("fa-xmark");

    $(".menu-btn i").toggleClass("active");
    $(".navbar .menu").toggleClass("active");
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
