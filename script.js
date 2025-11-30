let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg"
];

let index = 0;
let startX = 0;

const img = document.getElementById("mainImage");

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) {
        // next
        index = (index + 1) % images.length;
    } else if (diff < -50) {
        // previous
        index = (index - 1 + images.length) % images.length;
    }

    img.src = images[index];
});
