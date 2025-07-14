const images = [
  "https://picsum.photos/id/100/500/300",
  "https://picsum.photos/id/101/500/300",
  "https://picsum.photos/id/102/500/300",
  "https://picsum.photos/id/103/500/300"
];

let currentIndex = 0;
const imageElement = document.getElementById("carousel-image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

imageElement.src = images[currentIndex];

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
imageElement.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
imageElement.src = images[currentIndex];
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
imageElement.src = images[currentIndex];
}, 3000);
