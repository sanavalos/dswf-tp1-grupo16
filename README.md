# Trabajo Práctico Obligatorio 1

## DESCRIPCION

Somos un grupo de cinco desarrolladores web apasionados por la tecnología y en constante formación. Actualmente nos encontramos cursando la carrera de Desarrollo de Software, lo que nos permite combinar la práctica profesional con una base académica sólida.

El enfoque de este proyecto es darnos a conocer con nuestros compañeros y crecer como profesionales mientras participamos durante el proyecto, fomentando la colaboración, la innovación y la mejora continua.

Incluye una portada con información sobre el proyecto y acceso a las tarjetas de los integrantes y a la bitácora.

## TECNOLOGIAS UTILIZADAS

- HTML
- CSS
- JavaScript
- Google Fonts
- iframe

## ESTRUCTURA DE ARCHIVOS

En la raíz del proyecto se ubican los archivos .html y los directorios que contienen los estilos, fuentes, imagenes y scripts.

Para evitar el efecto cascada en las hojas de estilo se decidio modular los archivos .css creando uno por página. A su vez, se opto por seguir el mismo enfoque con los archivos .js para no ejecutar funciones innecesarias.

```bash
.
├── css/
│   └── styles.css
├── fonts/
│   └── font.ttf
├── img/
│   └── image.png
├── js/
│   └── index.js
└── index.html
```

## JAVASCRIPT
```JavaScript
// index.js

handleBurger() // mostrar/ocultar opciones al hacer click
handleBitacora(e) // mostrar y/o ocultar la sección de bitacora
handleThemeToggle() // aplicar/eliminar clase "dark" a tag body para el manejo de temas
redirectTo() // agregar evento click a los botones de las tarjetas para rediriger a la url correspondiente
```

```js
// script_avalos.js

typeWriterEffect() // renderizar letras cada 100 milisegundos
```

```js
// script_aixa.js

```

```js
// script_paguaga.js

aplicarDelay(tag, index) // Muestra las etiquetas de habilidades con un efecto de delay de 0.2segundos 
mostrarPelicula(index) // Muestra en el slide la película con el índice enviado como parámetro
cambiarPelicula(direccion) // Cambia la película activa por la anterior o la siguiente según la dirección
verTrailer(url) // Abre en una ventana modal el trailer de la película enviado como parámetro
cerrarModal() // Obtiene el video, limpia el src para detenerlo, y permite ocultar la ventana modal
```

```js
// script_sanchez.js

```

```js
// script_ivanna.js

flipCard() // Al hacer click en cualquier lugar de la tarjeta, esta realiza una animación de "voltearse" para revelar el contenido que había detrás de ella. Varía indefinidamente entre las posiciones del frente y el dorso de dicha tarjeta.
playButton.addEventListener(click) // Reproduce y reanuda una canción al hacerle click al símbolo de "play" en la tarjeta del lado del frente, la cual suena en loop hasta que se la detenga.
pauseButton.addEventListener(click) // Pausa la canción que está siendo reproducida.

Tanto playButton como pauseButton no son afectados por el click de flipCard. Al hacer click en estas secciones, la tarjeta se mantiene en su lugar.
```

## LINKS

Deploy: [front-reactivos.vercel.app](https://front-reactivos.vercel.app)

GitHub: [dswf-tp1-grupo16](https://github.com/sanavalos/dswf-tp1-grupo16)
