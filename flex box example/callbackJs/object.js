let userInfo = {
  info: function (city, country, verified) {
    return `${this.name} ${this.age} ${city} ${country} ${verified}`;
  },
};

let userOne = {
  name: "salim",
  age: 19,
};
let userTwo = {
  name: "khan",
  age: 10,
};

// console.log(userInfo.info.apply(userTwo, ["nagpur", "india", true]));

let arr1 = [3, 5, 7, 8];
let result = arr1.map((x) => x * 2);
// console.log(result);

let fruits = ["apple", "banana", "mango", "kiwi"];

// let filteredFruits = fruits
//   .filter((x) => x.length >= 5)
//   .map((x) => x.toUpperCase());
// console.log(filteredFruits);

let filteredFruits = fruits
  .map((x) => x.toUpperCase())
  .filter((x) => x.length >= 5);
console.log(filteredFruits);
