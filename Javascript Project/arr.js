// // let newArr = [];
// // let result = arr.map((x) => x % 2 == 0);
// // newArr.push(result);
// // console.log(newArr);

// let arr = [3, 2, 4, 7, 8, 11, 5, 10, 24, 42, 43, 101, 102, 111, 100];

// function findEven(arr = []) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(findEven(arr));

// function findOdd(arr = []) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(findOdd(arr));

// let number = 10;

// function checkMultiple(arr = []) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(checkMultiple(arr));

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 12];

// function getEven(arr = []) {
//   let evenArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evenArr.push(arr[i]);
//     }
//   }
//   return evenArr;
// }
// console.log(getEven(arr));

// function getSum() {
//   let sum = getEven();
//   let result = sum.reduce((preVal, currVal) => preVal + currVal);
//   return result;
// }
// console.log(getSum());

// function checkMultiple() {
//   let newArr = [];
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }
// console.log(checkMultiple());

// function addMultiple() {
//   let add = checkMultiple();
//   // let sum = add.map((x) => x + x);

//   let sum = add.reduce((pre, curr) => pre + curr);

//   return `the sum of all even numbers ${sum}`;
// }
// console.log(addMultiple());

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 12];

let result = arr.filter((x) => x % 2 == 0);

let data = result.reduce((pre, cur) => pre + cur);

console.log(result);
console.log(data);
