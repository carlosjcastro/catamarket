const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function moveCarousel() {
  const totalItems = carouselItems.length;
  const offset = -(currentIndex * 100);
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  moveCarousel();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  moveCarousel();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

let autoSlide = setInterval(nextSlide, 3000);

nextBtn.addEventListener("click", () => clearInterval(autoSlide));
prevBtn.addEventListener("click", () => clearInterval(autoSlide));
