const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

playButton.addEventListener('click', () => {
    event.stopPropagation(); 
    audio.play();
});

pauseButton.addEventListener('click', () => {
    event.stopPropagation(); 
    audio.pause();
});

const cards = document.querySelectorAll(".profile-card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));
