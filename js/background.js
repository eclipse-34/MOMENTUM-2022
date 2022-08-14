const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
];

const chosenimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimage}`;

document.body.appendChild(bgImage);

bgImage.classList.add("backimg");
