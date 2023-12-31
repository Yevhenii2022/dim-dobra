const homeSlyder = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoHeight: true,
  speed: 600,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      navigation: {
        nextEl: ".custom-next-icon",
        prevEl: ".custom-prev-icon",
      },
      pagination: {
        el: ".swiper_pagination",
        clickable: true,
        type: "fraction",
      },
    },
  },
});

const myPostSwiper = new Swiper(".myPostSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    slideToClickedSlide: true,
  },
  spaceBetween: 20,
});

jQuery.noConflict();

jQuery(document).ready(function ($) {
  $(".tabs").lightTabs();
});

(function ($) {
  jQuery.fn.lightTabs = function (options) {
    var createTabs = function () {
      tabs = this;
      i = 0;
      showPage = function (i) {
        $(tabs).children("div").children("div").hide();
        $(tabs).children("div").children("div").eq(i).show();
        $(tabs).children("ul").children("li").removeClass("active");
        $(tabs).children("ul").children("li").eq(i).addClass("active");
      };
      showPage(0);
      $(tabs)
        .children("ul")
        .children("li")
        .each(function (index, element) {
          $(element).attr("data-page", i);
          i++;
        });
      $(tabs)
        .children("ul")
        .children("li")
        .click(function () {
          showPage(parseInt($(this).attr("data-page")));
        });
    };
    return this.each(createTabs);
  };
})(jQuery);

// Затримка для плавної прокрутки до секції
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const delay = 300;

      setTimeout(() => {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, delay);
    }
  });
});
