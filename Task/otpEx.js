const parentEl = document.querySelector("#otpFieldArea");
const field1 = document.querySelector("#num1");
field1.focus();
parentEl.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (e.target.tagName === "INPUT") {
    if (e.target.key === "Backspace") {
      e.target?.previousElementSibling?.focus();
    } else {
      e.target?.nextElementSibling?.focus();
    }
  }

  // fields[1].focus();
});

// const parentEl = document.querySelector("#otpFieldArea");
// const field1 = document.querySelector("#num1");
// field1.focus();
// parentEl.addEventListener("keyup", function (e) {
//   console.log(e);
//   if (e.target.tagName === "INPUT") {
//     e.target?.nextElementSibling?.focus();
//   }

//   // fields[1].focus();
// });
