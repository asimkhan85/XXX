let images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png"
];

let index = 0;
let img = document.getElementById("mainImage");

let startX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        // swipe left
        index = (index + 1) % images.length;
    } 
    else if (endX - startX > 50) {
        // swipe right
        index = (index - 1 + images.length) % images.length;
    }

    img.src = images[index];
});
