$(document).ready(function() {
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
    // other options
  });
  //toggler btn
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });
  //sticky navbar less padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 958) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  //SMOOTH SCROLL
  $(".nav-item a").click(function(event) {
    event.preventDefault();
    let targett = $(this).attr("href");
    $("html , body").animate(
      {
        scrollTop: $(targett).offset().top - 25
      },
      2000
    );
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 958) {
      $("#back-to-top").addClass("scrollTop");
    } else {
      $("#back-to-top").removeClass("scrollTop");
    }
  });
});
