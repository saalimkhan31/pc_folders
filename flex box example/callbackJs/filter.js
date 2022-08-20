// let name = ["saalim", "khans"];
// let result = name.filter((x) => x.length >= 5).map((y) => y.toUpperCase());
// // console.log(result);

// let numbers = [9999, 20, 30, 40, 50];
// let initialVal = 0;
// let sum = numbers.reduce((preVal, curVal) => preVal + curVal, initialVal);
// // console.log(sum);

// let fruits = ["apple", "banana", "pineapple"];
// let fruitsName = fruits.filter((x) => x.length > 5).map((y) => y.toUpperCase());
// console.log(fruitsName);

let fruits = ["kiwi", "banana", "orange"];

let result = fruits
  .filter((array) => array.length > 5)
  .map((x) => x.toUpperCase());

// console.log(result);

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
console.log(detail);

// let obj = {
//   name: "saalim",
//   lastName: "khan",
//   verified: true,
//   age: 98,
//   info() {
//     return (
//       this.name + " " + this.lastName + " " + this.age + " " + this.verified
//     );
//   },
// };

// person = {
//   name: "arish",
//   lastName: "syed",
//   verified: false,
//   age: 88,
// };

// let results = obj.info.bind(person);
// console.log(results());
let a = 10;
let b = a;
a = 20;
console.log(a);
console.log(b);
