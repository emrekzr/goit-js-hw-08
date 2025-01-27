"use strict";
const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryItem = document.querySelector("ul.gallery");

const galleryArr = [];
let strGallery = "";
let instance;

for (const image of images) {
  const { preview, original, description } = image;
  const liElem = document.createElement("li");
  liElem.className = "gallery-item";
  const aItem = document.createElement("a");
  aItem.className = "gallery-link";
  aItem.href = original;
  const imgItem = document.createElement("img");
  imgItem.className = "gallery-image";
  imgItem.src = preview; 
  imgItem.dataset.source = original;
  imgItem.alt = description;
  imgItem.width = 360;
  imgItem.height = 200;
  aItem.append(imgItem);
  liElem.append(aItem);

  galleryArr.push(liElem);
}

strGallery = galleryArr.map((el) => el.outerHTML).join("");
galleryItem.innerHTML = strGallery;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance) {
    instance.close();
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }

  const html = `<img class='modal-img' src='${target.dataset.source}' alt='${target.alt}' width='1112' height='640'>`;

  instance = basicLightbox.create(html);
  instance.show();
});
