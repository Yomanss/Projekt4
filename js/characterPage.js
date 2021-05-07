"use strict";

let factBox = document.querySelector(".fact_box");
let characterArticle = document.querySelector(".character_article");

const urlVarString = window.location.search;
console.log(urlVarString);
const urlVarParam = new URLSearchParams(urlVarString);
let characterID = urlVarParam.get("character_ID");
console.log(characterID);

function createCharacterArticle(description, talentSkill) {
let name = characterID.charAt(0).toUpperCase() + characterID.slice(1);
let articleSection = document.createElement("section");
let sectionH2 = document.createElement("h2");
sectionH2.innerHTML = name;
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
    });
}

function createFactBox() {

}

updateArticle();
