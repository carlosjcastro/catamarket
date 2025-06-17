const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const indicatorsContainer = document.querySelector(".carousel-indicators");
let currentIndex = 0;
let autoSlide;

carouselItems.forEach((_, index) => {
  const btn = document.createElement("button");
  btn.className = "indicator w-3 h-3 rounded-full bg-gray-400";
  btn.dataset.index = index;
  indicatorsContainer.appendChild(btn);

  btn.setAttribute("aria-label", `Ir a la imagen ${index + 1} del carrusel`);
  if (index === currentIndex) {
    btn.setAttribute("aria-current", "true");
  } else {
    btn.setAttribute("aria-current", "false");
  }

  indicatorsContainer.appendChild(btn);
});

const indicators = document.querySelectorAll(".indicator");

function moveCarousel() {
  const offset = -(currentIndex * 100);

  if (carouselInner.style.transform !== `translateX(${offset}%)`) {
    carouselInner.style.transition = "transform 0.5s ease";
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.remove("bg-gray-400");
      indicator.classList.add("bg-[#7e8d48]");
    } else {
      indicator.classList.add("bg-gray-400");
      indicator.classList.remove("bg-[#7e8d48]");
    }
  });
}

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    clearInterval(autoSlide);
    currentIndex = parseInt(indicator.dataset.index);
    moveCarousel();
  });
});

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  moveCarousel();
}

let lastTime = 0;
function autoSlideFunc() {
  const now = performance.now();
  if (now - lastTime >= 3000) {
    nextSlide();
    lastTime = now;
  }
  requestAnimationFrame(autoSlideFunc);
}

requestAnimationFrame(autoSlideFunc);

moveCarousel();

/*
  Contribuciones del equipo:
  - Carlos José Castro Galante: Implementó la lógica funcional con JavaScript, estructuró los datos simulados y organizó las funcionalidades basadas en las historias de usuario.
  - Luciano Alexis Luna Pacheco: Participó en el diseño general del sitio y la estructura visual, utilizando HTML5 y CSS3/Tailwind.
  - Camila Fiama Reales Herbel: Diseñó interfaces en Canva, colaboró en la creación de estilos responsivos y la maquetación visual de componentes.
  - Matías Tula Sarquis: Encargado de la estructura y maquetación de secciones, aplicando estilos con CSS3/Tailwind.
  - Valentín Varas: Apoyó en la maquetación general, diseño de vistas principales y en la creación de estilos visuales adaptables.
  - Francisco David Vega Varela: Diseñó interfaces en Figma y maquetó la página de inicio y componentes reutilizables, siempre con enfoque en la experiencia de usuario.
  Fecha de creación: 13/06/2025
*/
