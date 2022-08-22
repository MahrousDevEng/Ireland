$(function () {
  "use strict";

  /*-----------------------------------------------------------------------------------*/
  /*  SLIDER REVOLUTION
/*-----------------------------------------------------------------------------------*/
  $(".tp-banner")
    .show()
    .revolution({
      dottedOverlay: "none",
      delay: 10000,
      startwidth: 1170,
      startheight: 630,
      navigationType: "bullet",
      navigationArrows: "solo",
      navigationStyle: "preview4",
      parallax: "mouse",
      parallaxBgFreeze: "on",
      parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
      keyboardNavigation: "on",
      shadow: 0,
      fullWidth: "on",
      fullScreen: "off",
      shuffle: "off",
      autoHeight: "off",
      forceFullWidth: "off",
      fullScreenOffsetContainer: "",
    });

  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)

      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /*-----------------------------------------------------------------------------------*/
  /* Pretty Photo
/*-----------------------------------------------------------------------------------*/
  $("a[data-rel^='prettyPhoto']").prettyPhoto({
    theme: "light_square",
  });
});
