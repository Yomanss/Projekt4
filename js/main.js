"use strict";

let characterGallery = document.querySelector(".character_gallery");

function createCharacterCard(name, vision) {
  let characterCard = document.createElement("div");
  characterCard.classList.add("character_card");
  let galleryImg = document.createElement("div");
  galleryImg.classList.add("gallery_img");
  let galleryImgImg = document.createElement("img");
  let fullName = name.charAt(0).toUpperCase() + name.slice(1);
  switch (fullName) {
    case "Traveler-geo":
      fullName = "Traveler (Geo)";
      break;
    case "Traveler-anemo":
      fullName = "Traveler (Anemo)";
      break;
    case "Hu-tao":
      fullName = "Hu Tao";
      break;
  }
  galleryImgImg.setAttribute(
    "src",
    "https://rerollcdn.com/GENSHIN/Characters/" + fullName + ".png"
  );
  galleryImgImg.setAttribute("alt", name);
  galleryImg.append(galleryImgImg);
  characterCard.append(galleryImg);
  let characterName = document.createElement("p");
  characterName.classList.add("character_name");
  characterName.innerText = fullName;
  characterCard.append(characterName);
  return characterCard;
}

function update() {
  fetch("https://api.genshin.dev/characters/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((name, vision) => {
        characterGallery.append(createCharacterCard(name, vision));
      });
    });
}

update();
