// console.log(document.querySelector("p"));
// document.body.style.backgroundColor = "blue";
// document.querySelector("p").style.backgroundColor = "yellow";
// document.querySelector("p#para").innerHTML = "heloo";
// console.log(document.querySelector("#para"));

// console.log(document.querySelectorAll(".para"));

// let elements = document.querySelectorAll(".para");

// for (let i = 0; i < elements.length; i++) {
//   elements[i].style.color = "white";
// }

// document.querySelector("#para").addEventListener("mouseover", function () {
//   alert("saalim");
// });

// document.addEventListener("keypress", function (event) {
//   console.log("key pressed", event);

//   if ((event.key == "w" || event.key == "W") && event.ctrlKey) {
//     event.preventDefault();
//     event.stopPropagation();
//     alert("quit");
//   }
// });
// window.addEventListener("beforeunload", function () {
//   event.preventDefault();
//   event.stopPropagation();
//   alert("saalim");
// });

document.title.addEventListener("mouseover", function () {
  alert("your offer is here");
});
