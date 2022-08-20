let root = document.querySelector("#main");

let images = ["food1.jpeg", "food2.jpeg", "food3.jpeg", "food1.jpeg"];
let curIndx = 0;

let slideImg = document.createElement("img");
slideImg.className = "slideImg";
slideImg.src = images[curIndx];

let prevBtn = document.createElement("button");
prevBtn.textContent = "prev";
prevBtn.className = "butons";
prevBtn.id = "btn";
prevBtn.addEventListener("click", function () {
  curIndx -= 1;
  slideImg.src = images[curIndx];
});

let nextBtn = document.createElement("button");
nextBtn.textContent = "next";

nextBtn.className = "butons";
nextBtn.addEventListener("click", function () {
  curIndx += 1;
  slideImg.src = images[curIndx];
});

root.appendChild(slideImg);
root.appendChild(nextBtn);
root.appendChild(prevBtn);
