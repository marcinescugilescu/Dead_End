let header = document.querySelector(".header-content");

window.addEventListener("scroll", function() {
  if (window.scrollY == 0) {
    header.classList.remove("scroll-isMoving");
  } else if (window.innerWidth < 950) {
    header.classList.remove("scroll-isMoving");
  } else if (window.scrollY > 0) {
    header.classList.add("scroll-isMoving");
  }

  let widthContent = document.querySelector(".header-content");
  if (window.innerWidth > 1376) {
    widthContent.style.maxWidth = "1376px";
    console.log(widthContent.style.width);
  }
});

//swiper
window.onload = function() {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: { delay: 3000 },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
};
