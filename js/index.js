const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');
const themeToggle = document.getElementById('theme-toggle');
const mainContent = document.getElementById('main-content'); 
const bitacoraContent = document.getElementById('bitacora-content');
const tituloVariable = document.getElementById('titulo-variable');
const buttons = document.querySelectorAll("#integrantes .card button");
const body = document.body;

hamburger.addEventListener('click', function handleBurger(){
    navLinks.classList.toggle('show');
});

links.forEach(link => {
    link.addEventListener('click', function handleBitacora(e){
        e.preventDefault();

        const target = link.getAttribute('href');

        if (target === '#') {
            if (link.id === 'bitacora-link') {
                mainContent.style.display = 'none';
                bitacoraContent.style.display = 'block';
                tituloVariable.textContent = 'BITÁCORA';
            } else {
                bitacoraContent.style.display = 'none';
                mainContent.style.display = 'block';
                tituloVariable.textContent = 'REACTIVOS';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            bitacoraContent.style.display = 'none';
            mainContent.style.display = 'block';
            tituloVariable.textContent = 'REACTIVOS';
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        navLinks.classList.remove('show');
    });
});

themeToggle.addEventListener('change', function handleThemeToggle(){
    body.classList.toggle('dark', themeToggle.checked);
});


const urls = [
  "./avalos.html", 
  "./aixa.html", 
  "./paguaga.html", 
  "./sanchez.html", 
  "./ivanna.html"
];

buttons.forEach((button, index) => {
  button.addEventListener("click", function redirectTo(){
    window.location.href = urls[index];
  });
});

