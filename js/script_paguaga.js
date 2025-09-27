const tags = document.querySelectorAll('.tag');
const btnAnterior = document.querySelector('.btn-anterior');
const btnSiguiente = document.querySelector('.btn-siguiente');

tags.forEach(function aplicarDelay(tag, index) {
  tag.style.animationDelay = `${index * 0.2}s`;
});

let indicePelicula = 0;
const slides = document.querySelectorAll('.slide');

function mostrarPelicula(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

mostrarPelicula(indicePelicula);

function cambiarPelicula(direccion) {
  indicePelicula += direccion;
  if (indicePelicula < 0) indicePelicula = slides.length - 1;
  if (indicePelicula >= slides.length) indicePelicula = 0;
  mostrarPelicula(indicePelicula);
}

function verTrailer(url) {
  const modal = document.getElementById('modalTrailer');
  const trailer = document.getElementById('trailer');
  trailer.src = url + "?autoplay=1";
  modal.style.display = "flex";
}

function cerrarModal() {
  const modal = document.getElementById('modalTrailer');
  const trailer = document.getElementById('trailer');
  trailer.src = "";
  modal.style.display = "none";
}

btnAnterior.addEventListener('click', () => {
  window.location.href = './aixa.html';
});

btnSiguiente.addEventListener('click', () => {
  window.location.href = './sanchez.html';
});