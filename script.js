
document.addEventListener("DOMContentLoaded", function() {
    console.log("Auky Gift website loaded.");
});

let currentIndex = 0;
const slidesWrapper = document.getElementById("slidesWrapper");
const slides = slidesWrapper.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  const translateX = -index * 100;
  slidesWrapper.style.transform = `translateX(${translateX}%)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 2000); // Ganti durasi di sini jika perlu

  const waButton = document.querySelector('.whatsapp-float');

  let isDragging = false, xOffset = 0, yOffset = 0;

  waButton.addEventListener('mousedown', function(e) {
    isDragging = true;
    xOffset = e.clientX - waButton.getBoundingClientRect().left;
    yOffset = e.clientY - waButton.getBoundingClientRect().top;
    waButton.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      waButton.style.left = `${e.clientX - xOffset}px`;
      waButton.style.top = `${e.clientY - yOffset}px`;
      waButton.style.bottom = 'unset';
      waButton.style.right = 'unset';
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
    waButton.style.cursor = 'grab';
  });


  function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
  }
