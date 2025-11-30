let images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png"
];

let current = 0;
let startX = 0;

const img = document.getElementById("mainImage");

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (endX < startX - 50) {
        // Right swipe → next
        current = (current + 1) % images.length;
    }

    if (endX > startX + 50) {
        // Left swipe → previous
        current = (current - 1 + images.length) % images.length;
    }

    img.src = images[current];
});
