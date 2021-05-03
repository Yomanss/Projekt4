"use strict";

let characterGallery = document.querySelector(".character_gallery");

function createCharacterCard(name) {

  let characterCard = document.createElement("div");
  characterCard.classList.add("character_card");
  let galleryImg = document.createElement("div");

  galleryImg.classList.add("gallery_img");
  let characterImg = document.createElement("img");
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
  characterImg.setAttribute(
    "src",
    "https://rerollcdn.com/GENSHIN/Characters/" + fullName + ".png"
  );
  characterImg.setAttribute("alt", name);
  let imgAnchor = document.createElement("a");
  imgAnchor.href = "resources.html";
  imgAnchor.appendChild(characterImg);
  galleryImg.append(imgAnchor);
  characterCard.append(galleryImg);

  fetch("https://api.genshin.dev/characters/" + name)
  .then((res) => res.json())
  .then((data) => {
    let vision = data.vision;
    let characterElement = document.createElement("p");
    switch(vision) {
      case "Pyro":
        characterElement.classList.add("element_pyro");
        break;
      case "Geo":
        characterElement.classList.add("element_geo");
        break;
    }
    characterElement.innerText = "Element: " + vision;
    characterElement.classList.add("character_name");
    characterCard.append(characterElement);
  });

  let characterName_a = document.createElement("a");
  let characterName_link = document.createTextNode(fullName);
  characterName_a.appendChild(characterName_link);
  characterName_a.title = fullName;
  characterName_a.href = "characterPage.html";
  let characterName = document.createElement("p");
  characterName.classList.add("character_name");
  characterName.append(characterName_a);
  characterCard.append(characterName);
  return characterCard;
}

function update() {
  fetch("https://api.genshin.dev/characters/")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((name) => {
        characterGallery.append(createCharacterCard(name));
      });
    });
}

update();
