let current = 0;

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png"
];

const img = document.getElementById("img");

img.src = images[current];

img.addEventListener("touchstart", startTouch, false);
img.addEventListener("touchend", endTouch, false);

let startX = 0;

function startTouch(e) {
  startX = e.changedTouches[0].screenX;
}

function endTouch(e) {
  let endX = e.changedTouches[0].screenX;

  if (endX < startX - 50) {
    nextImage();
  }
  if (endX > startX + 50) {
    prevImage();
  }
}

function nextImage() {
  current = (current + 1) % images.length;
  img.src = images[current];
}

function prevImage() {
  current =
    (current - 1 + images.length) % images.length;
  img.src = images[current];
}
