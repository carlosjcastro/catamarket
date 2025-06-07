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
});

const indicators = document.querySelectorAll(".indicator");

function moveCarousel() {
  const offset = -(currentIndex * 100);
  carouselInner.style.transform = `translateX(${offset}%)`;
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

autoSlide = setInterval(nextSlide, 3000);

moveCarousel();
