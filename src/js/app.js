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

  var myForm = document.querySelector("form");

  var videoCont = document.querySelector("[data-video]"),
    movie = videoCont.querySelector("video"),
    buttonPlay = videoCont.querySelector("[data-play]");
  vidControl = document.querySelector(".button-cont");

  buttonPlay.onclick = function() {
    movie.play();
    vidControl.setAttribute("hidden", "true");
  };
  movie.onclick = function() {
    movie.pause();
    vidControl.removeAttribute("hidden");
  };
  movie.onended = function() {
    vidControl.removeAttribute("hidden");
  };

  myForm.onsubmit = function(e) {
    e.preventDefault();
    let humanCheck = document.getElementById("humanTest").value;

    if (humanCheck != 18) {
      alert("Jestes robotem!!!");
    }
  };
};
