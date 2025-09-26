document.addEventListener("DOMContentLoaded", function () {
  const heroTitle = document.querySelector(".hero-title");
  const originalText = heroTitle.textContent.trim();
  heroTitle.textContent = "";

  let i = 0;

  // Crear un cursor parpadeante
  const cursor = document.createElement("span");
  cursor.textContent = "|";
  cursor.style.cssText = "margin-left:5px; color:#00d4ff; animation: blink 0.8s infinite;";
  heroTitle.appendChild(cursor);

  // Efecto máquina de escribir con velocidad variable
  const typeWriter = () => {
    if (i < originalText.length) {
      cursor.insertAdjacentText("beforebegin", originalText.charAt(i));
      i++;
      // velocidad aleatoria entre 50 y 150ms
      setTimeout(typeWriter, Math.random() * 100 + 50);
    } else {
      cursor.textContent = ""; // ocultar cursor al terminar
    }
  };

  setTimeout(typeWriter, 500);

  // Animación CSS del cursor
  const style = document.createElement("style");
  style.textContent = `
    @keyframes blink {
      0%, 50% { opacity: 1; }
      50.1%, 100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});

