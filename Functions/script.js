let imageArea = document.createElement("div");
imageArea.className = "main-container";

let boxOne = document.createElement("div");
boxOne.className = "boxOne";

let boxTwo = document.createElement("div");
boxTwo.className = "boxTwo";

let boxThree = document.createElement("div");
boxThree.className = "boxThree";

let boxFour = document.createElement("div");
boxFour.className = "boxFour";

imageArea.appendChild(boxOne);
imageArea.appendChild(boxTwo);
imageArea.appendChild(boxThree);
imageArea.appendChild(boxFour);
document.body.append(imageArea);
