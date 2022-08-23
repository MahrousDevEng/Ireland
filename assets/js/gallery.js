$(function () {
  "use strict";

  // magnific popup init
  $(".image-popup-no-margins").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  if ($(".filter-box").children().length > 0) {
    $(".filter-btns").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $(".filter-box").isotope({ filter: filterValue });
    });

    $(".filter-btns li").each(function () {
      $(this).on("click", function () {
        $(this).siblings("li.active").removeClass("active");
        $(this).addClass("active");
      });
    });

    $(".filter-box img.lazy").lazy({
      placeholder: "../img/icon/loading.png",
      afterLoad: function (element) {
        element.removeClass("adjust-size");
        $(".filter-box").isotope({
          itemSelector: ".filter-item",
          masonry: {
            columnWidth: 1,
          },
        });
      },
    });
  }

  // Normal Lazy Load
  $(".normal-lazy").length && $(".normal-lazy").lazy();
});
