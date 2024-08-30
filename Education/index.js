document.addEventListener("DOMContentLoaded", function () {
  var iconMenu = document.querySelector(".fa-bars");
  var iconClose = document.querySelector(".fa-xmark");
  var dropMenu = document.querySelector(".navbar");

  if (iconMenu && iconClose) {
    iconMenu.addEventListener("click", function () {
      iconMenu.style.display = "none";
      iconClose.style.display = "block";
      dropMenu.style.display = "block";
    });

    iconClose.addEventListener("click", function () {
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
      dropMenu.style.display = "none";
    });
  }
});

// Hiệu ứng zoom navbar khi scroll body bằng jQuery
$(document).ready(function () {
  // Hàm xử lý sự kiện cuộn
  $(window).on("scroll", function () {
    // Kiểm tra vị trí cuộn
    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });
});
