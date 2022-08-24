$(function () {
  "use strict";

  // Fixed Header on Scroll
  const Header = $("#fixedHeader");

  if (Header.length) {
    $(window).on("scroll", function () {
      if ($("body").height() > $(this).height() * 1.5) {
        if ($(this).scrollTop() > Header.innerHeight()) {
          if (!Header.hasClass("fixed")) {
            Header.addClass("fixed");
          }
        } else {
          if (Header.hasClass("fixed")) {
            Header.removeClass("fixed");
          }
        }
      }
    });
  }

  // Mobile Header
  if ($(".main-navigation .navigation-box").length) {
    var subMenu = $(".main-navigation .submenu");
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
      });
    var mainNavToggler = $(".header-navigation .menu-toggler");
    var subNavToggler = $(".main-navigation .sub-nav-toggler");
    mainNavToggler.on("click", function () {
      var Self = $(this);
      var menu = Self.closest(".header-navigation").find(Self.data("target"));
      $(menu).slideToggle();
      $(menu).toggleClass("showen");
      return false;
    });
    subNavToggler.on("click", function () {
      var Self = $(this);
      Self.parent().parent().children(".submenu").slideToggle();
      return false;
    });
  }
});
