const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];  // apni 6 photos
let current = 0;
const img = document.getElementById("mainImage");

function showImage(index) {
  img.src = images[index];
}

// For touch events (mobile)
let startX = 0;
img.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
img.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (endX < startX - 30) {
    current = (current + 1) % images.length;
    showImage(current);
  } else if (endX > startX + 30) {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
});

// For mouse drag (desktop)
img.addEventListener("mousedown", e => {
  startX = e.clientX;
});
img.addEventListener("mouseup", e => {
  let endX = e.clientX;
  if (endX < startX - 30) {
    current = (current + 1) % images.length;
    showImage(current);
  } else if (endX > startX + 30) {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
});
