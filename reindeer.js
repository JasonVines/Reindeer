"use strict";

console.log("reindeer");


// Reindeer Games

let colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
let reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
let hohohoElement = document.getElementById("reindeer");


for (let i = 0; i < reindeer.length; i++) {
	hohohoElement.innerHTML += "<p>" + (colors[i] + " " +reindeer[i]) + "</p>";
}