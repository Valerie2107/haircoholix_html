var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  console.log(slides);
  var dots = document.getElementsByClassName("dot");
  console.log(dots);
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      /* ! Il y a une erreur à gérer ici */
      try{
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }catch(e){
        console.error("Une erreur est survenue :(");
        console.log(e);
      }
/* ! Fin de l'erreur */
    }