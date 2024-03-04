// Write your code here!

// document.createElement

const main = document.getElementById("main");

main.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent= "Brian is the champion"