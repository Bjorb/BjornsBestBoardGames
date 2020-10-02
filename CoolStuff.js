var Slideindex = 1;
showSlide(Slideindex);

function plusSlides(n) {
  showSlide((Slideindex += n));
}
function currentSlide(n) {
  showSlide((Slideindex = n));
}
function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("BannerSlide");
  if (n > slides.length) {
    Slideindex = 1;
  }
  if (n < 1) {
    Slideindex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[Slideindex - 1].style.display = "block";
}
