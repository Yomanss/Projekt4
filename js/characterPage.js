"use strict";

let factBox = document.querySelector(".fact_box");
let characterArticle = document.querySelector(".character_article");

const urlVarString = window.location.search;
console.log(urlVarString);
const urlVarParam = new URLSearchParams(urlVarString);
let characterID = urlVarParam.get("character_ID");
let displayedName = characterID.charAt(0).toUpperCase() + characterID.slice(1);
switch (displayedName) {
  case "Traveler-geo":
    displayedName = "Traveler (Geo)";
    break;
  case "Traveler-anemo":
    displayedName = "Traveler (Anemo)";
    break;
  case "Hu-tao":
    displayedName = "Hu Tao";
    break;
}
console.log(characterID);

function createCharacterArticle(description, talentSkill) {
  let articleSection = document.createElement("section");
  let sectionH2 = document.createElement("h2");
  sectionH2.innerHTML = displayedName;
  articleSection.append(sectionH2);
  let sectionDescription = document.createElement("p");
  sectionDescription.innerText = description;
  articleSection.append(sectionDescription);
  console.log(talentSkill);
  return articleSection;
}

function updateArticle() {
  fetch("https://api.genshin.dev/characters/" + characterID)
    .then((res) => res.json())
    .then((data) => {
      let description = data.description;
      let talentSkill = data.talentSkill;
      characterArticle.append(createCharacterArticle(description, talentSkill));
      factBox.append(createFactBox());
    });
}

function createFactBox() {
  let factboxDiv = document.createElement("div");
  let factboxImgDiv = document.createElement("div");
  factboxImgDiv.classList.add("factbox_imgDiv");
  let factboxImg = document.createElement("img");
  factboxImg.setAttribute("src", "./images/" + displayedName + ".jpg");
  if (
    displayedName == "Traveler (Geo)" ||
    displayedName == "Traveler (Anemo)"
  ) {
    factboxImg.setAttribute("src", "./images/Traveler.jpg");
  } else {
    factboxImg.setAttribute("src", "./images/" + displayedName + ".jpg");
  }
  factboxImg.setAttribute("alt", displayedName);
  factboxImg.classList.add("factbox_img");
  factboxImgDiv.append(factboxImg);
  factboxDiv.append(factboxImgDiv);
  return factboxDiv;
}

updateArticle();
