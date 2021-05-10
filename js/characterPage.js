"use strict";

let factBox = document.querySelector(".fact_box");
let articleH2 = document.querySelector(".character_article_h2");
let descriptionArticle = document.querySelector("#description_text");

const urlVarString = window.location.search;
console.log(urlVarString);
const urlVarParam = new URLSearchParams(urlVarString);
let characterID = urlVarParam.get("character_ID");
let displayedName = characterID.charAt(0).toUpperCase() + characterID.slice(1);
let H3Name = displayedName;
switch (displayedName) {
  case "Traveler-geo":
    displayedName = "Traveler (Geo)";
    H3Name = "Traveler";
    break;
  case "Traveler-anemo":
    displayedName = "Traveler (Anemo)";
    H3Name = "Traveler";
    break;
  case "Hu-tao":
    displayedName = "Hu Tao";
    break;
}

function createFactBox(vision, birthday, nation, affiliation, weapon) {
  let factboxDiv = document.createElement("div");

  let factBoxH3 = document.createElement("h3");
  factBoxH3.innerHTML = H3Name;
  factboxDiv.append(factBoxH3);

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

  let factboxUl = document.createElement("ul");
  factboxUl.classList.add("factbox_ul");
  if (H3Name == "Traveler") {
    let listItems = ["Vision: " + vision, "Weapon: " + weapon];
    for (let i = 0; i < listItems.length; i++) {
      let factboxLi = document.createElement("li");
      factboxLi.appendChild(document.createTextNode(listItems[i]));
      factboxUl.append(factboxLi);
    }
  } else {
    birthday = birthday.substring("0000-".length);
    let listItems = [
      "Nation: " + nation,
      "Affiliation: " + affiliation,
      "Vision: " + vision,
      "Weapon: " + weapon,
      "Birthday: " + birthday,
    ];
    for (let i = 0; i < listItems.length; i++) {
      let factboxLi = document.createElement("li");
      factboxLi.appendChild(document.createTextNode(listItems[i]));
      factboxUl.append(factboxLi);
    }
  }
  factboxDiv.append(factboxUl);

  return factboxDiv;
}

function createCharacterDescription(description) {
  articleH2.innerHTML = displayedName;
  let articleSection = document.createElement("section");
  let sectionH3 = document.createElement("h3");
  sectionH3.innerHTML = "Description";
  articleSection.append(sectionH3);
  let sectionDescription = document.createElement("p");
  sectionDescription.innerText =
    description +
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident, alias omnis est praesentium impedit ducimus dolor laudantium commodi,soluta eaque voluptates, assumenda dolore! Quasi nostrum distinctio";
  articleSection.append(sectionDescription);
  return articleSection;
}

function updateArticle() {
  fetch("https://api.genshin.dev/characters/" + characterID)
    .then((res) => res.json())
    .then((data) => {
      let description = data.description;
      let talentSkill = data.talentSkill;
      let vision = data.vision;
      let birthday = data.birthday;
      let nation = data.nation;
      let affiliation = data.affiliation;
      let weapon = data.weapon;
      descriptionArticle.append(createCharacterDescription(description));
      factBox.append(
        createFactBox(vision, birthday, nation, affiliation, weapon)
      );
    });
}

updateArticle();
