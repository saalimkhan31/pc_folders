let countVal = 0;
let randomNum = Math.floor(Math.random() * 10 + 1);
function getRandom() {
  let inputNum = document.querySelector("#number").value;

  if (randomNum < inputNum) {
    console.log(`too big`);
    countVal++;
  } else if (randomNum == inputNum) {
    console.log(`number matched`);
    displayValue();
  } else if (randomNum > inputNum) {
    console.log(`too small`);
    countVal++;
  }
}

function displayValue() {
  let text = document.createElement("p");
  text.textContent = "number of steps " + countVal;

  document.body.append(text);
}

function resetValue() {
  document.querySelector("#reset");
}
