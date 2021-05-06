"use strict";

let factBox = document.querySelector(".fact_box");

const urlVarString = window.location.search;
console.log(urlVarString);
const urlVarParam = new URLSearchParams(urlVarString);
let characterID = urlVarParam.get("character_ID");
console.log(characterID);

function createFactBox() {

}