// script.js

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let counter = 1;
const size = images[0].clientWidth; // Ancho de cada imagen

slides.style.transform = 'translateX(' + (-size * counter) + 'px)'; // Muestra la primera imagen

// Función para avanzar al siguiente slide
function nextSlide() {
    if (counter >= images.length - 1) return;
    slides.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Función para retroceder al slide anterior
function prevSlide() {
    if (counter <= 0) return;
    slides.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Event listeners para los controles (opcional)
// Ejemplo: Puedes añadir botones HTML o controles para cambiar de slide
