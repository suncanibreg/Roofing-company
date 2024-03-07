/* we define slideIndex (index of current slide i.e. photo) for going through slides array */
 let slideIndex = 0;
 showSlides(); //we activate function showSlides to execute itself
/* we create function showSlides, which will show slides i.e. photos one by one. */
 function showSlides() {
   let i;
   let slides = document.getElementsByClassName("mySlides");// defined already.
   let dots = document.getElementsByClassName("dot");/* dot is defined in html-css files */
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";//at the beginning slide/photo doesn't display.  
   }
   slideIndex++; /*variable "slideIndex" is growing exactly as grow index of Image(related with
   variable "dots" (which is array and means circles under the displaying picture)*/
   if (slideIndex > slides.length) {slideIndex = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
 }     




/*postavljam kutiju-kontejner u koju postavljam slike, recimo 4 slike u promenljivu sli azatim
pravim i promenljivu tok-slika kao niz koja sadrzi imena slika za tok pochetna vrednost je odredjena sa 0.*/
/*
var trenSlika = document.getElementById("slike");

var slikeZaTok = ["exRoofDone-1.jpg", "exRoofDone-2.jpg", "exRoofDone-3.jpg", "exRoofDone-4.jpg"];

var zapochni = 0;
*/
/*pravim funkciju za tok slika*/

/*function poteciSlike(){
  if (zapochni < slikeZaTok.length){
    zapochni = zapochni + 1;
  } 
  else{
    zapochni= 1;
  }
  console.log(trenSlika);
  trenSlika.innerHTML = "<img src="+slikeZaTok[zapochni-1]+">"
}
*/
/*postavljam da program pokrece novu sliku na svakih 1.5 sekundi tj. na 1500ms (milisekundi)*/

//setInterval(poteciSlike, 1500);






