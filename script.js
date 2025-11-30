let images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png"
];

let index = 0;
let imgTag = document.getElementById("mainImage");

// Swipe detect
let startX = 0;

document.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", function(e) {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextImage();      // left swipe
    } 
    else if (endX - startX > 50) {
        prevImage();      // right swipe
    }
});

function nextImage() {
    index = (index + 1) % images.length;
    imgTag.src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    imgTag.src = images[index];
}
