// let box1 = document.createElement("input");
// box1.className = "square";
// box1.id = "firstBox";
// box1.placeholder = 1;

// let box2 = document.createElement("input");
// box2.className = "square";
// box2.id = "secondBox";
// box2.placeholder = 2;

// let box3 = document.createElement("input");
// box3.className = "square";
// box3.id = "thirdBox";
// box3.placeholder = 3;

// let box4 = document.createElement("input");
// box4.className = "square";
// box4.id = "fourthBox";
// box4.placeholder = 4;

// parent.appendChild(box1);
// parent.appendChild(box2);
// parent.appendChild(box3);
// parent.appendChild(box4);

let parent = document.querySelector("#parent");
let box = document.querySelector("#num1");
box.focus();

parent.addEventListener("keyup", function (e) {
  console.log(e);

  if (e.target.tagName === "INPUT") {
    if (e.key === "Backspace") {
      e.target?.previousElementSibling?.focus();
    }
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      e.target?.nextElementSibling?.focus();
    }
  }
});

// const parentEl = document.querySelector("#otpFieldArea");
// const field1 = document.querySelector("#num1");
// field1.focus();
// parentEl.addEventListener("keyup", function (e) {
//   console.log(e);
//   if (e.target.tagName === "INPUT") {
//     if (e.key === "Backspace") {
//       e.target?.previousElementSibling?.focus();
//     }

//     //this line solves the bug...
//     if (e.keyCode >= 48 && e.keyCode <= 57) {
//       e.target?.nextElementSibling?.focus();
//     }
//   }
// });
