let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides fade");
  let dots = document.getElementsByClassName("mySlides fade");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

}

document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("button");
  var popup = document.getElementById("popup");
  var closePopup = document.getElementById("closePopup");

  button.addEventListener("click", function() {
      popup.style.display = "block";
  });

  closePopup.addEventListener("click", function() {
      popup.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });
});



