function sum(a, b) {
  return a + b;
}
// console.log(sum(10, 20));
// console.log(sum(100, 100));
// console.log(sum(100, 50, 100));

function sum(...arg) {
  console.log(arg);
  let num = 0;
  for (let i of arg) {
    num += i;
  }
  return num;
}
// console.log(sum(10, 20, 7, 90, 8));

let name = ["saalim"];
let age = [20];
// let result = name.concat(age);

let result = [...name, ...age];
// console.log(result);

function playerList(a, b, ...c) {
  //   console.log(`${a} ${b}`);
  console.log(`${c}`);
}
playerList(
  "Mukul",
  "Latiyan",
  "Lionel",
  "Messi",
  "Barcelona",
  "Lionel",
  "Messi",
  "Barcelona",
  "Lionel",
  "Messi",
  "Barcelona",
  "Lionel",
  "Messi",
  "Barcelona"
);

let num1 = [1, 2, 3, 4];
let num2 = [6, 7, 8, 9];
let results = [...num1, ...num2];
// console.log(results);

function reducer(...arg) {
  console.log(
    arg.reduce((preVal, currVal) => {
      return preVal + currVal;
    })
  );
}
reducer(100, 100, 100, 1000);
