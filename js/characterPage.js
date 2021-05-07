"use strict";

let factBox = document.querySelector(".fact_box");
let characterArticle = document.querySelector(".character_article");

const urlVarString = window.location.search;
console.log(urlVarString);
const urlVarParam = new URLSearchParams(urlVarString);
let characterID = urlVarParam.get("character_ID");
console.log(characterID);

function createCharacterArticle(description) {
let articleSection = document.createElement("section");
let sectionH2 = document.createElement("h2");
sectionH2.innerHTML = "Amber";
articleSection.append(sectionH2);
let sectionDescription = document.createElement("p");
sectionDescription.innerText = description;
articleSection.append(sectionDescription);
return articleSection;
}

function updateArticle() {
    fetch("https://api.genshin.dev/characters/" + characterID)
    .then((res) => res.json())
    .then((data) => {
        let description = data.description;
        characterArticle.append(createCharacterArticle(description));
    });
}

function createFactBox() {

}

updateArticle();
