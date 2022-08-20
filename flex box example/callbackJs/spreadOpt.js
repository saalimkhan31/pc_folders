// let arr1 = ["saalim"];
// let arr2 = ["khan"];
// // let result = arr1.concat(arr2);
// let result = [...arr1, ...arr2];
// // console.log(result);

let numbers = [1, 2, 3, 4, 5];
let [one, two, ...rest] = numbers;

// console.log(...rest);

let person1 = {
  name: "salim",
  lastName: "khan",
};
let person2 = {
  verified: true,
  age: 17,
};

let info = { ...person1, ...person2 };
// console.log(info);
