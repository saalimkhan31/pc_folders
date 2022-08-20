let randomNum = Math.floor(Math.random() * 3);
// console.log(randomNum);

let rock = 0;
let paper = 1;
let scissor = 2;

function checkRock() {
  if (rock > randomNum) {
    console.log("u win");
  } else if (rock === randomNum) {
    console.log(" tie");
  } else if (rock < randomNum) {
    console.log("u loose");
  }
}

function checkPaper() {
  if (paper > randomNum) {
    console.log("u win");
  } else if (paper === randomNum) {
    console.log(" tie");
  } else if (paper < randomNum) {
    console.log("u loose");
  }
}

function checkScissor() {
  if (scissor > randomNum) {
    console.log("u win");
  } else if (scissor === randomNum) {
    console.log(" tie");
  } else if (scissor < randomNum) {
    console.log("u loose");
  }
}
