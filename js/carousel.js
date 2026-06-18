//examples
// const a = document.getElementById("a");
// document.getElementsByClassName("class");
// document.querySelectorAll(".class");
const prevImg = document.getElementById("prevImg");
const nextImg = document.getElementById("nextImg");
const activeImg = document.getElementById("activeImg");

const imgList =
[
    "images/carousel/timberhearth.png",
    "images/carousel/sunstation.jpg",
    "images/carousel/giantsdeep.png",
    "images/carousel/brittlehollow.webp",
    "images/carousel/darkbramble.avif"
];

let currentImg = 0;

nextImg.addEventListener("click", function() {
    currentImg++;
    if (currentImg >= imgList.length) {
        currentImg = 0;
    }
    activeImg.src = imgList[currentImg];
})

prevImg.addEventListener("click", function() {
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgList.length - 1;
    }
    activeImg.src = imgList[currentImg];
})