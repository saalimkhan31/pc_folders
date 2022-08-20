// const timeOut = function () {
//   document.write("i will call back again n again" + "<br>");
// };

// setInterval(timeOut, 5000);

// setInterval(() => {
//   document.write("i will call back again nagain" + "<br>");
// }, 2000);

// myFunction(10);

// () => console.log("i called my self")();

// (function (num1, num2) {
//   console.log("i called myself", num1 + num2);
// })(10, 20);

// function greet(name) {
//   function display() {
//     console.log("hi" + name);
//   }
//   display();
// }
// console.log(greet("saalim"));

// let a = 5;
// let b = 6;

// console.log(!(a >= 11 && b > 11));

// myPromise = new Promise((resolve, reject) => {
//   console.log("promise 1 resolved");
// })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// async function apiData() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   let data = await fetch(url);
//   let result = await data.json();
//   console.log(result);
// }
// apiData();

// async function apiData() {
//   let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let result = await data.json();
//   console.log(result);
// }
// apiData();

const myObj = {
  info(verified) {
    return `${this.name} ${this.age} ${verified}`;
  },
};

const person = {
  name: " salim",
  age: 23,
};

const personTwo = {
  name: "arish",
  age: 88,
};

console.log(myObj.info.call(personTwo, true));
