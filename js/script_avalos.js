document.addEventListener("DOMContentLoaded", function typeWriterEffect() {
 const heroTitle = document.querySelector(".hero-title");
 const originalText = heroTitle.textContent;
 heroTitle.textContent = "";

 let i = 0;
 const typeWriter = () => {
  if (i < originalText.length) {
   heroTitle.textContent += originalText.charAt(i);
   i++;
   setTimeout(typeWriter, 100);
  }
 };

 setTimeout(typeWriter, 500);
});