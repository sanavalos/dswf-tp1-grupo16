function alternarEstilo() {
  const tarjeta = document.getElementById('tarjeta');
  const disney = tarjeta.querySelector('.contenido.disney');
  const merlina = tarjeta.querySelector('.contenido.merlina');
  const body = document.body;
  const boton = document.querySelector("button");

  const esDisney = !disney.classList.contains('oculto');

  if (esDisney) {
    // Cambiar a Merlina
    disney.classList.add('oculto');
    merlina.classList.remove('oculto');
    body.classList.remove('disney-activa');
    body.classList.add('merlina-activa');
    boton.innerHTML = "🦇 Cambiar estilo";

    alert("🖤 Bienvenida al lado oscuro del código 🖤");

    // Partículas estilo Merlina
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        color: { value: '#000000' },
        shape: { type: 'circle' },
        opacity: { value: 0.8, random: false },
        size: { value: 4, random: true },
        move: {
          enable: true,
          speed: 1.8,
          direction: 'none',
          out_mode: 'out'
        }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });

  } else {
    // Cambiar a Disney
    merlina.classList.add('oculto');
    disney.classList.remove('oculto');
    body.classList.remove('merlina-activa');
    body.classList.add('disney-activa');
    boton.innerHTML = "🧙‍♀️ Cambiar estilo";

    alert("✨ De vuelta al reino encantado ✨");

    // Partículas estilo Disney
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        color: { value: '#ff69b4' },
        shape: { type: 'star' },
        opacity: { value: 0.6 },
        size: { value: 4 },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'repulse' }
        }
      },
      retina_detect: true
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tarjeta = document.getElementById('tarjeta');
  const body = document.body;

  // Mostrar contenido Disney por defecto
  tarjeta.querySelector('.contenido.disney').classList.remove('oculto');
  tarjeta.querySelector('.contenido.merlina').classList.add('oculto');
  body.classList.add('disney-activa');
  body.classList.remove('merlina-activa');

  // Inicializar partículas Disney al cargar
  particlesJS('particles-js', {
    particles: {
      number: { value: 80 },
      color: { value: '#ff69b4' },
      shape: { type: 'star' },
      opacity: { value: 0.6 },
      size: { value: 4 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'repulse' }
      }
    },
    retina_detect: true
  });
});
