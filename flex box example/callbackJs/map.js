let number = [2000, 1000, 100, 10];

let result = number.reduce((p1, p2) => p1 + p2);
// console.log(result);

let wages = [1800, 2000, 3000, 5000, 500];
let salary = 14700;

let results = wages.reduce((preVal, currVal) => preVal - currVal, salary);
// console.log(results);

let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

let filtered = ageGroup.reduce(function (preVal, currVal) {
  if (preVal.indexOf(currVal) === -1) {
    preVal.push(currVal);
  }
  return preVal;
}, []);

// console.log(filtered);

let arr = [3, 4, 5, 6];
let newArray = arr.map((e) => e * 10);
// console.log(newArray);

let userInfo = [
  {
    name: "adam",
    lastName: "doe",
  },
  {
    name: "andrew",
    lastName: "smith",
  },
];

// let detail = userInfo.map((e) => `${e.name} ${e.lastName}`);
let detail = userInfo.map((e) => {
  return `${e.name} ${e.lastName}`;
});
// console.log(detail);

// let arrays = [2, 3, 5, 7];

// arrays.map((value, index, array) => {
//   console.log(value);
//   console.log(index);
//   console.log(array);
//   return value;
// });

// let data = [2, 4, 5, 6];
// data.map((value, index, array) => {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// }, 10);

// let str = ["s", "a", "l", "i", "m"];

// let rsultData = str.join("");
// console.log(rsultData);
let str = "civic";
let strData = str.split("");

let name = "saalim";

let map = Array.prototype.map;
let newName = map.call(name, (letter) => {
  return `${letter}`;
});
// console.log(newName);
